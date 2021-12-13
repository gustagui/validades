module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING(200),
        email: DataTypes.STRING(200),
        password: DataTypes.STRING(256),
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
   
    return Usuario;
}