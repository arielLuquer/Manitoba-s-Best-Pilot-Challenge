const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const xlsx = require("xlsx");
const path = require("path");
const multer = require("multer");
const upload = multer();

app.listen(3000);

const workbook = xlsx.readFile("../record.xlsx");

app.use("/client", express.static(path.join(__dirname, "../client")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

app.post("/add", (req, res) => {
    // Convert the XLSX to JSON
    let worksheets = {};
    for (const sheetName of workbook.SheetNames) {
        // Some helper functions in XLSX.utils generate different views of the sheets:
        //     XLSX.utils.sheet_to_csv generates CSV
        //     XLSX.utils.sheet_to_txt generates UTF16 Formatted Text
        //     XLSX.utils.sheet_to_html generates HTML
        //     XLSX.utils.sheet_to_json generates an array of objects
        //     XLSX.utils.sheet_to_formulae generates a list of formulae
        worksheets[sheetName] = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
    }

    console.log(req.body);

    // Modify the XLSX
    worksheets.Sheet1.push({
        "Pilot": "test",
        "Challenge": req.body["category"],
        "First Score": req.body["first-score"],
        "Second Score": req.body["second-score"],
        "Time": req.body["time"],
    });

    for (const sheetName of workbook.SheetNames) {
        // Update the XLSX file
        xlsx.utils.sheet_add_json(workbook.Sheets[sheetName], worksheets[sheetName]);
    }

    xlsx.writeFile(workbook, "../record.xlsx");
});
