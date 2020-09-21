import { useState } from 'react';

const useModal = () => {
  const [coordinates, setCoordinates] = useState({lat: 0, lng: 0});

  return {
    lat: coordinates.lat,
    lng: coordinates.lng,
    setCoordinates,
  }
};

export default useModal;