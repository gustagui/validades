const { Promoter } = require('../models');

const PromoterController = {

    index: async (req, res) => {
      let promoters = await Promoter.findAll()
        
        return res.render('promotores', {promoters})
      },
    findById: async (req, res) => {
      let {id} = req.params;

      let promoter = await Promoter.findOne({
        where:{
          id
        }
      })

      return res.render('viewPromoter', {promoter})
    },

    create: (req, res) => {
      return res.render('adicionarPromotor')
    },
    store: async (req, res) => {
      const { name, empresa, entrada, saida, observacao } = req.body;

      const resultado = await Promoter.create({
        name, 
        empresa, 
        entrada, 
        saida, 
        observacao
      })

      console.log(resultado)

      return res.redirect('/promotores')
    },

};

module.exports = PromoterController;
