import React from 'react';
import './ImagesTable.css'
import axios from 'axios';
import { useContext } from "react";
import { navContext } from "../../context/navContext";
import { useEffect,useState } from 'react';
export default function ImageTable({ data }) {
    const {Endpoint}=useContext(navContext);
    const email=localStorage.getItem("userMail");
    const [datas,setDatas]=useState([]);
    useEffect(() => {
       imageUrl();
      }, []);
    const imageUrl = async () => {
        try {
          const res = await axios.post(
            `${Endpoint}admin/get/A_ViewImages.php`,
            {
                adminId:email,
            }
          );
          setDatas(res.data);
        } catch (error) {
          console.error("Error fetching course data:", error);
        }
      };
  return (
    <div className="table-con">
      <table className='tt'>
        <thead>
          <tr>
            <th className='th'>Sno</th>
            <th className='th'>Image URL</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((row, index) => (
            <tr key={index}>
              <td className='th'>{row.sno}</td>
              <td className='th'>
                {row.image}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

