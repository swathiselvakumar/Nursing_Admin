import axios from "axios";
import {getlocalstorage} from "./localstorage";
const URL = "https://vebbox.in/Nursing/controllers/api/admin/";
// vebbox.in/Nursing/controllers/api/admin/

// yearmcq
export const yearMcqApi = (data) => {
  return axios.post(`${URL}get/A_ViewCourseContent.php`, data);
};