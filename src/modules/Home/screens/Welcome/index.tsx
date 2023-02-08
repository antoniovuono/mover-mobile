import React from "react";
import MapView from "react-native-maps";

import { Container } from "./styles";
import StartRide from "../components/StartRide";

const Welcome: React.FC = () => {
    return (
        <Container>
            <MapView
                style={{ width: "100%", height: "100%" }}
                initialRegion={{
                    latitude: -23.6013242,
                    longitude: -48.0518921,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />

            <StartRide />
        </Container>
    );
};

export default Welcome;
