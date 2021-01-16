let circle = document.querySelector('#circle'),
up = document.querySelector('#up'),
down = document.querySelector('#down');

let rotateValue = circle.style.transform,
rotateSum;

up.onclick = ()=> {

  rotateSum = rotateValue + "rotate(-90deg)";

  circle.style.transform = rotateSum;

  rotateValue = rotateSum;
}

down.onclick = ()=> {

  rotateSum = rotateValue + "rotate(90deg)";

  circle.style.transform = rotateSum;

  rotateValue = rotateSum;
}
