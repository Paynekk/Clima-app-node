const axios = require('axios');

const getLugarLatLng = async (direccion) => {

    let encodeUrl = encodeURI(direccion) 


    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=`)

    if (resp.data.status === "ZERO_RESULTS") {

        throw new Error(`No hay resultados para la ciudad :  ${direccion}`);
    }

    let locations = resp.data.results[0];
    let cordenadas = locations.geometry.location;

    return {
        direccion: locations.formatted_address,
        lat: cordenadas.lat,
        lon: cordenadas.lng

    }
}


module.exports = {
    getLugarLatLng
}


