// create your App component here

import React, { useState, useEffect } from "react";


const App = () => {

  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchDogImage = async () => {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message);
      setLoading(false);

    };

    fetchDogImage();

  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }


  return <img src={dogImage} alt="A Random Dog" />;
};


export default App;
