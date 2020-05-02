const printToDom = (selector, domString) => {
  document.getElementById(selector).innerHTML = domString;
}

const showFirstYearForm = () => {
  document.getElementById('firstYearFormContainer').classList.remove('d-none');
}

const createEventListeners = () => {
  document.getElementById('startSortingButton').addEventListener('click', showFirstYearForm);
  document.getElementById('sortStudentButton').addEventListener('click', validateStudent);
  document.getElementById('studentForm').addEventListener('submit', validateStudent);
}

const init = () => {
  createEventListeners();
}

init();