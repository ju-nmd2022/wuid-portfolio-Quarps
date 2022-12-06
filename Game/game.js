// const randomNumber3 = Math.floor(Math.random() * 2);
// const randomNumber4 = Math.floor(Math.random() * 3);



// kolla när sida ändras / laddas in om gun finns (hämta state och kolla items.gun)
// om den finns så sätt gunStuff.src = "Image/Gun.png" 

// gör samma logik för andra sidor, fast med andra bilder

// sista sidan, kolla så att alla items är true:
// getState()
// if (items.gun === true && passport === true ...) {
//     // DU KAN NU GÅ VIDARE
// }

// kolla hur man disablar knappar
// hötma knapp med js, sätt knapp.disabled = true typ

const passportStuff = document.getElementById('passport')
const gunStuff = document.getElementById('gun');
const moneyBagStuff = document.getElementById('moneyBag');

// Set up game state
let initialState = {
    items: {
        gun: false,
        passport: false,
        moneyBag: false
    }
}

// Serialize object to string and save to localStorage
const isSetRoot = JSON.parse(sessionStorage.getItem('state'))

// om null har vi inget i local storage så då skapar vi ett state
if (isSetRoot == null) {
    const serObj = JSON.stringify(initialState); // string -> "{"items": "{...}"}"
    sessionStorage.setItem('state', serObj); // Save to localStorage
}

// get current game state, returns state object
function getState() {
    return JSON.parse(sessionStorage.getItem('state'));
}

// set state
function setState(stateObj) {
    sessionStorage.setItem('state', JSON.stringify(stateObj));
}

//function reseting the states to false
function reset() {
  initialState = {
    items: {
        gun: false,
        passport: false,
        moneyBag: false
    }
}
    setState(initialState);
}

//starts when the window loading
window.addEventListener('load', function() {
  // geting state
  const state = getState();
  // geting all the id:s
  // if true -> show the image with colour
  if (state.items.gun === true) {
      gunStuff.src = "Image/Gun.png" 
  }
  if (state.items.passport === true) {
    passportStuff.src = "Image/Passport.png" 
  }
  if (state.items.moneyBag === true) {
    moneyBagStuff.src = "Image/Moneybag.png" 
  }
});
const state = getState();

//CHURCH LOCKED
const churchButton = document.getElementById('churchButton');

if( typeof (churchButton) != "undefined" && churchButton !=null) {
if (state.items.passport === false) {
  console.log(state);
  churchButton.href = "#";
}
else {
  churchButton.href = "church.html"
}

//alert
churchButton.addEventListener('click', function() {
  if (state.items.passport === false) {
    alert("noob it's locked") 
  }
});
};

//HOTEL LOCKED
const hotelButton = document.getElementById('hotelButton');

if( typeof (hotelButton) != "undefined" && hotelButton !=null) {
if (state.items.gun === false) {
  console.log(state);
  hotelButton.href = "#";
}
else {
  hotelButton.href = "hotel.html"
}

//alert
hotelButton.addEventListener('click', function() {
  if (state.items.gun === false) {
    alert("noob it's locked") 
  }
});
};

//FORT LOCKED
const fortButton = document.getElementById('fortButton');

if( typeof (fortButton) != "undefined" && fortButton !=null) {
if (state.items.passport === true && state.items.gun === true && state.items.moneyBag === true) {
  fortButton.href = "fort.html"
}
else {
  console.log(state);
  fortButton.href = "#";
}

//alert
fortButton.addEventListener('click', function() {
  if (state.items.passport === false && state.items.gun === false) 
  {
    alert("noob it's locked") 
  }
});
};



//SHOWING PASSPORT (CAFE)
const btncafe2 = document.getElementById('btncafe2');

if ( typeof (btncafe2) != "undefined" && btncafe2 !=null) {
btncafe2.addEventListener('click', function() {
  let currState = getState();
  currState.items.passport = true;
  passportStuff.src = "Image/Passport.png";
  setState(currState);
});
};

