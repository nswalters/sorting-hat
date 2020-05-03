const buildStudentCard = (studentName, houseName, studentID) => {

  let card = `
  <div class="col-auto mb-3 px-0">
    <div class="card text-center house-${houseName}">
      <h3 class="mt-3 card-title">${studentName}</h3>
      <h6>${houseName}</h6>
      <button class="btn btn-danger w-50 mx-auto my-3 expelButton" id="${studentID}">Expel</button>
    </div>
  </div>
  `
  return card;
}

const buildExpelledStudentCard = (studentName, houseName, studentID) => {
  // TODO: abstract this and buildStudentCard function

  let card = `
  <div class="col-auto mb-3 px-0">
    <div class="card text-center house-${houseName} expelled">
      <h3 class="mt-3 card-title">${studentName}</h3>
      <h6>VOLDERMORT'S ARMY</h6>
      <button class="btn btn-dark w-50 mx-auto my-3 disabled">EXPELLED</button>
    </div>
  </div>
  `
  return card;
}

const buildExpelledStudentCards = (expelledStudentsArray) => {
  // TODO: Abstract functionality between this function and buildStudentCards

  let domString = '';

  expelledStudentsArray.forEach(student => {
    domString += buildExpelledStudentCard(student.name, student.house, student.id);
  });

  printToDom('expelled-cards-row', domString);
}
const buildStudentCards = (studentsArray) => {

  let domString = '';

  studentsArray.forEach(student => {
    domString += buildStudentCard(student.name, student.house, student.id);
  })

  printToDom('cards-row', domString);
};