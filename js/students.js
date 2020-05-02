students = [];

const printToDom = (selector, domString) => {

  document.getElementById(selector).innerHTML = domString;

}

const assignHouse = (student) => {
  const HOUSES = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]

  let randomHouse = HOUSES[Math.floor(Math.random() * HOUSES.length)];

  student.house = randomHouse;

  return student;
}

const sortStudent = (studentName) => {

  student = {
    name: studentName,
    isExpelled: false,
    house: null,
  }

  students.push(assignHouse(student));

  // re-build student cards
  buildStudentCards(students);
}

const validateStudent = (event) => {
  // Prevent any default actions (such as submitting the form when Enter is pressed, which resets the page)
  event.preventDefault();

  // Reset any error messages that might be showing
  document.getElementById('studentHelp').textContent = ""

  // Get the current student name in the text field
  studentName = document.getElementById('studentName').value;

  // TODO: Sanitize studentName as it is user input!
  // --sanitize--

  // Check if the student name was blank, if so, create error message
  if (studentName.trim() == '') {
    document.getElementById('studentHelp').textContent = "You must enter a name."
    return
  }

  // If checks pass, we sort the student
  sortStudent(studentName);
}