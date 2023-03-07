// import type { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const options = {
//     method: 'GET',
//     url: 'https://countries-cities.p.rapidapi.com/location/country/list',
//     headers: {
//       'X-RapidAPI-Key': 'fa1ae9f853msh94b4f83b88bc4a4p1ba72djsn45f8b12a8777',
//       'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
//     }
//   };

//   try {
//     const response = await axios.request(options);
//     res.status(response.status).json(response.data);
//   } catch (error) {
//     console.error(error);
//     res.status(error.response?.status || 500).end(error.message);
//   }
// }
