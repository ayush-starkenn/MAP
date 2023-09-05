import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";
import Pin from "./pin.png";
import CircleAlert from "./Cirlce";
import drowsinessIcon from "../src/Assets/Drowsiness.png";
import accidentSavedIcon from "./Assets/Accident_saved.png";

const MapContainer = () => {
  const mapOptions = {
    center: { lat: 18.5204, lng: 73.8567 }, // Pune, India
    zoom: 8,
  };

  const startingPoint = { lat: 18.55378, lng: 73.80667 }; // Pune, India
  const destinationPoint = { lat: 18.5178, lng: 73.81511 }; // Mumbai, India

  const midPoints = [
    { lat: 18.55311, lng: 73.82652 },
    { lat: 18.5306, lng: 73.82989 },
    { lat: 18.59842, lng: 73.75713 },
    { lat: 18.52248, lng: 73.82976 },
    { lat: 18.510695, lng: 73.816415 },
  ];

  const alertComes = [
    { data: { lat: 18.55311, lng: 73.82652 }, type: "drowsiness" },
    { data: { lat: 18.5306, lng: 73.82989 }, type: "accident saved" },
  ];

  const path = [startingPoint, ...midPoints, destinationPoint];

  const markers = [
    { id: 1, position: startingPoint, label: "Start", icon: Pin },
    { id: 2, position: destinationPoint, label: "End", icon: Pin },
    ...midPoints.map((point, index) => ({
      id: index + 3,
      position: point,
      label: `Midpoint ${index + 1}`,
      icon: Pin,
    })),
  ];

  const alertPolylineOptions = {
    strokeColor: "red",
    strokeOpacity: 1,
    strokeWeight: 5,
  };

  const routePolylineOptions = {
    strokeColor: "blue",
    strokeOpacity: 1,
    strokeWeight: 5,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCk6RovwH7aF8gjy1svTPJvITZsWGA_roU">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={mapOptions.center}
        zoom={mapOptions.zoom}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            label={marker.label}
            icon={marker.icon}
          />
        ))}
        {alertComes.map((marker) => (
          <Marker
            position={marker.data}
            label={marker.type}
            icon={
              marker.type == "drowsiness"
                ? drowsinessIcon
                : marker.type == "accident saved"
                ? accidentSavedIcon
                : Pin
            }
          />
        ))}
        <Polyline path={path} options={routePolylineOptions} />
        <Polyline path={alertComes.data} options={alertPolylineOptions} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
