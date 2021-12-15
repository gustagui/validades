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
              [Op.like]:`%${key}%`
            }
          },
          order:[
            ['id', 'ASC']
          ]
        });
    
        return res.render('usuarios', {users})
      },
      create: (req, res) => {
        return res.render('cadastroUsuario')
      },
      store: async (req, res) => {
        const { name, email, password } = req.body;

        const resultado = await Usuario.create({
          name,
          email,
          password
        })

        console.log(resultado)

        return res.redirect('/usuarios')
      },
      edit: async (req, res) => {
        const { id } = req.params;
        
        const usuario = await Usuario.findByPk(id);

        return res.render('editarUsuario', {usuario})
      },
      update: async (req, res) => {
        const { id } = req.params;
        const {name, email, password} = req.body;

        const resultado = await Usuario.update({
          name,
          email,
          password
        },{
          where:{
            id
          }
        })

        console.log(resultado)
        return res.redirect('/usuarios')
      },
      destroy: async (req, res) => {
        const { id } = req.params;

        const resultado = await Usuario.destroy({
          where:{
            id
          }
        })
        
        console.log(resultado);
        res.redirect('/usuarios');
      },
};

module.exports = UserController;