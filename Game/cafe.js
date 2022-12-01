//CAFE.HTML
window.addEventListener('load', () => {
  // hämta state just nu
  const state = getState();

  console.log(state);

  // hämta Passport ikon, samma id för alla sidor
  

  // om vi har gun i state, sätt ej osynlig bild
  if (state.items.passport === true) {
      passportStuff.src = "Image/Passport.png" 
  }
});

const passportStuff = document.getElementById('passport')
const btncafe2 = document.getElementById('btncafe2');

btncafe2.addEventListener('click', function () {
  console.log("click");
    passportStuff.src = "Image/Passport.png";
});

