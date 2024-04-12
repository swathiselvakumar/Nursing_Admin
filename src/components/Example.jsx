import React, { useEffect } from 'react'
import  axios  from 'axios'
import { Construction } from '@mui/icons-material'
import { getlocalstorage } from '../Service/localstorage'
import { yearMcqApi } from '../Service';


export default function Example() {
const overAllFilterData = async () => {
  let adminID = getlocalstorage("userMail");
  let paylaod = {
    adminId: adminID,
    id:id
  };
  await yearMcqApi(paylaod)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
        
      });
};
  return (
    <div>
        
        <button onClick={overAllFilterData}>hi</button></div>
        
  )
}
