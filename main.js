const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");
const generatorButton = document.getElementById("generatorButton");

//use QR code API to generate a QR code
function generateQR(){
    if(qrText.value.length > 0){
        // change the image to the QR code
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img")
    } else {
        // if no input, add class to shake screen
        qrText.classList.add("error")
        // remove error class after 1s
        setTimeout(()=>{
            qrText.classList.remove("error")
        }, 1000)
    }
}

