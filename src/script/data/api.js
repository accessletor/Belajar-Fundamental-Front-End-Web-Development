class WeatherAPI {
  // constructor(apiKey) {
  //   this.apiKey = apiKey;
  //   this.apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
  // }

  // async fetchWeatherData(city) {
  //   if (!city) {
  //     throw new Error('Silakan masukkan nama kota.');
  //   }

  //   const response = await fetch(`${this.apiUrl}${city}&appid=${this.apiKey}`);

  //   if (response.status === 404) {
  //     throw new Error('Kota tidak ditemukan.');
  //   }

  //   return response.json();
  // }
  // versi refactor
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiUrl = new URL('https://api.openweathermap.org/data/2.5/weather');
  }

  async fetchWeatherData(city) {
    if (!city) {
      throw new Error('Silakan masukkan nama kota.');
    }
    const searchParams = new URLSearchParams({
      units: 'metric',
      q: city,
      appid: this.apiKey,
    });

    const response = await fetch(
      `${this.apiUrl.toString()}?${searchParams.toString()}`
    );
    if (response.status === 404) {
      throw new Error('Kota tidak ditemukan.');
    }
    return response.json();
  }
}

export default WeatherAPI;
