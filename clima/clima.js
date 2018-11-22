


const axios = require('axios');

const getClima = async (lat, lon) => {

    


    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=6b3bc1737c8e8ffb30959ed9ff367203`)



    let temperatura = (resp.data.main)

    return {
        temperatura: temperatura.temp
    }
}





module.exports = {
    getClima
}
