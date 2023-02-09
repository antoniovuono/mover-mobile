import {
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_900Black,
    Roboto_700Bold,
    useFonts,
} from "@expo-google-fonts/roboto";
import Welcome from "@modules/Home/Welcome";
import theme from "@theme/theme";
import React from "react";
import { ThemeProvider } from "styled-components";

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
