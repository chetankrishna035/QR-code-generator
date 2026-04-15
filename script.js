document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('url-input');
    const generateBtn = document.getElementById('generate-btn');
    const qrContainer = document.getElementById('qr-container');
    const qrcodeElement = document.getElementById('qrcode');
    const downloadBtn = document.getElementById('download-btn');

    let qrcode = null;

    generateBtn.addEventListener('click', () => {
        const url = urlInput.value.trim();

        if (!url) {
            alert('Please enter a valid URL');
            return;
        }

        qrcodeElement.innerHTML = '';
        qrContainer.classList.remove('qr-hidden');

        qrcode = new QRCode(qrcodeElement, {
            text: url,
            width: 256,
            height: 256,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

        setTimeout(() => {
            qrcodeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    });

    downloadBtn.addEventListener('click', () => {
        const img = qrcodeElement.querySelector('img');
        const canvas = qrcodeElement.querySelector('canvas');

        if (img && img.src) {
            triggerDownload(img.src);
        } else if (canvas) {
            const dataURL = canvas.toDataURL("image/png");
            triggerDownload(dataURL);
        }
    });

    function triggerDownload(dataURL) {
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'qrcode.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    urlInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            generateBtn.click();
        }
    });
});
