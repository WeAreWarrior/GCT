const axios = require('axios');

axios.get('https://api.spotify.com/v1/search?q=Yellow + Colplay&type=track', {
    headers: {
    'Authorization': 'Bearer BQAp6BWWRyW86ZgR3MGj0tXCsyKXc7Z-LVArc5z1wjz5Tmk4idIQkY43iltGNcTKp3B72FOX1k2GAbVoXwlm1ME8AMtbyLiTjj7HnrMbY8uAk9unmJYLYXCs6ofDH5SA3OrFGD9rJXN7T8yLj04T7dNLl8Sy8AYfR-RaYHfiXa4G5ifmU-NYdxRcKjSZRssTIw' 
}
}).then((data)=>{
    console.log(data.data.tracks.items[0].id);
})