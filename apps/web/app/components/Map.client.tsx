import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map() {
    return (
        <MapContainer center={[18.470534, -69.900341]} zoom={13} scrollWheelZoom={false}>
            <Marker position={[18.470534, -69.900341]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}