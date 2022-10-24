const { type_check_v1 } = require("../part1/part1");

// class Mapi {
//   size;
//   mapi = []
//   constructor(arr) {
//     arr.forEach(a => this.mapi.push([a[0], a[1]]))
//     this.updateSize()
//   }
//   set(key, elt) {
//     key = "" + key
//     if (this.has(key)) this.delete(key)


//     this.mapi.push([key, elt])
//     this.mapi.sort((a, b) => {

//       return ("" + a[0]).localeCompare(("" + b[0]), undefined, {
//         numeric: true,
//         sensitivity: 'base'
//       })
//     })
//     this.updateSize()

//   }
//   get(key) {
//     return this.mapi.filter(m => m[0] == key)[0][1]
//   }
//   delete(key) {
//     this.mapi = this.mapi.filter(m => m[0] != key)
//     this.updateSize()

//   }
//   has(key) {
//     key = "" + key

//     return this.keys().includes(key)
//   }
//   keys() {
//     let arr = []
//     this.mapi.forEach(o => {
//       arr.push(o[0])
//     });
//     return arr
//   }
//   values() {
//     let arr = []
//     this.mapi.forEach(o => {
//       arr.push(o[1])
//     });
//     return arr
//   }
//   updateSize() {
//     this.size = this.mapi.length
//   }
// }
class Mapi {
  constructor(list){
    this.list = list ? Object.fromEntries(list) :{}
    this.size = Object.keys(this.list).length

  }
  set(key,elt){
    
    this.list[key]=elt
    this.size = Object.keys(this.list).length

  }
  delete(key){
    delete this.list[key]
    this.size = Object.keys(this.list).length
  }
  get(key){
    return this.list[key]
  }
  has(key){
    return key in this.list

  }
  keys(){
    return Object.keys(this.list)

  }
  values(){
    return Object.values(this.list)
  }
  


}

const getHashTags = (str) => Array.from(new Set(str.split(" "))).sort((a, b) => b.length - a.length).map(w => "#" + w.toLowerCase()).slice(0, 3);

const removeDuplicate = (tab) => [...new Set(tab)];




const intersection = (arr, arr2) => removeDuplicate(arr.filter(x => arr2.includes(x)));
const arrayDiff = (first, second) => [...first.filter(x => !second.includes(x)), ...second.filter(x => !first.includes(x))];

const combinations = (...args) => args.reduce((a, b) => a * b, 1);

const fiscalCode = (person) => {
  const voyelles = ["a", "e", "i", "u", "o"];
  const mois = { Janvier: 'A',Février: 'B',Mars: 'C',Avril: 'D',Mai: 'E',Juin: 'H',Juillet: 'L',Août: 'M',Septembre: 'P',Octobre: 'R',Novembre: 'S',Décembre: 'T'}
  let code = []
  code.push(person.surname.split('').sort((a, b) => {if (!voyelles.includes(a.toLowerCase()) && voyelles.includes(b.toLowerCase())) return -1}).slice(0, 3).join('').padEnd(3, "X").toUpperCase())
  let code2 = person.name.split('').filter(l => !voyelles.includes(l)).join('')
  if (code2.length > 3) code2 = code2.slice(0, 1) + code2.slice(2, code2.length)
  if (code2.length < 3) code2 += person.name.split('').filter(l => voyelles.includes(l)).join('').slice(0, 3).padEnd(3, "X")
  code.push(code2.toUpperCase())
  code.push(person.dob.split('/')[2].slice(2, 4))
  code.push(mois[Object.keys(mois)[person.dob.split('/')[1] - 1]])
  if (person.gender == "M") code.push(person.dob.split('/')[0].padStart(2, "0"))
  else code.push(parseInt(person.dob.split('/')[0]) + 40)
  return code.join('')
};


const cm = (arr, NB) => {
  for (let nb = 0; nb < arr.length; nb++)  if (NB % arr[nb] != 0) return false
  return true
}
const lcm = (arr) => {
  arr.sort((a, b) => b - a)
  let result = arr[0]
  while (!cm(arr, result)) {
    result += arr[0]
  }
  return result
};

const merge = (object, other) => {
  let keys = Array.from(new Set([...Object.keys(object), ...Object.keys(other)]))
  keys.forEach(k => {
    if (k in object && k in other) {
      if (type_check_v1(object[k], "array")) {
        if (type_check_v1(other[k], "array")) {
          other[k].forEach(e => object[k].push(e))
        }
        else {
          object[k].push(other[[k]])
        }
      } else {
        if (type_check_v1(other[k], "array")) {
          other[k].unshift(object[k])
          object[k] = []
          other[k].forEach(e => object[k].push(e))
        }
        else {
          object[k] = [object[k], other[k]]
        }
      }


    }

    if (!(k in object) && k in other) object[k] = other[k]
  })
  return object
};
const students = [{ name: "Dupont", cours: [1, 3, 5] }, { name: "Lea", cours: [2, 4, 11] }, { name: "Charles", cours: [1] }];
const courses = [{ id: 1, name: "JS" }, { id: 2, name: "PHP" }, { id: 3, name: "C#" }, { id: 4, name: "F#" }, { id: 5, name: "CSS" }];

const getStudents = () => {
  return myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(function () { myResolve(students); }, 1000);
  });

};

const getCourses = () => {
  return myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(function () { myResolve(courses); }, 2000);
  });
};
const getStudentsCourses = () => {

  return myPromise = new Promise(function (myResolve, myReject) {
    for (let j = 0; j < students.length; j++) {

      for (let i = 0; i < students[j].cours.length; i++) {
        students[j].cours[i] = courses[students[j].cours[i] - 1]

      }
    }

    setTimeout(function () {

      myResolve(students)
    }, 2000);
  });

};



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
