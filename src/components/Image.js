import React from "react";

const Image = ({ url, title, lat, lng, handleMap }) => (
  <li role="button" onClick={() => handleMap({lat, lng})}>
    <img src={url} alt={title} />
  </li>
);

export default Image;
