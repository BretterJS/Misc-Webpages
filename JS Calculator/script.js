
let display = document.getElementById('inputView');
let button = document.querySelectorAll('.button');

display.focus();

function enter(num) {
  display.value = display.value + num;
};

function equal() {
  let exp = display.value;
  if (exp) {
  display.value = eval(exp);
  };
};

function c() {
  display.value = '';
  display.focus();
};

function back() {
  let exp = display.value;
  display.value = exp.substring(0, exp.length -1);
  display.focus();
};

for (let i = 0; i < button.length; i++) {
  button[i].onmouseover = function() {
    this.style.transform = 'scale(1.005)';
    this.style.backgroundColor = '#A9A9A9';
  }
  button[i].onmousedown = function() {
    this.style.transform = 'scale(1.05)';
    this.style.backgroundColor = 'white';
  };
  button[i].onmouseup = function() {
    this.style.transform = 'scale(1)';
    this.style.backgroundColor = 'grey';
  };
  button[i].onmouseleave = function() {
    this.style.transform = 'scale(1)';
    this.style.backgroundColor = 'grey';
  };

  button[17].addEventListener('click', () => {
      button[0].style.backgroundColor = '#9a9a9a';
      button[0].style.transform = 'scale(1.02)';
  });

};

// Disable all keys

document.onkeydown = function(e) {

  return false;
};


// Allow only number keys to be used 
/*
function onlyNumberKeys(evt) {
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      alert('Please enter a number');
      return false;
  }
  return true;
}
*/
// Need to make function or modify numberkeys function to allow operator buttons
