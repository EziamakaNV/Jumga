import db from '../../../../../database/models';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
require('dotenv').config();

export default {
  async generatePaymentLink(customerEmail, merchandiseId, currency) {
      const countryCode = {
          NGN: 'amountInNaira',
          GBP: 'amountInPounds',
          KES: 'amountInKenyanShilling',
          GHS: 'amountInCedi',
      };

      try {
          //txn_reference
          const txn_reference = uuidv4();
          // merchandise
          const merchandise = await db.merchandise.findOne({
              where: {
                  id: merchandiseId
              }
          });

          // seller
          const seller = await db.seller.findOne({
              where: {
                  id: merchandise.seller
              }
          })

          // add transaction to the table
          const transaction = await db.paymentForSeller.create({
              customer: customerEmail, amount: merchandise[countryCode[currency]] + seller.deliveryFee,
              seller: seller.id,
              currency, txn_reference, status: 'pending'
          });

          const flutterWaveResponse = await axios({
            method: 'post',
            baseURL: 'https://api.flutterwave.com',
            url: '/v3/payments',
            headers: {
                "Authorization": `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,
                "Content-Type": "application/json",
            },
            data: {
                
                    tx_ref: txn_reference,
                    amount: merchandise[countryCode[currency]] + seller.deliveryFee,
                    currency,
                    redirect_url:"https://webhook.site/test",
                    payment_options :"card",
                    customer:{
                       email: customerEmail,
                    },
                    customizations:{
                       title: `${seller.name} store`,
                       description: `Payment for ${merchandise.name}`,
                       "logo":"https://assets.piedpiper.com/logo.png"
                    }
            }
        });

        return flutterWaveResponse.data.data.link;
         
      } catch (error) {
          throw Error(error);
      }
  }
}
    