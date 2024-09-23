function goback() {
    window.history.go(-1)
}


var canvas = document.getElementById("mycanvas")
var	ctx = canvas.getContext('2d')

//Radial Gradient
var rad = ctx.createRadialGradient(150,75,15,170,90,150);
rad.addColorStop(0,"#e81cff");
rad.addColorStop(1,"#40c9ff");

//Linear Gradient
var grad = ctx.createLinearGradient(0,0,200,0);
grad.addColorStop(0,"#6ef195");
//grad.addColorStop(0.5,"#aab2ff");
grad.addColorStop(1,"#00e3fd");

//Rectangle

ctx.beginPath()
ctx.rect(20,30,320,180);
ctx.fillStyle = grad;
ctx.fill();


//circle

ctx.beginPath();
ctx.arc(130,120,80,0,2 * Math.PI);
ctx.fillStyle = rad;
ctx.fill();

ctx.beginPath();
ctx.arc(230,120,80,0,2 * Math.PI);
ctx.fillStyle = rad;
ctx.fill();

//download button

var select = document.getElementById("format")
console.log(format)
select.addEventListener('change',functionDownload)

function functionDownload(){
    var format = this.value
    var li = canvas.toDataURL(`image/${format}`)
    var downloadLink = document.getElementById("download")
    downloadLink.href = li
    downloadLink.download = `downloadImage.${format}` ;
    
}

