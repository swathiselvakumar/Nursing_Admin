import axios from "axios";
import {getlocalstorage} from "./localstorage";
const URL = "https://nursingupdate.in/Nursing/controllers/api/admin/";
// nursingupdate.in/Nursing/controllers/api/admin/

// yearmcq
export const yearMcqApi = (data) => {
  return axios.post(`${URL}get/A_ViewCourseContent.php`, data);
};