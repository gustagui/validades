module.exports = (sequelize, DataTypes) => {
    const Promoter = sequelize.define('Promoter', {
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING(256),
        entrada: DataTypes.STRING(256),
        saida: DataTypes.STRING(256),
        observacao: DataTypes.STRING(256),
        created_at: {
            type: DataTypes.DATE,          
          },
        updated_at: {
            type: DataTypes.DATE
        },
    },{
        tableName: 'user',
        timestamps: false,
    })
   
    return Promoter;
}