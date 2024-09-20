import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { navContext } from '../../context/navContext';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './ImagesTable.css';

export default function ImageTable({ data }) {
  const { Endpoint } = useContext(navContext);
  const email = localStorage.getItem('userMail');
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    imageUrl();
  }, []);

  const imageUrl = async () => {
    try {
      const res = await axios.post(`${Endpoint}admin/get/A_ViewImages.php`, {
        adminId: email,
      });
      setDatas(res.data);
    } catch (error) {
      console.error('Error fetching course data:', error);
    }
  };

  const DeleteimageUrl = async (id) => {
    try {
      // Send `adminId` and `Id` as query parameters
      const res = await axios.delete(`${Endpoint}admin/delete/A_deleteImageUrl.php`, {
        data: {
          adminId:email,
          Id: id,
        }, 
      });
      console.log('Image deleted successfully:', res.data);
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };
  

  const handleDelete = async (id) => {
    await DeleteimageUrl(id);
    // Optionally, refresh the list or handle UI updates
    imageUrl(); // Refresh the image list
  };
  

  return (
    <div className="table-con">
      <table className="tt">
        <thead>
          <tr>
            <th className="th">Sno</th>
            <th className="th">Image URL</th>
            <th className="th">Actions</th>
          </tr>
        </thead>
        <tbody>
  {datas.length > 0 ? (
    datas.map((row, index) => (
      <tr key={index} className="table-row">
        <td className="th">{index + 1}</td>
        <td className="th">
          <img src={row.image} alt="row-image" width="50" />
        </td>
        <td className="th">
          <IconButton
            onClick={() => handleDelete(row.sno)}
            className="delete-icon"
          >
            <DeleteIcon />
          </IconButton>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="3" style={{ textAlign: 'center' }}>
        No data available
      </td>
    </tr>
  )}
</tbody>

      </table>
    </div>
  );
}
