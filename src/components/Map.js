// styled
import styled from 'styled-components';

// google maps
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {


  const GOOGLE_MAPS = process.env.REACT_APP_GOOGLE_MAPS_KEY;

    const containerStyle = {
        width: '400px',
        height: '400px'
      };
      
      const center = {
        lat: 40.71455, 
        lng: -74.00712
      };

      const position = {
        lat: 40.71455, 
        lng: -74.00712
      }

      const onLoad = marker => {
        console.log('marker: ', marker)
      }
  return (
    <StyledMap>
        <LoadScript
            googleMapsApiKey={GOOGLE_MAPS}
        >
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
        >
            {
            <Marker
            onLoad={onLoad}
            position={position}
            />
            }
        </GoogleMap>
        </LoadScript>
    </StyledMap>
  )
}

const StyledMap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`;

export default Map;