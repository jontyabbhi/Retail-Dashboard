import React, { useState } from 'react';

import { useEffect } from 'react';
import Axios from 'axios';


const FetchData = () => {
    
    const [data, setData] = useState([]);

    useEffect(() => {
      //  loadData();

      getData();
    },[]);
   // "https://halwebapp-retail.azurewebsites.net/retail-dashboard/tillPollData"
   // "https://jsonplaceholder.typicode.com/users"
   //https://halfordsnonprod.service-now.com/api/now/table/incident/399b5d0adbfedc107d145487dc961959

    // const loadData = async () => {
    //   await fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response => response.json())
    //     .then(receiveData => setData(receiveData));
    // }
     

      const getData = async () => {
         const api = `https://halwebapp-retail.azurewebsites.net/retail-dashboard/tillPollData`;
         const result = await Axios.get(api,{

          'Content-Type' :"application/json"
        //  auth: {
        //         'username' : 'jira.integration',
        //         'password': 'j!raintegr@tion246#'
        //      },

        //   mode: 'no-cors'
          
         });
        //  const getResult = await result.json();
        //  setData(result.dat);
         console.log(result);
     }
    
    return (
            <div>Hi there!!

            {/* {data.map(record => (
                <div key = {record.id}>{record.name} , {record.username}</div>
            ))} */}
            <div > </div>
            </div>
    )


}

export default FetchData;