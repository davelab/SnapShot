import React from "react";

import Gallery from "./Gallery";
import Loader from "./Loader";
import useFetchOrMemo from "../hooks/useFetchOrMemo";

const Container = ({ searchTerm }) => {
  const [ isLoading, data ] = useFetchOrMemo(searchTerm);
  return (
    <div className="photo-container">
      {isLoading ? <Loader /> : <Gallery data={data} />}
    </div>
  );
};

export default Container;
