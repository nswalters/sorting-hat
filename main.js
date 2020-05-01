const sortStudent = (student) => {

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