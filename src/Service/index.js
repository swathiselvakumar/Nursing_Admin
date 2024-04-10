import axios from "axios";
import { getlocalstorage } from "./localstorage";
const URL = "https://vebbox.in/Nursing/controllers/api/admin/";


// yearmcq
 
export const yearMcqApi = (data) =>{
    return axios.post(`${URL}post/A_InsertPmcqInstitution.php`, data);
}