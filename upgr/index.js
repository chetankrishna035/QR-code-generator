import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Enter your URL:",
      name: "url",
    }
  ])
  .then((answers) => {
    const url = answers.url;
    const timestamp = Date.now();
    const qrFile = `qr_${timestamp}.png`;
    const txtFile = `url_${timestamp}.txt`;

    qr.image(url).pipe(fs.createWriteStream(qrFile));

    fs.writeFile(txtFile, url, (err) => {
      if (err) throw err;
      console.log(`Saved: ${qrFile} and ${txtFile}`);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
