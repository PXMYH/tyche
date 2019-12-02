const puppeteer = require('puppeteer');
const express = require('express');
const fs = require('fs');

function delay(time) {
  return new Promise(function(resolve) {
    setTimeout(resolve, time);
  });
}

// retrieve mba deadlines
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://www.mbamission.com/resources/deadlines/');

//   const data = await page.evaluate(() => {
//     const tds = Array.from(document.querySelectorAll('table tbody tr td'));
//     return tds.map(td => td.innerHTML);
//   });

//   var deadlines = {};
//   var dates = [];
//   // console.log(`data: ${data}`);

//   segmentNumber = 9;
//   schoolName = 'null';
//   // FIXME: dates are incorrectly the same for all schools
//   for (i = 0; i < data.length; i++) {
//     if (i % segmentNumber == 0) {
//       schoolName = data[i].toString();
//       deadlines[schoolName] = dates;
//     } else {
//       dates[(i % segmentNumber) - 1] = data[i];
//     }
//   }

//   console.log(deadlines);

//   // construct deadlines Json object
//   var deadlineData = {
//     events: [
//       {
//         media: {
//           url: 'https://identity.stanford.edu/img/all-marks-wide.png',
//           caption: 'null_caption'
//         },
//         start_date: {
//           month: 'null_month',
//           day: 'null_day',
//           year: 'null_year'
//         },
//         text: {
//           headline: 'null_school_name',
//           text: 'null_tag_line'
//         }
//       }
//     ]
//   };

//   for (var key in deadlines) {
//     console.log(`key is ${key}`);
//     // deadlineData.events.media.caption = key;
//     console.log(`deadlines key [0]: ${deadlines[key][0]}`);
//     var date = new Date(deadlines[key][0]);
//     console.log(`deadlines key date [0]: ${date}`);

//     var date_year = new Date(deadlines[key][0]).getFullYear();
//     console.log(`deadlines key date [0]: ${date_year}`);

//     // TODO: parse not only the first round date
//     // FIXME: getMonth and getDay don't return correct value
//     var year = new Date(deadlines[key][0]).getFullYear();
//     var month = new Date(deadlines[key][0]).getMonth();
//     var day = new Date(deadlines[key][0]).getDay();

//     console.log(`deadlines key year [0]: ${year}`);
//     console.log(`deadlines key month [0]: ${month}`);
//     console.log(`deadlines key day [0]: ${day}`);

//     deadlineData['events'][0]['start_date']['year'] = year;
//     deadlineData['events'][0]['start_date']['month'] = month;
//     deadlineData['events'][0]['start_date']['day'] = day;

//     deadlineData['events'][0]['text']['headline'] = key;
//     deadlineData['events'][0]['text']['text'] = key;
//   }

//   console.log(`deadline Data: ${deadlineData}`);
//   // write to file
//   var deadlineContent = JSON.stringify(deadlineData);
//   fs.writeFile('deadlines.json', deadlineContent, 'utf8', function(err) {
//     if (err) {
//       console.err('An error occured while writing JSON Object to File.');
//       return console.err(err);
//     }

//     console.log('JSON file has been saved.');
//   });

//   await page.waitFor(4000000);
//   await browser.close();
// })();

var app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index');
});

var server = app.listen(3000, () => {
  console.log('server started up, listening on port 3000');
});
