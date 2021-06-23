'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tags', {
    id:{
      type: Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
    },
    tagName:{
      type: Sequelize.STRING(100),
      allowNull:false
    },
    created_at:{
      type: Sequelize.DATE,
      allowNull:false
    },
    updated_at:{
      type: Sequelize.DATE,
      allowNull:false
    }
  })
  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('tags');
    
  }
  }
};
