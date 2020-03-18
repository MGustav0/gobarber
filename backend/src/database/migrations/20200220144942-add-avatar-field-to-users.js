module.exports = {
  up: (queryInterface, Sequelize) => {
    /** Adiciona na tabela "users" a coluna "avatar_id" com as características
     * abaixo.
     */
    return queryInterface.addColumn('users', 'avatar_id', {
      type: Sequelize.INTEGER,
      /** Irá referenciar a tabela "files" na chave "id", todo "avatar_id" será
       * um "id" na tabela "files".
       */
      references: { model: 'files', keys: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
