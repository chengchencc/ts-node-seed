
import xlsx from 'node-xlsx';
import * as fs from 'fs-extra';
import * as path from "path";


function exportXls(params: string) {
    const dataSheet1 = [[1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
    const dataSheet2 = [[4, 5, 6], [7, 8, 9, 10], [11, 12, 13, 14], ['baz', null, 'qux']];
    const range = { s: { c: 0, r: 0 }, e: { c: 0, r: 3 } }; // A1:A4
    const sheetOptions = { '!merges': [range] };

    var buffer = xlsx.build([{ name: "myFirstSheet", data: dataSheet1 }, { name: "mySecondSheet", data: dataSheet2, options: sheetOptions }]); // Returns a buffer
    fs.writeFile("D:/aaa.xlsx", buffer)
}

exportXls("");

console.log(__dirname)
console.log(path.resolve("./src/assets/aaa.json"))
const aa = fs.readJsonSync(path.resolve("./src/assets/aaa.json"))
console.log(aa)


console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");