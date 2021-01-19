import db from '../../../../../database/models';

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
  }
}
    