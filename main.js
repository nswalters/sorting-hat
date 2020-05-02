// NOTES: global array is required, however using GETTERS and SETTERS we can update the array properly

students = [];

const printToDom = (selector, domString) => {

  document.getElementById(selector).innerHTML = domString;

}

const buildStudentCard = (studentName, houseName) => {

  // TODO: Sanitize studentName as it is user input!
  // --sanitize--

  // (houseName is generated only in this script, so no need to sanitize that)

  let card = `
  <div class="col-auto mb-3 px-0">
    <div class="card text-center">
      <h3 class="mt-3">${studentName}</h3>
      <h6>${houseName}</h6>
      <button class="btn btn-danger w-50 mx-auto my-3">Expel</button>
    </div>
  </div>
  `
  return card;
}

const buildStudentCards = (studentsArray) => {

  domString = '';

  students.forEach(student => {
    domString += buildStudentCard(student.name, student.house);
  })

  printToDom('cards-row', domString);
};

const sortStudent = (studentName) => {

  student = {
    name: studentName,
    isExpelled: false,
    house: null,
  }

  students.push(student);

  // TODO: generate a random house to assign to the student
  // student.house = <random house name>

  // re-build student cards
  buildStudentCards(students);
}

const validateStudent = () => {
  // Reset any error messages that might be showing
  document.getElementById('studentHelp').textContent = ""

  // Get the current student name in the text field
  studentName = document.getElementById('studentName').value;

  // Check if the student name was blank, if so, create error message
  if (studentName.trim() == '') {
    document.getElementById('studentHelp').textContent = "You must enter a name."
    return
  }

  // If checks pass, we sort the student
  sortStudent(studentName);
}

const showFirstYearForm = () => {
  document.getElementById('firstYearFormContainer').classList.remove('d-none');
}

const createEventListeners = () => {
  document.getElementById('startSortingButton').addEventListener('click', showFirstYearForm);
  document.getElementById('sortStudentButton').addEventListener('click', validateStudent);
}

const init = () => {
  createEventListeners();
}

init();