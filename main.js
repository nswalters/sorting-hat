const showFirstYearForm = () => {
  document.getElementById('firstYearFormContainer').classList.remove('d-none');
}

const createEventListeners = () => {
  document.getElementById('startSortingButton').addEventListener('click', showFirstYearForm);
}

const init = () => {
  createEventListeners();
}

init();