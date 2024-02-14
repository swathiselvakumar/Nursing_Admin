export const ViewstudentData = [
  {
    id: "student_id",
    numeric: false,
    disablePadding: false,
    label: "Student ID",
    align: "center",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name",
    align: "center",
  },
  {
    id: "correct_answer",
    numeric: true,
    disablePadding: false,
    label: "Correct Answer",
    align: "center",
  },
  {
    id: "wrong_answer",
    numeric: true,
    disablePadding: false,
    label: "Wrong Answer",
    align: "center",
  },
  {
    id: "total_marks",
    numeric: false,
    disablePadding: false,
    label: "Total Marks",
    align: "center",
  },
];

function studentData(firstData, secondData, thirdData, fourthData, fifthData) {
  return { firstData, secondData, thirdData, fourthData, fifthData };
}

export const ViewStudentApiData = [
  studentData("santhos@123", "Santhosh", 30, 20, `30/50`),
  studentData("santhos@123", "Santhosh", 30, 20, `30/50`),
  studentData("santhos@123", "Santhosh", 30, 20, `30/50`),
  studentData("santhos@123", "Santhosh", 30, 20, `30/50`),
  studentData("santhos@123", "Santhosh", 30, 20, `30/50`),
  studentData("santhos@123", "Santhosh", 30, 20, `30/50`),
  studentData("santhos@123", "Santhosh", 30, 20, `30/50`),
  studentData("santhos@123", "Santhosh", 30, 20, `30/50`),
  studentData("santhos@123", "Santhosh", 30, 20, `30/50`),
];

//

export const ViewQuestionData = [
  {
    id: "questions",
    numeric: false,
    disablePadding: false,
    label: "Questions",
    align: "center",
  },
  {
    id: "no_of_correct_answer",
    numeric: false,
    disablePadding: false,
    label: "No. of correct answer",
    align: "center",
  },
  {
    id: "no_of_wrong_answer",
    numeric: false,
    disablePadding: false,
    label: "No. of wrong answer",
    align: "center",
  },
  {
    id: "total_attendece",
    numeric: true,
    disablePadding: false,
    label: "Total Attendence",
    align: "center",
  },
  {
    id: "not_attended",
    numeric: true,
    disablePadding: false,
    label: "Not Attended",
    align: "center",
  },
];

function questionData(firstData, secondData, thirdData, fourthData, fifthData) {
  return { firstData, secondData, thirdData, fourthData, fifthData };
}

export const ViewQuestionApiData = [
  questionData(
    "What is the correct syntax of docType in HTML5?",
    30,
    20,
    55,
    32
  ),
  questionData(
    "What is the correct syntax of docType in HTML5?",
    30,
    20,
    55,
    32
  ),
  questionData(
    "What is the correct syntax of docType in HTML5?",
    30,
    20,
    55,
    32
  ),
  questionData(
    "What is the correct syntax of docType in HTML5?",
    30,
    20,
    55,
    32
  ),
  questionData(
    "What is the correct syntax of docType in HTML5?",
    30,
    20,
    55,
    32
  ),
  questionData(
    "What is the correct syntax of docType in HTML5?",
    30,
    20,
    55,
    32
  ),
];