//SHOWING GUN (CHURCH)
const btnchurch3 = document.getElementById('btnchurch3');

if ( typeof (btnchurch3) != "undefined" && btnchurch3 !=null) {
btnchurch3.addEventListener('click', function() {
  let currState = getState();
  currState.items.gun = true;
  gunStuff.src = "Image/Gun.png";
  setState(currState);
});
};

//SHOWING MONEYBAG (HOTEL)
const btnhotel3 = document.getElementById('btnhotel3');

if ( typeof (btnhotel3) != "undefined" && btnhotel3 !=null) {
btnhotel3.addEventListener('click', function() {
  console.log("click");
  let currState = getState(); 
  currState.items.moneyBag = true;
  moneyBagStuff.src = "Image/Moneybag.png";
  setState(currState);
  console.log("click");
});
};

//restart game button
const restart = document.getElementById('restart');

if ( typeof (restart) != "undefined" && restart !=null) {
  restart.addEventListener('click', function() {
    reset();
    //reload function: https://www.freecodecamp.org/news/refresh-the-page-in-javascript-js-reload-window-tutorial/#:~:text=You%20can%20use%20the%20location,method%20responsible%20for%20page%20reloading.
    window.location.reload(true);
    
  });
  };

//FORT.BTN
const btnfort = document.getElementById('btnfort');

if ( typeof (btnfort) != "undefined" && btnfort !=null) {
  btnfort.addEventListener('click', function() {
  console.log("click");
  const mathRandom = Math.floor(Math.random() * 2);
  console.log(mathRandom);
  if(mathRandom === 0) {
    reset()
    alert("BIG NOOB YOUR SUBMARINE HAVE SUNKEN");
    window.open("index.html");
    window.location.reload(true);
  }
  else if (mathRandom === 1 && state.items.passport === true && state.items.gun === true && state.items.moneyBag === true){
    window.open("xendscen.html");
  }
  else {
    reset()
  }
  });
};

//CAFE BUTTONS
const btncafe1 = document.getElementById('btncafe1');
const btncafe3 = document.getElementById('btncafe3');
const btncafe4 = document.getElementById('btncafe4');

if ( typeof (btncafe1) != "undefined" && btncafe1 !=null) {
btncafe1.addEventListener('click', function () {
    alert("HHAAHAH WRONG ONE");
  });
};

if ( typeof (btncafe3) != "undefined" && btncafe3 !=null) {
btncafe3.addEventListener('click', function () {
    alert("HHAAHAH WRONG ONE");
  });
};

if ( typeof (btncafe4) != "undefined" && btncafe4 !=null) {
btncafe4.addEventListener('click', function () {
    alert("HHAAHAH WRONG ONE");
  });
};


//CHURCH BUTTONS
const btnchurch1 = document.getElementById('btnchurch1');
const btnchurch2 = document.getElementById('btnchurch2');

if ( typeof (btnchurch1) != "undefined" && btnchurch1 !=null) {
  btnchurch1.addEventListener('click', function () {
      alert("HHAAHAH WRONG ONE");
    });
  };
if ( typeof (btnchurch2) != "undefined" && btnchurch2 !=null) {
  btnchurch2.addEventListener('click', function () {
      alert("HHAAHAH WRONG ONE");
    });
  };

//HOTEL BUTTONS
const btnhotel1 = document.getElementById('btnhotel1');
const btnhotel2 = document.getElementById('btnhotel2');

if ( typeof (btnhotel1) != "undefined" && btnhotel1!=null) {
  btnhotel1.addEventListener('click', function () {
      alert("HHAAHAH WRONG ONE");
    });
  };

if ( typeof (btnhotel2) != "undefined" && btnhotel2!=null) {
  btnhotel2.addEventListener('click', function () {
      alert("HHAAHAH WRONG ONE");
    });
  }; 
