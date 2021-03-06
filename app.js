'use strict';

let ourForm =document.getElementById('form');
let arrOfHeader=['Student Name','Student Grade','Course','status'];
let parentTable=document.getElementById('table');
let arrOfGrades=[];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (100 - 0) + 0); //The maximum is exclusive and the minimum is inclusive
}

function Grades(studentName,studentGrade,Course){

  this.studentName=studentName;
  this.studentGrade=studentGrade;
  this.Course=Course;
  this.min=0;
  this.max=100;
  arrOfGrades.push(this);
}

Grades.prototype.render=function(){

  let FirstRow=document.createElement('tr');

  let studentName=document.createElement('td');
  studentName.textContent=this.studentName;

  let studentGrade=document.createElement('td');
  studentGrade.textContent=this.studentGrade;

  let Course=document.createElement('td');
  Course.textContent=this.Course;

  FirstRow.appendChild(studentName);
  FirstRow.appendChild(studentGrade);
  FirstRow.appendChild(Course);
  studentName.setAttribute('class','td');
  studentGrade.setAttribute('class','td');
  Course.setAttribute('class','td');
  parentTable.appendChild(FirstRow);

};

function renderTable(){

  for (let j=0;j<arrOfGrades.length;j++){
    let FirstRow=document.createElement('tr');

    let studentName=document.createElement('td');
    studentName.textContent=arrOfGrades[j].studentName;

    let studentGrade=document.createElement('td');
    studentGrade.textContent=arrOfGrades[j].studentGrade;

    let Course=document.createElement('td');
    Course.textContent=arrOfGrades[j].Course;

    FirstRow.appendChild(studentName);
    FirstRow.appendChild(studentGrade);
    FirstRow.appendChild(Course);

    studentName.setAttribute('class','td');
    studentGrade.setAttribute('class','td');
    Course.setAttribute('class','td');

    studentName.setAttribute('class','th');
    studentGrade.setAttribute('class','th');
    Course.setAttribute('class','th');

    parentTable.appendChild(FirstRow);
  }
}
function handleSubmission(event){
  event.preventDefault();

  let studentName= event.target.studentName.value;
  let studentGrade= getRandomInt(0,100);
  let Course=event.target.Course.value;
  let newGrades= new Grades (studentName,studentGrade,Course);
  newGrades.render();
  localStorage.setItem('Grades',JSON.stringify(arrOfGrades));

}

function renderHeader(){

  let headerRow=document.createElement('tr');
  for(let i=0 ;i<arrOfHeader.length;i++){
    let th=document.createElement('th');
    th.textContent=arrOfHeader[i];
    headerRow.appendChild(th);

  }
  parentTable.appendChild(headerRow);
}

function checkLS(){
  if(localStorage.getItem('Grades')){

    arrOfGrades=JSON.parse(localStorage.getItem('Grades'));

    renderTable();

  }
}


ourForm.addEventListener('submit', handleSubmission);

renderHeader();
checkLS();

// Stech Goal Needs to add an If Statement if the grade is greater than 50 === pass
// else fail but i don't have much time to write it
