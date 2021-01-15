'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('dispatchRider', [{
      name: 'James Does',
      phoneNumber: '09038472849',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jane Dee',
      phoneNumber: '09038472843',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Tom Jerry',
      phoneNumber: '09038272849',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Tim Shaw',
      phoneNumber: '09038412849',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  
  ]);

  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('dispatchRider', null, {});
     
  }
};
