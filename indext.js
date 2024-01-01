let key="caa24487e91b43c49a032133232712";

let temp=document.querySelector(".temp");
let city=document.querySelector(".city");
let humidity=document.querySelector(".humidity");
let wind=document.querySelector(".wind");
let weathericon=document.querySelector(".weather-icon");

let inputBar=document.querySelector(".inputar");
let searchbtn=document.querySelector(".searchbtn");
searchbtn.addEventListener("click",function(){
    let city=inputBar.value;
    inputBar.value="";
    fetachData(city);
})
async function fetachData(city){
    let data=await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`);
    let dataobj=await data.json();
   screenUpdate(dataobj);
   console.log(dataobj);
}

fetachData("gwalior");

function screenUpdate(obj){
    let tempdata=obj.current.temp_c;
    let citydata=obj.location.name;
    let humiditydata=obj.current.humidity;
    let winddata=obj.current.wind_kph;
    let weatherdata=obj.current.condition.icon;

    temp.innerHTML=tempdata;
    city.innerHTML=citydata;
    humidity.innerHTML=humiditydata;
    wind.innerHTML=winddata;
    weathericon.innerHTML=weatherdata;
}