const { Usuario } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const UserController = {
    // index: async (req, res) => {
    //     let users = await Usuario.findAll();

    //     return res.render('usuarios', {users})
    // },

    index: async (req, res) => {
        let users = await Usuario.findAll();
    
        return res.render('usuarios', {users})
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
      search: async(req, res) => {
        let {key} = req.query

        let users = await Usuario.findAll({
          where:{
            name:{
              [Op.like]: `%${key}%`
            }
          }
        });
    
        return res.render('usuarios', {users})
      },
};

module.exports = UserController;