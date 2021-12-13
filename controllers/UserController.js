const { Usuario } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const UserController = {
    // index: async (req, res) => {
    //     let users = await Usuario.findAll();

    //     return res.render('usuarios', {users})
    // },

    index: async (req, res) => {
        let {page = 1} = req.query
        let {count:total, rows:users} = await Usuario.findAndCountAll({
          limit: 5,
          offset: (page - 1) * 5
        });
        let totalPagina = Math.round(total/5)    
        return res.render('usuarios', {users, totalPagina})
      },
      findById: async (req, res) => {
        let { id } = req.params;

        let user = await Usuario.findOne({
          where:{
            id
          }
        })

        return res.render('viewUsuario', {user})
      },
      search: async (req, res) => {
        let {key} = req.query;

        let users = await Usuario.findAll({
          where:{
            name:{
              [Op.like]: `%${key}%`
            }
          },
          order:[
            ['id', 'ASC']
          ]
        });
    
        return res.render('usuarios', {users})
      },
};

module.exports = UserController;