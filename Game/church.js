//CHURCH.HTML

// körs när fönstret laddar
window.addEventListener('load', () => {
  // hämta state just nu
  const state = getState();

  console.log(state);

  // hämta GUN ikon, samma id för alla sidor
  

  // om vi har gun i state, sätt ej osynlig bild
  if (state.items.gun === true) {
      gunStuff.src = "Image/Gun.png" 
  }
});

let gunCounter = 0;

const btnchurch1 = document.getElementById('btnchurch1');
const btnchurch2 = document.getElementById('btnchurch2');
const btnchurch3 = document.getElementById('btnchurch3');

btnchurch1.addEventListener('click', () => {
    let currState = getState();
    const maybeThree = Math.round(Math.random() * 3);

    if (!currState.items.gun) {
        gunCounter++;
    }

    if (maybeThree > 1) {
        currState.items.gun = true;
        setState(currState);
    }

    if (currState.items.gun === true) {
        gun.src = "Image/Gun.png"
    }

    if (gunCounter > 2) {
        reset();
        window.location.href = '/Game/game.html';
    }
});



btnchurch2.addEventListener('click', () => {
    // hämta state
    let currState = getState();

    // skaffa siffra 0, 1, 2, 3?
    const maybeThree = Math.round(Math.random() * 3);

    // om vi redan har hittat gun så kan vi strunta i att lägga till för att reseta
    if (!currState.items.gun) {
        gunCounter++;
    }

    // kolla om din random siffra är mer än 1, dvs du har hittat gun
    if (maybeThree > 1) {
        // sätt state
        currState.items.gun = true;
        setState(currState);

        // sätt png för gun ID till inte osynlig
        gun.src = "Image/Gun.png"
    }

    // om counter är mer än 2 har du torskat, återställ allt state och skicka till hemskärmen
    if (gunCounter > 2) {
        reset();
        window.location.href = '/Game/game.html';
    }
});


btnchurch3.addEventListener('click', () => {
    let currState = getState();

    const maybeThree = Math.round(Math.random() * 3);

    if (!currState.items.gun) {
        gunCounter++;
    }

    if (maybeThree > 1) {
        currState.items.gun = true;
        setState(currState);
    }

    if (currState.items.gun === true) {
        gun.src = "Image/Gun.png"
    }

    if (gunCounter > 2) {
        reset();
        window.location.href = '/Game/game.html';
    }
});

