var res = fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json())
.then((value)=>{
 console.log(value);

var container=document.createElement("div");
container.setAttribute("class","container")
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);

    for(var i=0; i<value.length; i++){
    
        row.innerHTML+=`
        <div class="col-lg-4">
        <div class="card border-success mb-3" style="max-width: 600px; background-color:#ececec; height:500px">
        <div class="card-header" style="text-align:center">${value[i].name}</div>
        <div class="card-body text-success" style="text-align:center">
        <div class="card-title" style="padding-bottom:45px "><img src="${value[i].flags.svg}" style="width:300px;height:200px;object-fit:cover"></div>
        <h5 class="card-title" style="color:black">CAPITAL: ${value[i].capital}</h5>
        <h5 class="card-title" style="color:black">REGION: ${value[i].region}</h5>
        <h5 class="card-title" style="color:black">COUNTRY CODE: ${value[i].alpha3Code}</h5>
        <a class="btn btn-primary" href="https://api.openweathermap.org/data/2.5/weather?q=${value[i].name}&appid=350cc5c94c108cb0e0955c0bbc8a05cc" role="button"style="marigin-bottom:50px">Click for weather</a>
        
        </div>
        </div>
      `
        document.body.append(container);
    }
});