# QR-code-generator
QR Code Generator with both web interface and CLI support. Generates and downloads QR codes instantly using QRCode.js (via Cloudflare CDN) and also supports QR creation in the console using Node.js.

Features :
1.Web Interface: Generate and download QR codes directly in your browser.
2.CLI Tool: Generate QR codes and save URLs to text files using Node.js.
Multiple Modes: Support for unique filenames using timestamps or counters.

Technologies Used
Frontend: HTML, CSS, JavaScript, [QRCode.js](https://github.com/davidshimjs/qrcodejs)
Backend/CLI: Node.js, [Inquirer](https://www.npmjs.com/package/inquirer), [qr-image](https://www.npmjs.com/package/qr-image)

Installation
1. Clone the repository
2. Install dependencies:
   npm install

Usage
Web Interface
Open `index.html` in your browser.


CLI Tool
Run the following command and follow the prompts:
node index.js

For unique filenames:
node upgr/index.js
