let tbCountries = document.getElementById("tblCountries");

let tableBody = ` <tr>
            <th>Name</th>
            <th>Falg</th>
        </tr>` ;


fetch("https://restcountries.com/v3.1/all")
.then((res)=>res.json())
.then(data=>{

    data.forEach(element =>{

        tableBody+=`<tr class="table-danger">
                        <td><h1>${element.name.common}</h1><br>

                        Official Name : ${element.name.official}
                        <p>Region :${element.region}</p>
                        <p>Population :${element.population}</p>
                        <a class="btn btn-outline-danger" href="${element.maps.googleMaps}">Go To Map</a>
                        </td>
                        <td><img src="${element.flags.png}" class="rounded mx-auto d-block" alt=""></td>
                    </tr>`
        console.log(element.currencies);
    });

    tblCountries.innerHTML=tableBody;

})

function searchCountry(){
    let userInput = document.getElementById("txtInput").value;

    let flagImg = document.getElementById("flagImg");
    let name = document.getElementById("name");
    let officialName = document.getElementById("officialName");
    let region = document.getElementById("region");
    let population = document.getElementById("population");

    fetch(`https://restcountries.com/v3.1/name/${userInput}`)
    .then(res=>res.json())
    .then(data=>{
        data.forEach(obj=>{
            console.log(obj);
            flagImg.src=obj.flags.png
            name.innerText=obj.name.common
            officialName.innerText=obj.name.official

            region.innerText=obj.region;
            population.innerText=obj.population
        })

    })
}