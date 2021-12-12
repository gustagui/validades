module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        id:{
            type:DataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    },{
        tableName: 'usuario',
        timestamps: false
    })
   
    return Usuario;
}