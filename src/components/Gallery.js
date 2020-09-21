import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";
import ModalMap from "./ModalMap";
import useModal from "../hooks/useModal";
import useCoordinates from "../hooks/useCoordinates";
const Gallery = props => {

  const { data } = props;
  const { isShowing, toggle } = useModal();
  const {lat, lng, setCoordinates} = useCoordinates();

  const handleMap = (coordinates) => {
    toggle();
    setCoordinates(coordinates);
  }

  return (
    <>
      <ul>{data.size ? data.values((photo) => <Image url={photo.imageURL} title={photo.title} key={photo.imageURL} lat={photo.latitude} lng={photo.longitude} handleMap={handleMap} />)
        : <NoImages />}</ul>

      <ModalMap
        isShowing={isShowing}
        hide={toggle}
        {...{lat, lng}}
      />
    </>
  );
};

export default Gallery;
