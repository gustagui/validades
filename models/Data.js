module.exports = (sequelize, DataTypes) => {
    const Data = sequelize.define('Data', {
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        produto: DataTypes.STRING(256),
        marca: DataTypes.STRING(256),
        setor: DataTypes.STRING(256),
        validade: DataTypes.STRING(256),
        quantidade: DataTypes.STRING(256),
        valor: DataTypes.STRING(256),
        created_at: {
            type: DataTypes.DATE,          
          },
        updated_at: {
            type: DataTypes.DATE
        },
    },{
        tableName: 'datas',
        timestamps: false,
    })
   
    return Data;
}