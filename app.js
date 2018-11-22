
const clima = require('./clima/clima')

const lugar = require('./lugar/lugar')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad obtener el clima',
        demand: true
    }
}).argv;



let getInfo =  async (direccion) => {

    try{
 let coors = await lugar.getLugarLatLng(direccion);
    let temp = await clima.getClima(coors.lat,coors.lon);
    return `El clima en: ${coors.direccion} es de:  ${temp.temperatura}ºC`

    } catch (e){
        return  `no se pudo determinar el cima e: ${direccion} `
    }
}

getInfo(argv.direccion)
.then(mensaje => console.log(mensaje))
.catch (e => console.log(e));
















/* let encodeUrl = encodeURI(argv.direccion) //TRANSFORMARLO EN UN URL AMIGABLE


axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyCcocsoZ5k3zg0s6kXsvZtrO7BoqhAeZx4`)
.then( resp => {


    let direccion = resp.data.results[0];
    let cordenadas = direccion.geometry.location;

    


    console.log(`La direccion es: `, direccion.formatted_address)
    console.log(`La latitud es de : `, cordenadas.lat);
    console.log(`La longitud es de : `, cordenadas.lng);

    //console.log(JSON.stringify(location, undefined, 2));

})
.catch(e => console.log('ERROR!!', e));



//formated addres 
 */
//location latitud y longitud de forma independiente 



