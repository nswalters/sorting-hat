const buildStudentCard = (studentName, houseName, studentID) => {

  let card = `
  <div class="col-auto mb-3 px-0" >
    <div class="card text-center" >
      <h3 class="mt-3">${studentName}</h3>
      <h6>${houseName}</h6>
      <small>StudentID: ${studentID}</small>
      <button class="btn btn-danger w-50 mx-auto my-3 expelButton" id="${studentID}">Expel</button>
    </div>
  </div>
  `
  return card;
}

const buildStudentCards = (studentsArray) => {

  domString = '';

  studentsArray.forEach(student => {
    domString += buildStudentCard(student.name, student.house, student.id);
  })

  printToDom('cards-row', domString);
};