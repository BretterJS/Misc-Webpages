let slides = document.querySelectorAll('.slide');
let leftArrow = document.querySelector('#left-arrow');
let rightArrow = document.querySelector('#right-arrow');
let current = 0;

function reset() {
  for (let i=0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  };
};

function slideShow() {
  reset();
  slides[0].style.display = 'block';
};

slideShow();

function previous() {
  reset();
  slides[current - 1].style.display = 'block';
  current--;
};

function next() {
  reset();
  slides[current + 1].style.display = 'block';
  current++;
};

leftArrow.addEventListener('click', function() {
  if (current === 0) {
    current = slides.length;
  };
  previous();
});

rightArrow.addEventListener('click', function() {
  if (current === slides.length - 1) {
    current = -1;
  };
  next();
});


let number = document.querySelectorAll('.content > span');
for (let j = 0; j < number.length; j++) {
  number[j].addEventListener('click', function() {
    this.style.transform = 'scale(2)';
    this.style.backgroundColor = 'white';
    this.style.color = 'grey';
    this.style.textShadow = '2px 2px black';
    this.style.border = '2px solid black';
    this.style.paddingLeft = '20px';
    this.style.paddingRight = '20px';
    setTimeout(function() {
      if (current === slides.length - 1) {
        current = -1;
      };
      reset();
      next();
    }, 1000);
  });
};



