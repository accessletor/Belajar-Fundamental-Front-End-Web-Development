import { moment } from '../vendor.js';
const Welcome = document.querySelector('selamat-datang');
const displayTime = () => {
  moment.locale('id');
  Welcome.shadowRoot.querySelector('.date').textContent = moment().format('LL');
};

const updateTime = () => {
  displayTime();
  setTimeout(updateTime, 1000);
};

updateTime();
export default updateTime;
