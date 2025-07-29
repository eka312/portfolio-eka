'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('proyeks', 'status', {
      type: Sequelize.ENUM('aktif', 'selesai'),
      defaultValue: 'aktif',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('proyeks', 'status');
  }
};
