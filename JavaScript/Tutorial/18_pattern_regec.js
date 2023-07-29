let pattern = 'S'

let regExOne = new RegExp(pattern) //Creating regular expression

let flag = 'gi'
let regExTwo = new RegExp(pattern, flag) //Creating regular expression

let regExThree = /sOnU/gi //Creating regular expression

const strToCheck = "sonu is growing at mjSoNuh a rapid speed So and noSonuu NS nso recently they are working on Pwskills to create skills based sOnUUf pwcontent"

const result = regExThree.test(strToCheck)
console.log(result);

const anotherResult = strToCheck.match(regExThree)
console.log(anotherResult);

const oneMoreResult = strToCheck.replace(regExThree, 'p-w')
console.log(oneMoreResult);

const webUrl = "https://pwskills.com/hitesh%20choudhary"
const useableUrl = webUrl.replace(/%\d0/, '-')
console.log(useableUrl);

//Note: Learn regex from regexr.com