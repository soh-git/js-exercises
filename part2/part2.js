class Mapi  {}

const getHashTags = (str) => {
  str = Array.from(new Set( str.split(" ")) ).sort((a,b)=> b.length-a.length)
  str.length=3
  
  return str.map(w=> "#"+ w.toLowerCase())
  
};
const removeDuplicate = (nbs) => {
  return Array.from(new Set( nbs) )
};
const intersection = (arr,arr2) =>{
  return removeDuplicate( arr.filter(x=> arr2.includes(x) ))
};
const arrayDiff = (arr,arr2) => {
  
  return  [... arr.filter(x=> !arr2.includes(x) ),...arr2.filter(x=> !arr.includes(x) )]
};

const combinations = () => {

return Array.from(arguments).reduce((a,b)=>a*b,0)
};

const fiscalCode = () => null;

const lcm = () => null;

const merge = () => null;
const students = [ { name: "Dupont", cours: [ 1, 3, 5 ] }, { name: "Lea", cours: [ 2, 4, 11] }, { name: "Charles", cours: [1] } ];
const courses = [{id: 1, name: "JS" }, { id: 2, name: "PHP" }, { id: 3, name: "C#" }, { id: 4, name: "F#" }, { id: 5, name: "CSS" }];

const getStudents = () => null;

const getCourses = () => null;

const getStudentsCourses = () => null;

module.exports = {
  getHashTags,
  removeDuplicate,
  intersection,
  arrayDiff,
  combinations,
  fiscalCode,
  lcm,
  merge,
  getStudents,
  getCourses,
  getStudentsCourses,
  Mapi,
}
