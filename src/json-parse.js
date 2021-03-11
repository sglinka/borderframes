import fs from "fs";
const file = fs.readFileSync('./data.json', 'utf8')
const test = JSON.parse(file)

let nationality = [];
for (let i = 0; i < test.length; i++) {
    nationality.push(test[i].nationality)
}

const labelNation = Array.from(new Set(nationality));

const numOfNationals = [];

for (let i = 0; i < labelNation.length; i++) {
    numOfNationals.push(nationality.filter(nat => nat === labelNation[i]).length)
}

// console.log(nationality)
//console.log(labelNation);
//console.log(numOfNationals);

export default {labelNation, numOfNationals};