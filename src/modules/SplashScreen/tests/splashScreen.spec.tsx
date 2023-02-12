import { IThemeProviderProps } from "@interfaces/index";
import { render, screen } from "@testing-library/react-native";
import theme from "@theme/theme";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import SplashScreen from "../index";

const Provider: React.FC<IThemeProviderProps> = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe("Splash Screen", () => {
    it("Should be able to render all splash screen texts", () => {
        const { findByText } = render(<SplashScreen />, { wrapper: Provider });

        expect(findByText(/mover/i)).toBeTruthy();
        expect(findByText(/mobilidade/i)).toBeTruthy();
        expect(findByText(/segurança/i)).toBeTruthy();
        expect(findByText(/agilidade/i)).toBeTruthy();
    });
});
