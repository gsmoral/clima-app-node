const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=41c3177134f32cc5b37569214c35813f`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}