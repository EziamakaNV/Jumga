import db from '../../../../../database/models';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
require('dotenv').config();

export default {
  async createSeller(name, email) {
      try {
          // add seller to db
          const seller = await db.seller.create({ name, email, active: false });
          

          // assign dispatch rider to seller
          const dispatchRiders = await db.dispatchRider.findAll();
          const chosenDipatchRider = Math.floor( Math.random() * Math.floor( dispatchRiders.length - 1 ) );

          //insert into seller-dipatch table
          const sellerDispatchAssignment = await db.sellerDispatch.create({
              dispatchRider: dispatchRiders[chosenDipatchRider].id,
              seller: seller.id
          });

          // add test merchandise
          const merchandise = await db.merchandise.bulkCreate([
              { name: 'shirt', numberInStock: 300, seller: seller.id, amountInNaira: 2000.99, amountInCedi: 1500, amountInKenyanShilling: 3000, amountInPounds: 300 },
              { name: 'shorts', numberInStock: 300, seller: seller.id, amountInNaira: 2000.99, amountInCedi: 1500, amountInKenyanShilling: 3000, amountInPounds: 300 },
              { name: 'sneakers', numberInStock: 300, seller: seller.id, amountInNaira: 2000.99, amountInCedi: 1500, amountInKenyanShilling: 3000, amountInPounds: 300 },
          ]);


          return { seller, sellerDispatchAssignment, merchandise };
      } catch (error) {
          throw Error(error);
      }
  },

  async activateSeller(id, email) {
        try {
            const txn_reference = uuidv4();
            const seller = await db.seller.findOne({ where : { id } });

            // add transaction to the table
          const transaction = await db.sellerActivationPayment.create({
              seller: seller.id, amountInDollar: 20, status: 'pending', txn_reference,
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
                      amount: 20,
                      currency: 'KES',
                      redirect_url:"https://webhook.site/test",
                      payment_options :"card",
                      customer:{
                         email
                      },
                      customizations:{
                         title: `${seller.name} store`,
                         description: `Payment for store activation`,
                         "logo":"https://assets.piedpiper.com/logo.png"
                      }
              }
          });

          return flutterWaveResponse.data.data;
        } catch (error) {
            throw Error(error);
        }
  }

}
    