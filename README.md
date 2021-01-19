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
6. Once transaction is confirmed on the webhook, the breakdown takes place

### Project Overview
This is an API implementation of the Flutterwave Dev Challenge.

### The Challenge:
A group of business owners want to create an e-commerce market place (Codename: Jumga). Something like Jumia or Konga. They hope to set up their services in Nigeria, Ghana, Kenya and the UK for starters. You have been tapped as one of the possible dev candidates to handle setting up the payments side of things for the marketplace.

### The MVP requirements for payments are as follows:
1. Each seller setting up on the platform pays a small token for approval.
2. For every sale, the total sale amount is broken down to be shared as follows:

As an example, if a t-shirt from a seller (Digital Wears Ltd) costs $2,000 and the delivery fee is $150.
A sale of the t-shirt will result in the below breakdown:
(a) Jumga gets a commission of $50
(b) Digital Wears Ltd gets $1950
(c) The dispatch rider gets $120 while
(d) Jumga gets another $30 delivery commission
Jumga has decided to use Flutterwave because of their awesome reputation and the fact that they have support for accepting payments in the countries Jumga wants to start with.

### Technology Stack Used
- NodeJs
- Express
- Babel
- Postgres SQL
- sequelize


### Requirements and Installation
Before running the project, install the following
- Node JS
- Git

Create a FlutterWave account
- Get the test secret key and add it to a .env file in the root folder as FLUTTERWAVE_SECRET_KEY
- Add a postgres database url in the .env file as DEVELOPMENT_DATABASE_URL
- Add the flutterwave web hook hash in the .env file as MY_HASH

#### To run
$ git clone https://github.com/EziamakaNV/Jumga.git
$ cd Jumga
$ npm install
$ npm run dev
$ sequelize db:migrate
$ sequelize db:seed:all


## API Endpoints

POST 'localhost:3000/api/v1/seller' - Creates a Seller Account.
example Request Body {
    "email": "five@test.com",
    "name": "sellerFive",
    "deliveryFee": 150
}
The Delivery fee is added upon creation. Dispatch Riders have been seeded and are automatically assigned to sellers. Merchandises for sale are also created for the sellers.
All details are sent back in the response. Please take note of them, as they some of them are required going forward


POST 'localhost:3000/api/v1/seller/activate' - This endpoint activates the seller.
example Request Body: {
    "sellerId": 1,
    "email": "test@gmail.com"
}

The sellerId is that which was passed back when the seller was created.
The endpoint responds with a link which will direct the user to a test payment page.
Once the payment is completed and successful, the store then becomes active


POST 'localhost:3000/api/v1/merchandise/pay' - An endpoint that allows payment for a product/merchandaise from any of these countries : Nigeria, Ghana, United Kingdom Or Kenya

example Request Body: {
    "customerEmail": "test@gmail.com",
    "merchandiseId": 4,
    "currency": "KES"
}

The currency parameters can have any of this values - 
NGN: Nigeria, GHS: Ghana, GBP: United Kingdom and KES: Kenya


## Author

Nnaemeka Valentine Eziamaka