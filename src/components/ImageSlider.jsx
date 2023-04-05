import { useEffect, useState } from "react";
import axios from "axios";
import "./ImageSlider.css";
import LocationInfo from "./LocationInfo";
import {
  Akhaltsikhe,
  Batumi,
  Tbilisi,
  Telavi,
  Zugdidi,
  Gori,
  Kazbegi,
  Kutaisi,
  Poti,
  Barendrecht,
  Rotterdam,
  Sibiu,
  Bucharest,
  Amsterdam,
} from "../assets/cities";

const cities = [
  { name: "Akhaltsikhe", image: Akhaltsikhe, latitude: 41.639, longitude: 42.982 },
  { name: "Batumi", image: Batumi, latitude: 41.650, longitude: 41.639 },
  { name: "Tbilisi", image: Tbilisi, latitude: 41.715, longitude: 44.827 },
  { name: "Telavi", image: Telavi, latitude: 41.920, longitude: 45.473 },
  { name: "Zugdidi", image: Zugdidi, latitude: 42.508, longitude: 41.869 },
  { name: "Gori", image: Gori, latitude: 41.984, longitude: 44.115 },
  { name: "Kazbegi", image: Kazbegi, latitude: 42.661, longitude: 44.639 },
  { name: "Kutaisi", image: Kutaisi, latitude: 42.267, longitude: 42.694 },
  { name: "Poti", image: Poti, latitude: 42.146, longitude: 41.671 },
  { name: "Barendrecht", image: Barendrecht, latitude: 51.852, longitude: 4.542 },
  { name: "Rotterdam", image: Rotterdam, latitude: 51.924, longitude: 4.478 },
  { name: "Sibiu", image: Sibiu, latitude: 45.798, longitude: 24.125 },
  { name: "Bucharest", image: Bucharest, latitude: 44.436, longitude: 26.103 },
  { name: "Amsterdam", image: Amsterdam, latitude: 52.367, longitude: 4.895 },
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(2); // Set default index to Tbilisi

  const [displayedCity, setDisplayedCity] = useState("");
  const [displayedCountry, setDisplayedCountry] = useState("");
  const [userCity, setUserCity] = useState("");

  // const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const getCityNameAndCountry = async (latitude, longitude) => {
    const apiKey = "96f08bb90bda4094a301965e1e78312f";
    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
    );
    const city = response.data.results[0].components.city;
    const country = response.data.results[0].components.country;
    return { city, country };
  };

  useEffect(() => {
    if (currentImageIndex !== null) {
      const updateDisplayedCountry = async () => {
        const { city, country } = await getCityNameAndCountry(
          cities[currentImageIndex].latitude,
          cities[currentImageIndex].longitude
        );
        setDisplayedCountry(country);
      };
      updateDisplayedCountry();
    }
  }, [currentImageIndex]);

  const setInitialImage = async () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { city, country } = await getCityNameAndCountry(
          position.coords.latitude,
          position.coords.longitude
        );
        setUserCity(city);
        const cityIndex = cities.findIndex((c) => c.name === city);
        setCurrentImageIndex(cityIndex !== -1 ? cityIndex : 2); // Default to Tbilisi if city not found or not in the list
      },
      (error) => {
        console.warn("Error:", error);
        setCurrentImageIndex(2); // Default to Tbilisi if location access denied
        setUserCity(""); // Set userCity to an empty string if location access denied
      }
    );
  };

  useEffect(() => {
    setInitialImage();
  }, []);

  useEffect(() => {
    if (currentImageIndex !== null) {
      setDisplayedCity(cities[currentImageIndex].name);
    }
  }, [currentImageIndex]);

  useEffect(() => {
    if (currentImageIndex === null) return;

    const timer = setTimeout(() => {
      const newIndex = (currentImageIndex + 1) % cities.length;
      setCurrentImageIndex(newIndex);
    }, currentImageIndex === 2 ? 7000 : 4000);
    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  return (
    <div className="slider">
      <LocationInfo
        displayedCity={displayedCity}
        displayedCountry={displayedCountry}
      />
      
      {cities.map((city, index) => (
        <div
          className={`slider-image ${
            index === currentImageIndex ? "active" : ""
          }`}
          key={city.name}
          style={{
            backgroundImage: `url(${city.image})`,
          }}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
