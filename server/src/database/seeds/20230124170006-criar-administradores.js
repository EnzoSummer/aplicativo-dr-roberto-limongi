const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('tb_administrador', [{
    nm_administrador: 'John Doe',
    cd_email: 'john@gmail.com',
    cd_password_hash: await bcryptjs.hash('123456', 8),
    dt_criacao: new Date(),
    dt_atualizacao: new Date(),

  }, {
    nm_administrador: 'Gustavo',
    cd_email: 'contato@summercomunicacao.com.br',
    cd_password_hash: await bcryptjs.hash('123456', 8),
    dt_criacao: new Date(),
    dt_atualizacao: new Date(),

  }], {}),

  down: () => {},
};
