const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function(){
    for (let i = 0, len = revealElements.length; i < len; i++) {
        const isElementOnScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight;

        if(isElementOnScreen){
            revealElements[i].classList.add("revealed")
        }
        else{
            revealElements[i].classList.remove("revealed")
        }
    }


    
}


window.addEventListener("scroll", scrollReveal)
window.addEventListener("load", scrollReveal)


const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".asteroid");

const colors = [
  "#ffffff",
  "#ffffff",
  "#dff6f0",
  "#dff6f0",
  "#beeee2",
  "#beeee2",
  "#9be4d4",
  "#9be4d4",
  "#74dbc6",
  "#74dbc6",
  "#40d1b8",
  "#40d1b8",
  "#00bdb1",
  "#00bdb1",
  "#009eab",
  "#009eab",
  "#007f9e",
  "#007f9e",
  "#006089",
  "#006089",
  "#00436f",
  "#00436f",
  "#142850",
  "#142850"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();



