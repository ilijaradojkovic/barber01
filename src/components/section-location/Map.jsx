import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";


export default function MapWithOverlay() {
    const position = [43.98322853444558, 21.2511274201217]; // Belgrade, Serbia (example)

    return (
        <div className="relative w-full h-full overflow-hidden rounded-2xl ">
            {/* Map */}
            <MapContainer
                center={position}
                zoom={16}
                scrollWheelZoom={false}
                className="w-full h-full rounded-2xl"
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" className="rounded-2xl" />
                <Marker position={position}>
                    <Popup>You are here</Popup>
                </Marker>
            </MapContainer>

            {/* Black overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "black",
                    opacity: 0.5,
                    pointerEvents: "none",
                    zIndex: 1000, // ensure it's on top of the map
                }}
                className="rounded-2xl"
            />
        </div>

    );
}
