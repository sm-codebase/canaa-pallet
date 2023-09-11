import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "70vh",
};

const center = {
  lat: -22.36547194149674,
  lng: -46.94303070225753,
};

function SimpleMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBhbEXhbkeKjLuTctO_qscFo1WWSAmmjmw",
  });

  const [map, setMap] = React.useState(null);

  return isLoaded ? (
    <div id="localizacao" className="mt-20">
      <div className="rounded-lg">
        <h3 className="p-2 text-2xl sm:text-2xl font-black text-center text-green-600">
          Localização
        </h3>

        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(SimpleMap);
