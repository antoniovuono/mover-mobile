import { IThemeProviderProps } from "@interfaces/index";
import { render } from "@testing-library/react-native";
import theme from "@theme/theme";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import SearchLocationInput from "../index";

const Provider: React.FC<IThemeProviderProps> = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
describe("Search Input", () => {
    it("Should be able to render a search input component", () => {
        const { debug } = render(
            <SearchLocationInput placeholder="Local de embarque" />,
            { wrapper: Provider }
        );

        debug();
    });
});
