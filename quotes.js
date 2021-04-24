const blockquote = document.querySelector('.text');
const figcaption = document.querySelector('.author');
const button = document.querySelector('.btn_quotes');

async function getQuote() {

    const url = `https://api.adviceslip.com/advice`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    console.log(data['slip']['advice'])
    blockquote.textContent = data['slip']['advice'];
    button.disabled = true;
    setTimeout(function() { button.disabled = false }, 3000);
}
button.addEventListener('click', getQuote);

getQuote();
