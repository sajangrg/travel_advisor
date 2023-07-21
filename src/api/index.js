import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

// const options = {
//   params: {
//     bl_latitude: '27.7172',
//     tr_latitude: '17.7172',
//     bl_longitude: '85.3240',
//     tr_longitude: '90.149359',
//   },
//   headers: {
//     'X-RapidAPI-Key': 'ba70935a19msh78e25129db30cc8p1493e8jsn8aaeba447ab0',
//     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//   }
// };


export const getPlacesData = async (sw, ne) => {
  try {
    const { data : { data }} = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': 'ba70935a19msh78e25129db30cc8p1493e8jsn8aaeba447ab0',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}