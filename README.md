# Jumga

- Make sure to run migrations and to seed data

1. User is created with email, name
2. User is assigned a dispatch rider immediately upon creation even if they havent been verified
3. Test merchandise is also created
4. To make payment for a email, merchandise, the payload should have the merchandiseId, the sellerId and the
   currency code in which the user will be  charged