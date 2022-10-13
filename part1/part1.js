function revert(str){
  if(typeof(str)!="string") return null
  return str.split('').reverse().join('')
}

function ucFirst (word){
    if(typeof(word)!="string") return null
  word = word.split('')
  word[0]=word[0].toUpperCase()
  return word.join('')
}

function capitalize (str){
  if(typeof(str)!="string") return null
  
  return str.split(' ').map(w=> ucFirst(w)).join(' ')
}
function pascalCase (str){
  if(typeof(str)!="string") return null
  return capitalize(str).split(' ').join('')
}

function palindrome(str) {
  if(typeof(str)!="string") return null
  str=str.toLowerCase()
  return str == revert(str)

}


function findLongestWord(str) {
  if(typeof(str)!="string") return null
  return str.split(' ').sort((a,b)=> b.length -a.length)[0]
}
function leet(str) {
  if(typeof(str)!="string") return null
  
  let rule ={a:"4",o:"0",e:"3",y:"7",i:"1",u:'(_)'}
  return str.split('').map(l=>{
    t=l.toLowerCase()
    if (t in rule) return rule[t]
     return l 
  }).join("")

}

function prop_access(object, path) {
path=path.split('.')
for (let i = 0; i < path.length; i++) {
  if(!(path[i]in object)) return null
  object=object[path[i]]
  
}
return object

}

function type_check_v1(data, type) {
  if(data== null ) return ["undefined","null"].includes(type)
  
  if(typeof(data)=="object" &&  Array.isArray(data)){
return "array" == type
  }
  return typeof(data)==type

}


function type_check_v2(val, condition) {

for (const key in condition) {
  if(key=="type"){
    if(!type_check_v1(val, condition["type"]) ) return false
  }
  if(key=="enum"){
    if(!condition["enum"].includes(val))return false
  }
}
return true
}

module.exports = {
  revert,
  ucFirst,
  capitalize,
  pascalCase,
  palindrome,
  leet,
  findLongestWord,
  prop_access,
  type_check_v1,
  type_check_v2,
}