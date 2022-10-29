import config from '../config/config';
import api_github from "./api-github";
import api_openweathermap from "./api-openweathermap";

export const getRepositoriesByUser = async (name) => {
  return await api_github
    .get(`/users/${name}/repos`)
    .then((response) => response)
    .catch((error) => error.response);
};

export const getLocation = async () => {
  const position = await getPosition();

  return await api_openweathermap
    .get(`/data/3.0/onecall?lat=${position.latitude}&lon=${position.longitude}&units=metric&appid=${config.openweathermap_id}`)
    .then((response) => response.data)
    .catch((error) => error.response.data);
};

const getPosition = async () => {
  return new Promise((resolve, reject) => {
    if (!("geolocation" in navigator)) reject(new Error("Geolocation is not available."));

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        resolve({ latitude, longitude });
      },
      (err) => {
        reject(err);
      }
    );
  });
};
