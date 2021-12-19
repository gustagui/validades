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

}

module.exports = DataController;