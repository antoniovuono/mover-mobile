import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import AppStackRoutes from "./stack.routes";

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <AppStackRoutes />
        </NavigationContainer>
    );
};

export default Routes;
