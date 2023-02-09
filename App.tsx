import {
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_900Black,
    Roboto_700Bold,
    useFonts,
} from "@expo-google-fonts/roboto";
import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";
import Welcome from "./src/modules/Home/screens/Welcome";

const App: React.FC = () => {
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_900Black,
        Roboto_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            <Welcome />
        </ThemeProvider>
    );
};

export default App;
