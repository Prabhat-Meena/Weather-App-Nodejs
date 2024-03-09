const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name =document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const dataHide = document.querySelector('.middle_layer');
const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value
    console.log(cityVal);
    // let url = `https://api.openweathermap.org/data/2.5/weather?q=Pune&unit=metric&appid=1c32374ca028a81f4b707b0579bc0814`
    if(cityVal === ""){
        city_name.innerText = `plz write the name before search`
        dataHide.classList.add(`data_hide`)
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&unit=metric&appid=1c32374ca028a81f4b707b0579bc0814`
            const response = await fetch(url);
            const data = await response.json()
            const arrData = [data]
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`
            temp_real_val.innerText = arrData[0].main.temp
            const tempMood = arrData[0].weather[0].main;
            console.log(tempMood);
            console.log(data);
            if(tempMood == "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68';></i>";
            }else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6';></i>";
            }else if(tempMood== "Rain"){
                temp_status.innerText = "<i class='fas fa-rain' style='color: #a4b0be';></i>";
            }else{
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68';></i>"
            }
            dataHide.classList.remove(`data_hide`)
        }catch{
            city_name.innerText = `plz entered the city name properly`;
            dataHide.classList.add(`data_hide`)
        }

    }
    
}

// https://api.openweathermap.org/data/2.5/weather?q=Pune&unit=metric&appid=1c32374ca028a81f4b707b0579bc0814
submitBtn.addEventListener('click', getInfo);

