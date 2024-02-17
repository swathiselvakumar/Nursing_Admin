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
 
            padding: "80px",
            width: "76vw",
},
".profile-card":{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    width: "50vw",

},
".submit-btn":{
    backgroundColor: "#183a1d",
    padding: "10px 100px 10px 100px",
    border: "none",
    marginTop: "50px",
    color: "white",
}
}))