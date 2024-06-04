// Exercise 1: Change Background Color
const changeColorBtn = document.getElementById('changeColorBtn');
const colorInput = document.getElementById('colorInput');

changeColorBtn.addEventListener('click', () => {
  const color = colorInput.value.toLowerCase();
  
  // List of allowed colors
  const allowedColors = ['red', 'blue', 'green', 'black', 'white'];
  
  if (allowedColors.includes(color)) {
    document.body.style.backgroundColor = color;
  } else {
    alert('Invalid color! Please enter one of the following colors: red, blue, green, black, white');
  }
});


// Exercise 2: Calculate Average
const calculateAverageBtn = document.getElementById('calculateAverageBtn');
const numbersInput = document.getElementById('numbersInput');
const averageResult = document.getElementById('averageResult');

calculateAverageBtn.addEventListener('click', () => {
  const numbersString = numbersInput.value;
  const numbersArray = numbersString.split(':').map(Number);
  
  const sum = numbersArray.reduce((total, num) => total + num, 0);
  const average = sum / numbersArray.length;
  
  averageResult.textContent = `Average: ${average.toFixed(2)}`;
});


// Exercise 3: Open Modal
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

