# Jumga

- Make sure to run migrations and to seed data
- add secret hash, flutterwave api secret key and database url as stated in the .env example file
- set webhook url on flutterwave dashboard to your-url/api/v1/webhook/payment 

1. Seller is created with email, name. Delivery fee is added upon creation
2. User is assigned a dispatch rider immediately upon creation even if they havent been verified
3. Test merchandise is also created
4. To make payment for a email, merchandise, the payload should have the merchandiseId, the sellerId and the
   currency code (NGN, GHS, GBP and KES) in which the user will be  charged
5. Once the transaction is complete