"use strict";
var bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */

let pw = "123";
let hash = bcrypt.hashSync(pw, 3);
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return await queryInterface.bulkInsert(
      "admin",
      [
        {
          name: "hii",
          contact: "12345",
          email: "kul@gmail.com",
          passwd: hash,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
module.exports=pw
