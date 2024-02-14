export const LearningboardCardData = [
  {
    courseTitle: "CSE",
    deptTitle: "Computer Science and Engineering",
    goldMedalCount: "1,200",
    silverMedalCount: "800",
    bronzeMedalCount: "550",
    action: () => console.log("Student View Details"),
  },
  {
    courseTitle: "CSE",
    deptTitle: "Computer Science and Engineering",
    goldMedalCount: "1,300",
    silverMedalCount: "850",
    bronzeMedalCount: "1,250",
    action: () => console.log("Student View Details"),
  },
  {
    courseTitle: "CSE",
    deptTitle: "Computer Science and Engineering",
    goldMedalCount: "1,200",
    silverMedalCount: "200",
    bronzeMedalCount: "350",
    action: () => console.log("Student View Details"),
  },
  {
    courseTitle: "CSE",
    deptTitle: "Computer Science and Engineering",
    goldMedalCount: "100",
    silverMedalCount: "300",
    bronzeMedalCount: "1,550",
    action: () => console.log("Student View Details"),
  },
  {
    courseTitle: "CSE",
    deptTitle: "Computer Science and Engineering",
    goldMedalCount: "100",
    silverMedalCount: "300",
    bronzeMedalCount: "1,550",
    action: () => console.log("Student View Details"),
  },
  {
    courseTitle: "CSE",
    deptTitle: "Computer Science and Engineering",
    goldMedalCount: "100",
    silverMedalCount: "300",
    bronzeMedalCount: "1,550",
    action: () => console.log("Student View Details"),
  },
];

export const chartData = [
  {
    name: "PYTHON",
    count: 60,
    avg: 50,
  },
  {
    name: "C",
    count: 20,
    avg: 60,
  },
  {
    name: "CPP",
    count: 54,
    avg: 70,
  },
  {
    name: "JAVA",
    count: 76,
    avg: 100,
  },
];

export const tableData = [
  {
    id: "test_name",
    numeric: false,
    disablePadding: true,
    label: "Test Name",
    align: "left",
  },
  {
    id: "date",
    numeric: false,
    disablePadding: false,
    label: "Date",
    align: "center",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
    align: "center",
  },
];

function createData(firstData, secondData, thirdData) {
  return { firstData, secondData, thirdData };
}

export const apiData = [
  createData("HTML@123", "19 jun 2023", "Active today"),
  createData("HTML@123", "19 jun 2023", "Active today"),
  createData("HTML@123", "19 jun 2023", "Active today"),
  createData("HTML@123", "19 jun 2023", "Active today"),
];

export const tableTopperData = [
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
    id: "Year",
    numeric: false,
    disablePadding: false,
    label: "Year",
    align: "center",
  },
  {
    id: "score",
    numeric: false,
    disablePadding: false,
    label: "Score",
    align: "center",
  },
];

function createTopperData(firstData, secondData, thirdData, fourthData) {
  return { firstData, secondData, thirdData, fourthData };
}

export const apiTopperData = [
  createTopperData("Krishna", "CSE", "2nd year", 10),
  createTopperData("Yahya", "CSE", "2nd year", 10),
  createTopperData("Krishna", "CSE", "2nd year", 10),
  createTopperData("Krishna", "CSE", "2nd year", 10),
];
