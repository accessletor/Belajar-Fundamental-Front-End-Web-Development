import homeIcon from '../../img/home.png';
import { VanillaTilt } from '../vendor.js';
class Welcome extends HTMLElement {
  constructor () {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback () {
    this.render();
    this.initTilt();
  }

  initTilt () {
    const tiltElement = this.shadowDOM.querySelector('.welcome-icon');
    if (tiltElement) {
      VanillaTilt.init(tiltElement, {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.5
      });
    }
  }

  render () {
    this.shadowDOM.innerHTML = `
      <style>
      .welcome-message {
        text-align: center;
        margin: 5% 0 30px;
        color: white;
      }

      .welcome-message h1 {
        font-size: 24px;
        margin-bottom: 10px;
      }

      .welcome-message p {
        font-size: 16px;
        margin: 0;
      }

      .welcome-icon {
        width: 150px;
        margin-top: 20px;
      }
      .date{
        width: 400px;
        font-size: 20px;
      }
      </style>
      <div class="welcome-message">
      <h1>Selamat Datang di Aplikasi Cuaca!</h1>
      <p>Silahkan Cari Kotamu</p>
      <img src="${homeIcon}" class="welcome-icon" data-tilt>
      <div class="clock">
        <span class="date"></span>
      </div>
  </div>`;
  }
}

customElements.define('selamat-datang', Welcome);
