'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('products', [
      {
      productName: 'MacBook',
      productDesc: 'MacBook 32GB Ram 512GB Storage M2',
      imgUrl: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=600',
      productPrice: 800,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productName: 'Tupperware Bottle',
      productDesc: 'New Tupperware Bottle 500 ml',
      imgUrl: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=600',
      productPrice: 1200,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productName: 'Nikon DSLR Camera',
      productDesc: 'Canon M50 Mark II 15-45mm f3.5-6.3 is STM Digital Zoom Camera (Black)',
      imgUrl: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=630&h=375&dpr=2',
      productPrice: 2000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
