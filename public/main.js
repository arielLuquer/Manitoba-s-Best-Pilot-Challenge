// const fs = require('fs');
// const NodeXls = require('node-xls');
// const fs = 'fs';
// require([fs], function(result) {
//     fs = result;
// })
// const NodeXls = 'node-xls';
// require([NodeXls], function(result) {
//     NodeXls = result;
// })

//const XLSX = require("../node_modules/xlsx");
//const XLSX = require(["xlsx"]);
import * as XLSX from '../node_modules/xlsx/xlsx.mjs';
const file = XLSX.readFile("record.xlsx");
console.log(file);

//console.log(readXlsxFile("record.xlsx"));
// test.addEventListener('change', () => {
//     console.log(test.files);
//     readXlsxFile(test.files[0]).then((rows) => {
//         console.log(rows);
//     });
// });

// readXlsxFile("record.xlsx").then(response => {
//     console.log(response);
// }).catch(e => {
//     console.log(e);
// });


// const XLSX = require("xlsx");
// const records = XLSX.readFile("record.xlsx");
// const record = records.Sheets["Sheet1"];

// const newRecord = ["Jim", "Professional", 24, 53];

// const info = XLSX.utils.sheet_to_json(record);
// console.log(info);

/*
const Categorys = Object.freeze({
    Student: "Student",
    Amateur: "Amateur",
    Professional: "Professional",
    Armchair: "Armchair"
});


class Record 
{
    data = new Map();

    constructor() {
        this.readInput();
        this.highestScore = this.findHighestScore();
        this.generateSheetsRecord();
    }

    findHighestScore() {
        return this.firstScore > this.secondScore ? this.firstScore : this.secondScore;
    }

    // Construct a map from the input fields
    readInput() {
        const inputs = document.getElementsByClassName("input");
        for(const input in inputs) {
            const id = inputs[input].id ? inputs[input].id : '';
            const value = inputs[input].value ? inputs[input].value : '';
            this.data.set(id, value);
        }
    }
    
    // function which generates a record on the excel sheet (or at least one that is in the right format)
    // 14-02-2024 -> Couldn't figure out how to accomplish this without creating a new array (just using this.sheetsRecord.push(value))
    generateXlsRecord() {
        const record = [];
        function addToArray(value, key, map) {
            record.push(value);
        }
        this.data.forEach(addToArray);
    }
}

function generateCategories() {
    const dropDown = document.getElementById("category");
    for(const category in Categorys) {
        const categoryOption = document.createElement("option");
        categoryOption.innerText = Categorys[category];
        dropDown.appendChild(categoryOption);
    }
}

function generateTime() {
    const currentDate = new Date();
    const time = currentDate.toLocaleTimeString('it-IT');
    document.getElementById("time").value = time;
}

function resetForm() {
    
}

document.getElementById("submit").addEventListener("click", function() {
    record = new Record();
    resetForm();
});

function main() {
    generateCategories();
    generateTime();
}

main();
*/