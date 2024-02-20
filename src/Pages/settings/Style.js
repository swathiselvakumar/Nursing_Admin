import styled from "styled-components";

export const SettingStyle=styled("div")(()=>({
".wrap":{
    display: "flex", justifyContent: "center"
},

".inside-wrapper":{

    marginTop: "30px",
            borderRadius: "10px",
            display: "flex",
            backgroundColor: "#e1eedd",
            justifyContent: "center",
    //   flexWrap:'wrap',
           
            // width: "1000px",
},


".profile-card":{
    padding: "80px 200px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    
    // width: "800px",
    

},
".submit-btn":{
    backgroundColor: "#183a1d",
    padding: "10px 100px 10px 100px",
    border: "none",
    marginTop: "50px",
    color: "white",
}
}))