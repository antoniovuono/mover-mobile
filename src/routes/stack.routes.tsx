import Welcome from "@modules/Home/Welcome";
import SplashScreen from "@modules/SplashScreen";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

const { Navigator, Screen } = createStackNavigator();

const AppStackRoutes: React.FC = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="SplashScreen" component={SplashScreen} />
            <Screen name="Home" component={Welcome} />
        </Navigator>
    );
};

export default AppStackRoutes;
