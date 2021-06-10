const canvas = document.getElementById("convas");
canvas.width = window.innerWidth - 60;
canvas.height = 450;

let context = canvas.getContext("2d");
context.fillStyle = "white";
context.fillRect(0,0,canvas.width,canvas.height);


/** Date And Time **/

function updateTime(){
    document.getElementById('SetTime').innerHTML = new Date().toLocaleTimeString();
}
setInterval(updateTime, 1000);

let currentDate = new Date().toLocaleDateString('fa-IR');
document.getElementById("SetDate").innerHTML = currentDate;


let drawColor = "black";
let drawWidth = "2";
let idDrawing = false;
let ReStore = [];
let index = -1;


canvas.addEventListener("touchstart",start,false);
canvas.addEventListener("touchmove" ,draw ,false);
canvas.addEventListener("mousedown" ,start,false);
canvas.addEventListener("mousemove" ,draw ,false);
canvas.addEventListener("touchend"  ,stop ,false);
canvas.addEventListener("mouseup"   ,stop ,false);
canvas.addEventListener("mouseout"  ,stop ,false);

function start(event) {
    idDrawing = true;
    context.beginPath();
    context.moveTo(event.clientX-canvas.offsetLeft,event.clientY-canvas.offsetTop);
    event.preventDefault();
}

function draw(event) {
    if (idDrawing){
        context.lineTo(event.clientX-canvas.offsetLeft,event.clientY-canvas.offsetTop);
        context.strokeStyle = drawColor;
        context.lineWidth = drawWidth;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke();
    }
    event.preventDefault();
}

function stop(event){
    if (idDrawing){
        context.stroke();
        context.closePath();
        idDrawing = false;
    }
    event.preventDefault();

    if(event.type !== "mouseout"){
        ReStore.push(context.getImageData(0,0,canvas.width,canvas.height));
        index += 1;
    }

}

function changeColor(element){
    drawColor = element.style.background;
}

function clearCanvas(){
    context.fillStyle = "white";
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillRect( 0,0,canvas.width,canvas.height);

    ReStore = [];
    index = -1;
}

function undoLast(){
    if (index <= 0){
        clearCanvas();
    }
    else{
        index -= 1;
        ReStore.pop();
        context.putImageData(ReStore[index],0,0);
    }
}













