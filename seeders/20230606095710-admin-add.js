"use strict";
let bcrypt = require("bcrypt");
let pw = require("../configuration/passwd");
let hash = bcrypt.hashSync(pw, 3);
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "admin",
      [
        {
          name: "kuldeep",
          contact: "123456789",
          email: "kul@gmail.com",
          passwd: `${hash}`,
          isDelete: "false",
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
