const countryContainer = document.querySelector('.cards-container');
const loader = document.querySelector('.loading-container');
const filterByRegionEl = document.querySelector('#selectRegion');
const loadingText = document.querySelector('#loadingText');

const renderCountries = () => {
     fetch('https://restcountries.com/v3.1/all')
     .then((res) => res.json())
     .then((data) => {
          loader.classList.add('active-loader')
          setTimeout(() => {
               loader.classList.remove('active-loader')
              setTimeout(() => {
               data.forEach((country) => {
                    const ancorTag = document.createElement('a');
                    ancorTag.href = `country.html?name=${country.name.common}`
                    ancorTag.innerHTML += `
                    <div class="cards">
                    <div class="image-container">
                         <img src=${country.flags.svg} alt="">
                    </div>
                    <div class="content">
                         <h1>${country.name.common}</h1>
                         <div class="country-content">
                              <p><b>Population : </b>${country.population.toLocaleString('en-IN')}</p>
                              <p><b>Region : </b>${country.region}</p>
                              <p><b>Capital : </b>${country.capital}</p>
                         </div>
                    </div>
                    </div>
                    `
     
                    countryContainer.append(ancorTag)
               })
              }, 700);
          }, 2500);
     })
}

const filterByRegiondata = (all) => {
     loader.classList.add('active-loader')
          setTimeout(() => {
               loader.classList.remove('active-loader')
              setTimeout(() => {
               all.forEach((country) => {
                    const ancorTag = document.createElement('a');
                    ancorTag.href = `country.html?name=${country.name.common}`
                    ancorTag.innerHTML += `
                    <div class="cards">
                    <div class="image-container">
                         <img src=${country.flags.svg} alt="">
                    </div>
                    <div class="content">
                         <h1>${country.name.common}</h1>
                         <div class="country-content">
                              <p><b>Population : </b>${country.population.toLocaleString('en-IN')}</p>
                              <p><b>Region : </b>${country.region}</p>
                              <p><b>Capital : </b>${country.capital}</p>
                         </div>
                    </div>
                    </div>
                    `
     
                    countryContainer.append(ancorTag)
               })
              }, 600);
          }, 2500);
}

filterByRegionEl.addEventListener('change',(e) => {
     fetch(`https://restcountries.com/v3.1/region/${filterByRegionEl.value}`)
     .then((res) => res.json())
     .then((data) => {
          countryContainer.innerHTML = ''
           filterByRegiondata(data) 
     })

     if(filterByRegionEl.firstChild){
          renderCountries()
     }
})

renderCountries()