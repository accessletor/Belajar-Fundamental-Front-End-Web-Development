import '../component/card.js';
import '../component/welcome.js';
import WeatherAPI from '../data/api.js';
import updateTime from './clock.js';

  // Macam-macam cuaca
  import cloudsImage from '../../img/clouds.png';
  import clearImage from '../../img/clear.png';
  import rainImage from '../../img/rain.png';
  import drizzleImage from '../../img/drizzle.png';
  import mistImage from '../../img/mist.png';
  import hazeImage from '../../img/haze.png';
  import defaultImage from '../../img/default.png';

const main = () => {
  const apiKey = 'c9141e25747eecf77180e9bd9627d49c';
  const weatherAPI = new WeatherAPI(apiKey);

  const WeatherCard = document.querySelector('card-cuaca');
  const Welcome = document.querySelector('selamat-datang');
  const searchBox = WeatherCard.shadowRoot.querySelector('.search input');
  const searchBtn = WeatherCard.shadowRoot.querySelector('.search button');
  const weatherIcon = WeatherCard.shadowRoot.querySelector('.weather-icon');
  const welcomeMessage = Welcome.shadowRoot.querySelector('.welcome-message');
  const welcomeIcon = Welcome.shadowRoot.querySelector('.welcome-icon');

  const checkWeather = async (city) => {
    try {
      const data = await weatherAPI.fetchWeatherData(city);

      welcomeMessage.style.display = 'none';
      welcomeIcon.style.display = 'none';

      WeatherCard.shadowRoot.querySelector('.city').innerHTML = data.name;
      WeatherCard.shadowRoot.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
      WeatherCard.shadowRoot.querySelector('.humidity').innerHTML = data.main.humidity + '%';
      WeatherCard.shadowRoot.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

      // switch (data.weather[0].main) {
      //   case 'Clouds':
      //     weatherIcon.src = cloudsImage;
      //     break;
      //   case 'Clear':
      //     weatherIcon.src = clearImage;
      //     break;
      //   case 'Rain':
      //     weatherIcon.src = rainImage;
      //     break;
      //   case 'Drizzle':
      //     weatherIcon.src = drizzleImage;
      //     break;
      //   case 'Mist':
      //     weatherIcon.src = mistImage;
      //     break;
      //   case 'Haze':
      //     weatherIcon.src = hazeImage;
      //     break;
      //   default:
      //     weatherIcon.src = defaultImage;
      // }
      // versi refactor
      const currentWeather = data.weather[0].main;

      const weatherIcons = {
        Clouds: cloudsImage,
        Clear: clearImage,
        Rain: rainImage,
        Drizzle: drizzleImage,
        Mist: mistImage,
        Haze: hazeImage,
      };

      weatherIcon.src = currentWeather
        ? weatherIcons[currentWeather]
        : defaultImage;

      WeatherCard.shadowRoot.querySelector('.weather').style.display = 'block';
      WeatherCard.shadowRoot.querySelector('.error').style.display = 'none';
    } catch (error) {
      const pesan = WeatherCard.shadowRoot.querySelector('#error-message');
      pesan.innerHTML = `<p>${error.message}</p>`;
      WeatherCard.shadowRoot.querySelector('.weather').style.display = 'none';
      WeatherCard.shadowRoot.querySelector('.error').style.display = 'block';
      updateTime();
    }
  };

  // Dengan tombol enter
  searchBox.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      checkWeather(searchBox.value);
    }
  });

  // Dengan tombol pencarian
  searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
  });
};

export default main;
