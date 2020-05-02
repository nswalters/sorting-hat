const createExpelEventListeners = () => {

  document.querySelectorAll('.expelButton').forEach(item => {
    item.addEventListener('click', expelStudent);
  });
};

const printToDom = (selector, domString) => {
  document.getElementById(selector).innerHTML = domString;

  createExpelEventListeners();
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