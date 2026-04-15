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
    
    const qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile('URL.txt', url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment");
    } else {
      console.error("Something went wrong:", error);
    }
  });
