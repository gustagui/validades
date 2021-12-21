const {Data} = require('../models');

const DataController = {

  index: async (req, res) => {
    let datas = await Data.findAll()
      
      return res.render('validades', {datas})
    },
  findById: async (req, res) => {
    let {id} = req.params;

    let data = await Data.findOne({
      where:{
        id
      }
    })

    return res.render('viewData', {data})
  },

  create: (req, res) => {
    return res.render('adicionarData')
  },
  store: async (req, res) => {
    const { produto, marca, setor, quantidade, validade, valor, created_at, updated_at} = req.body;

    const resultado = await Data.create({
      produto,
      marca, 
      setor, 
      quantidade, 
      validade, 
      valor,
      created_at,
      updated_at
    })

    console.log(resultado)

    return res.redirect('/validades')
  },

  edit: async (req, res) => {
    const { id } = req.params;
    
    const data = await Data.findByPk(id);

    return res.render('editarData', {data})
  },
  update: async (req, res) => {
    const { id } = req.params;
    const {produto, marca, setor, quantidade, validade, valor} = req.body;

    const resultado = await Data.update({
      produto, 
      marca, 
      setor, 
      quantidade, 
      validade, 
      valor
    },{
      where:{
        id
      }
    })

    console.log(resultado)
    return res.redirect('/validades')
  },

  destroy: async (req, res) => {
    const { id } = req.params;

    const resultado = await Data.destroy({
      where:{
        id
      }
    })
    
    console.log(resultado);
    res.redirect('/validades');
  },
}

module.exports = DataController;