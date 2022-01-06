const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
try {
    sequelize.authenticate()
    console.log('conexão foi um sucesso')
    setTimeout(()=> {
        console.clear()
    }, 2000)
} catch (e) {
    console.log(e)
}
module.exports = sequelize
