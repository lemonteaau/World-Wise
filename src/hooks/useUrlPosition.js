import { useSearchParams } from "react-router-dom";
//get mapLat, mapLng from URL Params

export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return [lat, lng];
}
