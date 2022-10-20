'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('products', [
      {
      productName: 'MacBook',
      productDesc: 'MacBook 32GB Ram 512GB Storage M2',
      imgUrl: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=600',
      productPrice: 80000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productName: 'Tupperware Bottle',
      productDesc: 'New Tupperware Bottle 500 ml',
      imgUrl: 'https://images.pexels.com/photos/1342529/pexels-photo-1342529.jpeg?auto=compress&cs=tinysrgb&w=620&h=375&dpr=2',
      productPrice: 1200,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productName: 'Nikon DSLR Camera',
      productDesc: 'Canon M50 Mark II 15-45mm f3.5-6.3 is STM Digital Zoom Camera (Black)',
      imgUrl: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=630&h=375&dpr=2',
      productPrice: 20000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productName: 'Apple Watch SE',
      productDesc: 'Apple Watch SE (GPS, 44mm) - Space Grey Aluminium Case with Midnight Sport Band - Regular',
      imgUrl: 'https://m.media-amazon.com/images/I/71nZ497gYtL._SL1500_.jpg',
      productPrice: 26990,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productName: 'Sony WH-1000XM5',
      productDesc: 'A Wireless Industry Leading Active Noise Cancelling Headphones, 8 Mics for Crystal Clear Calling, 30Hr Battery',
      imgUrl: 'https://m.media-amazon.com/images/I/61+btxzpfDL._SL1500_.jpg',
      productPrice: 24990,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productName: 'Maggi',
      productDesc: 'Maggi 2-Minute Special Masala Instant Noodles, 70g (Pack of 12)',
      imgUrl: 'https://m.media-amazon.com/images/I/81u8hT2oROL._SL1500_.jpg',
      productPrice: 179,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productName: 'Converse Shoes',
      productDesc: 'Converse Unisex Sneakers Chuck 70s',
      imgUrl: 'https://m.media-amazon.com/images/I/81lgkBa1GvL._UL1500_.jpg',
      productPrice: 1699,
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
