const puppeteer = require('puppeteer');
const express = require('express');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.mbamission.com/resources/deadlines/');

  const data = await page.evaluate(() => {
    const tds = Array.from(document.querySelectorAll('table tbody tr td'));
    return tds.map(td => td.innerHTML);
  });

  var deadlines = {};
  var dates = [];
  // console.log(`data: ${data}`);

  segment_number = 9;
  school_name = 'null';
  for (i = 0; i < data.length; i++) {
    if (i % segment_number == 0) {
      school_name = data[i].toString();
      deadlines[school_name] = dates;
    } else {
      dates[(i % segment_number) - 1] = data[i];
    }
  }

  console.log(deadlines);

  await browser.close();
})();

var app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index');
});

var server = app.listen(3000, () => {
  console.log('server started up, listening on port 3000');
});