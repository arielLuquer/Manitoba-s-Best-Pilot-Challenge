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
        this.generateRecord();
        console.log(this.data);
    }

    findHighestScore() {
        return this.firstScore > this.secondScore ? this.firstScore : this.secondScore;
    }

    readInput() {
        const inputs = document.getElementsByClassName("input");
        for(const input in inputs) {
            this.data.set(inputs[input].id, inputs[input].value);
        }
    }
    
    // function to actually generate a record on the excel sheet (or at least one that is in the right format)
    generateRecord() {
        
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

function main() {
    generateCategories();
    generateTime();
    record = new Record();
}

main();