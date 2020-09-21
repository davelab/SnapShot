import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1Ijoia2hhdHRha2FobWVkIiwiYSI6ImNrZG95em15bDBwb3MyeHR2YWVvdGkwbnEifQ.Ac_1yEJqfx1X8aw1y1yiag";

const style = {
  position: "absolute",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0
};

export default function Map({ lat, lng }) {
  const mapContainer = useRef("");
  const map = useRef(null);

  useEffect(() => {
    const mapgl = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: 8
    });

    map.current = mapgl;


   new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(mapgl);
  }, [lat, lng]);


  return (
    <div className="map">
      <div style={style} ref={(el) => (mapContainer.current = el)} />
    </div>
  );
}
