import pythonImg from "../../assets/images/python.png";
import cImg from "../../assets/images/c.png";
import javaImg from "../../assets/images/java.png";

export const tableData = [
  {
    id: "student_name",
    numeric: false,
    disablePadding: true,
    label: "Student Name",
    align: "center",
  },
  {
    id: "department",
    numeric: false,
    disablePadding: false,
    label: "Department",
    align: "center",
  },
  {
    id: "year",
    numeric: false,
    disablePadding: false,
    label: "Year",
    align: "center",
  },
  {
    id: "points",
    numeric: true,
    disablePadding: false,
    label: "Points",
    align: "center",
  },
];

function createData(firstData, secondData, thirdData, fourthData) {
  return { firstData, secondData, thirdData, fourthData };
}

export const apiData = [
  createData("Krishna", "CSE", "2nd year", 10),
  createData("Arbaz", "IT", "2nd year", 10),
  createData("Divya", "CSE", "2nd year", 10),
  createData("Rachel", "CSE", "2nd year", 10),
  createData("Swathi", "CSE", "2nd year", 10),
  createData("Karthi", "CSE", "2nd year", 10),
  createData("Sethupathi", "CSE", "2nd year", 10),
  createData("Navas", "IT", "2nd year", 10),
  createData("Sabiraj", "IT", "2nd year", 10),
];

export const progressCardData = [
  {
    img: pythonImg,
    title: "Python",
    progressCal: "45/100",
    progressVal: 45,
  },
  {
    img: cImg,
    title: "C Programming",
    progressCal: "70/100",
    progressVal: 70,
  },
  {
    img: javaImg,
    title: "Java",
    progressCal: "97/100",
    progressVal: 97,
  },
];
