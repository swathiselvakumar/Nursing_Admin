import React, { useContext, useState } from 'react'
import { YEARMCQStyle } from '../../YearMCQ/style'
import { Button, Typography } from '@mui/material'
import CustomBreadCrumbs from '../../../components/Common/CustomBreadcrumbs'
import { PATH } from '../../../constants/routeConstants'
import AlertIcon from '../../../assets/icons/alert.png'
import Tick from '../../../assets/icons/tick1.png'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { navContext } from '../../../context/navContext';

export default function PremiumPlanDetails() {
    const BreadcrumbItems = [
        { label: "Dashboard", path: PATH.DASHBOARD },
        
        { label: "Premium Plans", path: PATH.PREMIUMPLANS },
        { label: "Add Premium Plan", path: PATH.ADDPREMIUMPLAN },

      ];
//  const [durationname, setDurationname] = useState();
 const [pricename, setPricename] = useState(1999);
 const [category, setCategory] = useState(['']);
  const { plan, setPlan } = useContext(navContext);
  const { price, setPrice } = useContext(navContext);
   const { durationname, setDurationname } = useContext(navContext);
   const {Endpoint}=useContext(navContext);
   const [additionalCategories, setAdditionalCategories] = useState([""]);

   const handleChangeduration = (event) => {
    setDurationname(event.target.value);
};

const handleChangeprice = (event) => {
    setPricename(event.target.value);
};

const handleChangecategory = (event) => {
    setCategory(event.target.value);
};

const handleAddCategory = () => {
    let newcat = "";
    setCategory([...category,newcat]);
   
};

const handleCategoryInputChange = (index, event) => {
  console.log(category.map((val,i)=> i == index ? event.target.value : val));
    setCategory(category.map((val,i)=> i == index ?  event.target.value : val))
};

const handleNextClick = async() => {
  const allCategories = [category, ...additionalCategories]; // Combine the initial category and additional categories
  const concatenatedCategories = allCategories.join(', '); // Concatenate all categories into a single string

  const planDetails = { plan, category: concatenatedCategories, price, durationname };
  console.log("Plan Details:", planDetails);

  try {
      const response = await axios.post(
          `${Endpoint}admin/post/A_InsertPlans.php`,
          {
              title: plan,
              amount: price,
              duration: 2,
              description: concatenatedCategories, // Send concatenated categories to the API
          }
      );
      console.log("New item added:", response.data);
  } catch (error) {
      console.error("Error adding new item:", error);
  }
};


      const MainBox={
        backgroundColor:"#f6f6f6",
        width:"50vw",
        height:"90vh",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        margin:"30px"
      }
      const bodystyle={
        display:"flex",
        justifyContent:"center"
      }
      const second={
        backgroundColor:"#707070",
        height:"50px",
        width:"50px",
        borderRadius:"50%",
        marginLeft:"10px"
    }
   const div1={
      display:"flex",
      justifyContent:"center",
      marginTop:"30px",
      
  }
  const step={
      paddingTop:"3px",
      width:"210px",
      display:"flex",
      justifyContent:"space-between"
  }
  const MainText={
    display:"flex",
   justifyContent:"center",
   alignItems:"center",
   flexDirection:"column",
   paddingTop:"50px",
  }
  const TextB={
    backgroundColor:"#DEE2DF",
    border:"none",
    borderRadius:"5px",
    outline:"none",
    paddingLeft:"10px",
    height:"30px",
    width:"230px",
    fontSize:"12px"
  }
  const btn1={
    border:"none",
    backgroundColor:"#183A1D",
    color:"white",
    height:"35px",
    width:"230px",
    borderRadius:"5px"
  }
  const btn2={
    border:"none",
    backgroundColor:"white",
    color:"black",
    height:"35px",
    width:"230px",
    borderRadius:"5px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
  }
  return (
    <div>
      <YEARMCQStyle>
        <div style={{ padding: "20px" }}>
          <CustomBreadCrumbs items={BreadcrumbItems} />
        </div>
        <div style={bodystyle}>
          <div style={MainBox}>
            <Typography
              style={{
                fontWeight: 700,
                paddingTop: "10px",
                textAlign: "center",
              }}
            >
              Add Premium Plans
            </Typography>
            <hr style={{ border: "1px solid black" }} />
            <div style={div1}>
              <div className="circle">
                <div className="inner-circle">
                  <img src={Tick} style={{ margin: "6px" }} />
                </div>
              </div>
              <div className="line"></div>
              <div className="circle">
                <div className="inner-circle"></div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={step}>
                <Typography style={{ fontSize: "12px" }}>Step 1</Typography>
                <Typography style={{ fontSize: "12px" }}>Step 2</Typography>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={step}>
                <Typography style={{ fontSize: "12px" }}>
                  In Progress
                </Typography>
                <Typography style={{ fontSize: "12px" }}>Pending</Typography>
              </div>
            </div>

            <div style={MainText}>
             
              <div
                style={{
                  marginTop: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "380px",
                }}
              >
                <div>
                  <label>Add Category </label>
                </div>
               
                {/* <div>
                  <input
                    type="text"
                    placeholder="Add Category"
                    style={TextB}
                    value={category}
                    onChange={handleChangecategory}
                  />
                </div> */}
                <br/>
                <Typography onClick={handleAddCategory} style={{cursor:"pointer"}}>+Add</Typography>
              </div>
              {category.map((cat, index) => (
                            <div key={index} style={{ marginTop: "15px", display: "flex", justifyContent: "space-between", width: "380px" }}>
                               
                                <div style={{marginLeft:"103px"}}>
                                    <input
                                        type="text"
                                        placeholder="Add Category"
                                        style={TextB}
                                        value={cat}
                                        onChange={(e) => handleCategoryInputChange(index, e)}
                                    />
                                </div>
                            </div>
                        ))}
            </div>
            <div>
              <div
                style={{
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "end",
                  width: "530px",
                }}
              >
                <NavLink to="/premiumplans">
                  <button style={btn1} onClick={handleNextClick}>
                    SUBMIT
                  </button>
                </NavLink>
              </div>
            </div>
            <div>
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "end",
                  width: "530px",
                }}
              >
                <NavLink to="/premiumplans">
                  <button style={btn2}>CANCEL</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </YEARMCQStyle>
    </div>
  );
}
