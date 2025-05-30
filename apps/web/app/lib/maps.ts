export function extractCoordinatesFromGoogleMapsUrl(url: string) {

    if (url) {
        var atIndex = url.indexOf('@');
        let coordinates: [number, number];

        if (atIndex != -1) {
            var coordinatesPart = url.substring(atIndex + 1);
            var parts = coordinatesPart.split(',');

            if (parts.length >= 2) {
                coordinates = [Number(parts[0]), Number(parts[1])];
                return coordinates;
            }
        }
        else {
            var parts = url.split('/')[5].split(',');

            if (parts.length >= 2) {
                coordinates = [Number(parts[0]), Number(parts[1])];
                return coordinates;
            }
        }
    }

    return null;
}
