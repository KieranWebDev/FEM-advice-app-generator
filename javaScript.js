const adviceBtn = document.querySelector('.get-advice-btn');
const adviceText = document.querySelector('.advice-text');
const adviceNumber = document.querySelector('.advice-number');

async function getRandomQuote() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    const { id, advice } = data.slip;

    adviceNumber.textContent = `Advice # ${id}`;
    adviceText.textContent = `"${advice}"`;
    adviceBtn.classList.add('rotate');

    setTimeout(() => {
      adviceBtn.classList.remove('rotate');
    }, 500);
  } catch (error) {
    console.log(error);
  }
}

adviceBtn.addEventListener('click', getRandomQuote);
