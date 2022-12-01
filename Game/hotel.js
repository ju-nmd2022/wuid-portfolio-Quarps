//HOTEL.HTML

// körs när fönstret laddar
window.addEventListener('load', () => {
  // hämta state just nu
  const state = getState();

  console.log(state);

  // hämta moneyBag ikon, samma id för alla sidor
  

  // om vi har moneyBag i state, sätt ej osynlig bild
  if (state.items.moneyBag === true) {
      moneyBagStuff.src = "Image/Moneybag.png" 
  }
});

let moneyBagCounter = 0;

const btnhotel1 = document.getElementById('btnhotel1');
const btnhotel2 = document.getElementById('btnhotel2');
const btnhotel3 = document.getElementById('btnhotel3');

btnhotel1.addEventListener('click', () => {
  let currState = getState(); 
  console.log("click");
  const maybeThree = Math.round(Math.random() * 3);

  if (!currState.items.moneyBag) {
      moneyBagCounter++;
  }

  if (maybeThree > 1) {
      currState.items.moneyBag = true;
      setState(currState);
  }

  if (currState.items.moneyBag === true) {
      bag.src = "Image/Moneybag.png";
  }

  if (moneyBagCounter > 2) {
      reset();
      window.location.href = '/Game/game.html';
  }
});

btnhotel2.addEventListener('click', function () {
  
  let currState = getState(); 
  console.log("click");
  const maybeThree = Math.round(Math.random() * 3);

  if (!currState.items.moneyBag) {
      moneyBagCounter++;
  }

  if (maybeThree > 1) {
      currState.items.moneyBag = true;
      setState(currState);
  }

  if (currState.items.moneyBag === true) {
      bag.src = "Image/Moneybag.png"
  }

  if (moneyBagCounter > 2) {
      reset();
      window.location.href = '/Game/game.html';
  }
});

btnhotel3.addEventListener('click', function () {
  
  let currState = getState(); 
  console.log("click");
  const maybeThree = Math.round(Math.random() * 3);

  if (!currState.items.moneyBag) {
      moneyBagCounter++;
  }

  if (maybeThree > 1) {
      currState.items.moneyBag = true;
      setState(currState);
  }

  if (currState.items.moneyBag === true) {
      bag.src = "Image/Moneybag.png"
  }

  if (moneyBagCounter > 2) {
      reset();
      window.location.href = '/Game/game.html';
  }
});