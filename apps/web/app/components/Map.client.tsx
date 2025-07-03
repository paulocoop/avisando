import { type ReactNode } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from "leaflet";

import { useIsClient } from "@uidotdev/usehooks";


type MapProps = {
    className?: string;
    center?: [number, number];
    markers: {
        id: string;
        position: [number, number] | null;
        popup?: ReactNode
    }[]
    zoom?: number
}

const customMarker = L.icon({
    iconUrl: "/images/marker-icon.png",
    iconSize: [16, 29],
    iconAnchor: [8, 29]
});

export function Map({ className, center = [18.483402, -69.929611], markers, zoom = 7 }: MapProps) {
    const isClient = useIsClient();
    return (<>
        {isClient ? (
            <MapContainer className={className} center={center} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers && markers.map(({ id, position, popup }) => position && (
                    <Marker icon={customMarker} key={id} position={position}>
                        {popup && (
                            <Popup className='bg-white/20'>{popup}</Popup>
                        )}
                    </Marker>
                ))}
            </MapContainer>
        ) : "Cargando..."}
    </>)
}