module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn(
      'applications',
      'departed',
      Sequelize.BOOLEAN,
      { allowNull: false, defaultValue: false }
  ),
  down: (queryInterface, Sequelize) => queryInterface.changeColumn(
    'applications',
    'departed',
    Sequelize.BOOLEAN
  ),
};
