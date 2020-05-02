const buildStudentCard = (studentName, houseName) => {

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