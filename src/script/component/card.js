import searchIcon from '../../img/search.png';
import humidityIcon from '../../img/humidity.png';
import windIcon from '../../img/wind.png';
class WeatherCard extends HTMLElement {
  constructor () {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback () {
    this.render();
  }

  render () {
    this.shadowDOM.innerHTML = `
    <style>
    * {
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}
    .card{
      width: 90%;
      max-width: 90%;
      background: linear-gradient(135deg, #00faba, #5b548a);
      color: #fff;
      margin: 35px auto 0;
      border-radius: 20px;
      padding: 40px 35px;
      text-align: center;
  }
  .search{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  .search input{
      width: 100%;
      border: 0;
      outline: 0;
      background-color: #ebfffc;
      color: #555;
      padding: 10px 25px;
      height: 60px;
      border-radius: 30px;
      flex: 1;
      margin-right: 16px;
      font-size: 18px;
  }
  .search button{
      width: 100%;
      border: 0;
      outline: 0;
      background: #ebfffc;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      cursor: pointer;
  }
  .search button img{
      width: 16px;
  }
  .weather-icon{
      width: 170px;
      margin-top: 30px;
  }
  .weather h1{
      font-size: 80px;
      font-weight: 500;
  }
  .weather h2{
      font-size: 45px;
      font-weight: 400;
      margin-top: -10px;
  }
  .details{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      margin-top: 50px;
  }
  .col{
      display: flex;
      align-items: center;
      text-align: left;
  }
  .col img{
      width: 40px;
      margin-right: 10px;
  }
  .humidity, .wind{
      font-size: 28px;
      margin-top: -6px;
  }
  
  .weather{
      display: none;
      animation: slideDown 0.5s ease-in-out;
  }
  .error{
      text-align: left;
      margin-left: 10px;
      font-size: 14px;
      margin-top: 10px;
      display: none;
  }
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @media screen and (max-width: 768px) {
      .details {
          flex-direction: column;
          align-items: center;
      }
      .col{
          margin: 10px auto;
      }
  }
  
  
  @media screen and (max-width: 350px) {
      .search {
        flex-direction: column;
        position: static;
      }
    
      .search > input {
        width: 100%;
        margin-bottom: 12px;
        margin: 10px auto;
      }
    
      .search > button {
        border-radius: 0;
        width: 50%;
        height: 40px;
        margin: 0 auto;
        border-radius: 30px;
      }
      .search > .button > img{
          width: 8px;
      } 
      .weather img{
          width: 70%;
      }
      .weather h1{
          font-size: 45px;
          font-weight: 500;
      }
      .weather h2{
          font-size: 25px;
          font-weight: 400;
          margin-top: -10px;
      }
      .details {
          flex-direction: column;
          align-items: center;
      }
      .col{
          margin: 10px auto;
          text-align: center;
      }
      .col img{
          width: 25%;
      }
      .humidity, .wind{
          font-size: 16px;
          margin: 5px 0;
      }
      .col > div > p {
          font-size: 12px;
      }
  }
    </style>
    <div class="card">
    <div class="search">
        <input type="text" placeholder="masukan kota" spellcheck="false">
        <button><img src="${searchIcon}" alt="pencarian"></button>
    </div>
    <div class="error">
        <p id="error-message">Invalid City Name</p>
    </div>
    <div class="weather">
        <img src="" alt="hujan" class="weather-icon">
        <h1 class="temp">22°c</h1>
        <h2 class="city">New York</h2>
        <div class="details">
            <div class="col">
                <img src="${humidityIcon}">
                <div>
                    <p class="humidity">50%</p>
                    <p>Humidity</p>
                </div>
            </div>
            <div class="col">
                <img src="${windIcon}">
                <div>
                    <p class="wind">15 km/h</p>
                    <p>Wind Speed</p>
                </div>
            </div>
        </div>
    </div>
</div>`;
  }
}

customElements.define('card-cuaca', WeatherCard);
