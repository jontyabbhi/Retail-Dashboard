import axios from 'axios';

const url = "https://halfordsnonprod.service-now.com/api/now/table/incident";
//const url = "https://halfordsnonprod.service-now.com/api/now/table/incident/399b5d0adbfedc107d145487dc961959";
const fetcher = async (url) => {
 const response = await axios.get(url);
// console.log(data,error);
 return response.data;
};


export default fetcher;
