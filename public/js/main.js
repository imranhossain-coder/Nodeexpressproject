const submitbtn = document.getElementById("submitbtn");
const Curday = document.getElementById("day");
const CurMonth = document.getElementById("today_data");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp");
const datahide = document.querySelector(".middle_layer");

const getinfo = async (event) => {
  event.preventDefault();
  let cityval = cityName.value;
  if (cityval === "") {
    city_name.innerText = "Please Write Your City Name Before You Search";
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=f361baa6eacb5585364613982490c6d6`;
      const response = await fetch(url);
      const data = await response.json();
      const arrdata = [data];
      city_name.innerText = `${arrdata[0].name} , ${arrdata[0].sys.country}`;
      temp.innerText = Math.trunc(arrdata[0].main.temp / 10) + "° C";
      const tempmood = arrdata[0].weather[0].main;
      datahide.classList.remove("data_hide");
      if (tempmood == "Clear") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color:#eccc68;'></i>";
      } else if (temp_status == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
      } else if (temp_status == "Rain") {
        temp_status.innerHTML =
          "<i class='fas fa-rain' style='color:#a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
      }
    } catch {
      city_name.innerText = "Please Write The City Name Properly";
      datahide.classList.add("data_hide");
    }
  }
};

submitbtn.addEventListener("click", getinfo);

const tempStatus = "Clouds";

const getcurrentday = () => {
  let currentime = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  return weekday[currentime.getDay()];
};

const getcurrenttime = () => {
  let now = new Date();
  let months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Agust",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[now.getMonth() + 1];
  let day = now.getDay();
  return `${day} ${month}`;
};

const CurrentDay = getcurrentday();
const CurrentMonth = getcurrenttime();

Curday.innerHTML = CurrentDay;
CurMonth.innerHTML = CurrentMonth;
