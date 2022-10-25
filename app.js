//using weather stack api

 const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=94577eafcc6e05b0d1ee934186f0b9ab&query=46.3605,-71.0596'


// request({url: url , json: true},(error, response)=>{
//     if (error){
//         console.log('unable to connect to the weather service')
//     }else if(response.body.error)
//         {
//             console.log('unable to find location')
//         }
    
//     else{
    
//     console.log(response.body.current.weather_descriptions[0] + " it is currently "+ response.body.current.temperature + " degree celcius")
//     }
// })


// using position stack api for geocoding
// address into latitude/ longitude
// const request = require('request')

const geocodeurl = 'http://api.positionstack.com/v1/forward?access_key=c5a6055f10dc0a8c1ff2f31899fff5d0&query='+'karnataka'



request({url:geocodeurl, json:true},(error,response)=>{
    if(error)
    {
        console.log('unable to connect to the position stack')
    }
    else if(response.body.data===undefined )
    {
        console.log('unable to find your matches')
    }
    // else if(response.body.error===0){
    //     //"https_access_restricted"
    //     console.log('access restricted')
    // }
    else
    {
    const latitude =  response.body.data[0].latitude
    const longitude = response.body.data[0].longitude
    console.log(latitude)
    console.log(longitude)
    }
})






const geocode = (address,callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=c5a6055f10dc0a8c1ff2f31899fff5d0&query='+address+''

}

geocode('karnataka',(error ,data) =>{

})




