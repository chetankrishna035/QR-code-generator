import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

let counter = 1;

inquirer
  .prompt([
    {
      message: "Enter your URL:",
      name: "url",
    }
  ])
  .then((answers) => {
    const url = answers.url;
    const qrFile = `qr_${counter}.png`;
    const txtFile = `url_${counter}.txt`;

    qr.image(url).pipe(fs.createWriteStream(qrFile));

    fs.writeFile(txtFile, url, (err) => {
      if (err) throw err;
      console.log(`Saved: ${qrFile} and ${txtFile}`);
    });

    counter++;
  })
  .catch((error) => {
    console.error("Error:", error);
  });
