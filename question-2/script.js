/**
 * On this module you should write your answer to question #2.
 * This file would be executed with the following command:
 * $ node scritp.js BrowsingEvents.csv
 */
const Papa = require('papaparse');
const fs = require('fs');


const file1 = 'BrowsingEvents.csv';
const file2 = 'output.csv';
const datos = [];

function count(data){
    var map = [];
    for (var i = 0; i < data.length; i++) {
        var identidad = data[i].entityId;
        var tipoentidad = data[i].eventType;
        var found = map.find(obj => obj.productId==identidad)

        if (found==null){
            if (tipoentidad=='click'){
                map.push({ productId: identidad, clicks: 1, impressions: 0, ctr: 0 });
            }else if (tipoentidad=='impression'){
                map.push({ productId: identidad, clicks: 0, impressions: 1, ctr: 0 });
            }
        }else{
            if (identidad == found.productId){
                if (tipoentidad=='click'){
                    found.clicks++;
                }else if (tipoentidad=='impression'){
                    found.impressions++;
                }
                found.ctr = found.clicks/ found.impressions;
            }else {
                if (tipoentidad=='click'){
                    map.push({ productId: identidad, clicks: 1, impressions: 0, ctr: 0 });
                }else if (tipoentidad=='impression'){
                    map.push({ productId: identidad, clicks: 0, impressions: 1, ctr: 0 });
                }
            }
        }
        //console.log(found)
    }
    return map;
}

function writecsv(data){
    fs.writeFile(file2, extractAsCSV(data),err => {
        if (err){
            console.log('Error writing to csv file', err);
        } else {
            console.log(`saved as ${file2}`);
        }
    });
}

function extractAsCSV(users) {
    const header = ["productId, clicks, impressions, ctr"];
    const rows = users.map(user =>
       `${user.productId}, ${user.clicks}, ${user.impressions}, ${user.ctr}`
    );
    return header.concat(rows).join("\n");
}


const args = process.argv.slice(-1);
console.log(`Running question #2 with args ${args}`)

let csvData = fs.readFileSync(file1, "utf-8");
csvData = csvData.trim().replace(/([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+)/gi, '$1,$2,$3,$4');
//console.log("Adjusted csv:", csvData);

let { meta, data } = Papa.parse(csvData, { header: true });

//console.log("Parsed data:", data);
//console.log("Metadata:", meta);

var sine = count(data);

writecsv(sine);

//console.log(sine);