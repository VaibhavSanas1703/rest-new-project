
const countryName = new URLSearchParams(location.search).get('name');
const topText = document.querySelector('#topText');
const backBtn = document.querySelector('#backBtn');
document.title = `Details of ${countryName}`
topText.innerHTML = `Country / ${countryName}`

backBtn.addEventListener('click',() => {
     history.back()
})
