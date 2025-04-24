export function cartesianFromLatLng(
  lat: number,
  lon: number,
  radius: number
): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = (radius * Math.sin(phi) * Math.sin(theta));
  const y = (radius * Math.cos(phi));

  return [x, y, z] as const;
}

export function latLngFromCartesian(
  x: number,
  y: number,
  z: number,
  radius: number
) {
  // Recover spherical coordinates
  const phi = Math.acos(y / radius); // angle from the Y-axis
  const theta = Math.atan2(z, -x); // angle from the X-axis (note the negation of x)

  // Convert to lat/lon
  const lat = 90 - (phi * 180) / Math.PI;
  const lon = (theta * 180) / Math.PI - 180;

  return [lat, lon];
}

export function cartesianFromLatLngRad(lat: number, lng: number, radius: number): { x: number; y: number; z: number } {
  const latRad = (lat * Math.PI) / 180;
  const lngRad = (lng * Math.PI) / 180;

  const x = radius * Math.cos(latRad) * Math.cos(lngRad);
  const y = radius * Math.cos(latRad) * Math.sin(lngRad);
  const z = radius * Math.sin(latRad);

  return { x, y, z };
}

export function getCoordinatesOn3DCircle(
  currentAngle: number,
  increment: number,
  radius: number = 1,
  zStep: number = 0,
  circleSize: number = 360
): { x: number; y: number; z: number } {
  const angle = (currentAngle + increment) % circleSize;
  const angleInRadians = (angle * Math.PI) / 180;

  const x = radius * Math.cos(angleInRadians);
  const y = radius * Math.sin(angleInRadians);
  const z = zStep; // Change this dynamically if you're stepping up/down in z

  return { x, y, z };
}

export function cartesianToLatLngRadius(x: number, y: number, z: number): {
  lat: number;
  lng: number;
  radius: number;
} {
  const radius = Math.sqrt(x * x + y * y + z * z);
  const lat = Math.asin(z / radius) * (180 / Math.PI); // in degrees
  const lng = Math.atan2(y, x) * (180 / Math.PI); // in degrees

  return { lat, lng, radius };
}
