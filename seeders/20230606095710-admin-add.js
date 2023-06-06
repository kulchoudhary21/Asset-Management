"use strict";
let bcrypt = require("bcrypt");
let pw = require("../configuration/passwd");
let hash = bcrypt.hashSync(pw, 3);
/** @type {import('sequelize-cli').Migration} */
console.log(pw)
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
// module.exports=pw
