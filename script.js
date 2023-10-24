const mode = document.querySelector('body');

const cursorRounded = document.getElementById('cursor')
cursorRounded.style.visibility = "hidden";

const moveCursor = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  cursorRounded.style.visibility = 'visible';
  cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  console.log(mouseX, mouseY);

}
window.addEventListener('mousemove', moveCursor)


//----------------------------------------------------------------------------------

// button
const theme = document.querySelector('.sun_moon_button');

theme.addEventListener('click', (evt) => {
  console.log("toggle");
  document.body.classList.toggle('darkMode');
}
);


//--------------------------------------------------------------------------------

const parallax_el = document.querySelectorAll('.parallax');
let xValue = 0, yValue = 0;

function update(cursorX, cursorY) {
  xValue = cursorX - window.innerWidth / 2;
  yValue = cursorY - window.innerHeight / 2;
  reduction = 0.08;

  parallax_el.forEach(el => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;

    el.style.transform = `translateX(calc(-50% + ${-xValue * speedx * reduction}rem)) translateY(calc(-50% + ${-yValue * speedy * reduction}rem))`;
  })
}

update(0, 0);

window.addEventListener("mousemove", (e) => {
  update(e.clientX, e.clientY);
})


//-------------------------------------------------------------------------------
