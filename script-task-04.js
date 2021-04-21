let req = new XMLHttpRequest();
req.open('GET', 'https://restcountries.eu/rest/v2/all', true);
req.send();
req.onload = function() {
    let data = JSON.parse(this.response);
    let asia = data.filter((country) => country.region === 'Asia');
    console.log('This are Country are asia Contient:')
    console.log(asia)
    let population = data.filter((country) => country.population < 200000);
    console.log('This are Country are less than 2 lacs Population:')
    console.log(population);
    console.log(`All country name, captial, flags:`)
    data.forEach((country) => {
        console.log(`
        Name: ${country.name},
        Captial: ${country.captial},
        Flags: ${country.flag}
        `)
    })
    let totalPopulation = data.reduce((acc, country) => acc+country.population);
    console.log(`Total Population of all country: ${totalPopulation}`);
    let usDollars = data.filter((country) => country.currencies[0].code === 'USD' );
    console.log('This are the countrys are using US Dollars:')
    console.log(usDollars);

    
}


