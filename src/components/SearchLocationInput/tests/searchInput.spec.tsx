import { IThemeProviderProps } from "@interfaces/index";
import { fireEvent, render } from "@testing-library/react-native";
import theme from "@theme/theme";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import SearchLocationInput from "../index";

const Provider: React.FC<IThemeProviderProps> = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
describe("Search Input", () => {
    it("Should be able to render a search input component", () => {
        const { getByTestId } = render(
            <SearchLocationInput
                placeholder="Local de embarque"
                testID="searchInput"
            />,
            { wrapper: Provider }
        );

        expect(getByTestId(/searchInput/)).toBeTruthy();
    });

    it("Should be able to render a correctly placeholder", () => {
        const { getByPlaceholderText } = render(
            <SearchLocationInput
                placeholder="Local de embarque"
                testID="searchInput"
            />,
            { wrapper: Provider }
        );

        expect(getByPlaceholderText(/Local de embarque/)).toBeTruthy();
    });

    it("Should be able to enter a value to input", () => {
        const { getByTestId } = render(
            <SearchLocationInput
                placeholder="Local de embarque"
                testID="searchInput"
                value="Rua José Calazans"
            />,
            { wrapper: Provider }
        );

        expect(getByTestId(/searchInput/).props).toHaveProperty("value");
        expect(getByTestId(/searchInput/).props.value).toEqual(
            "Rua José Calazans"
        );
    });

    it("Should be able to render a correclty background theme color", () => {
        const { getByTestId } = render(
            <SearchLocationInput
                placeholder="Local de embarque"
                testID="searchInput"
                value="Rua José Calazans"
            />,
            { wrapper: Provider }
        );

        expect(getByTestId(/searchInput/).props.style[0].backgroundColor).toBe(
            theme.colors.input_blue
        );
    });

    it("Should be able to render a correclty theme font family", () => {
        const { getByTestId } = render(
            <SearchLocationInput
                placeholder="Local de embarque"
                testID="searchInput"
                value="Rua José Calazans"
            />,
            { wrapper: Provider }
        );

        expect(getByTestId(/searchInput/).props.style[0].fontFamily).toBe(
            theme.fonts.ROBOTO_REGULAR
        );
    });

    it("Should be able user interact with the search input and add a value", () => {
        const onChange = jest.fn();

        const { getByTestId } = render(
            <SearchLocationInput
                placeholder="Local de embarque"
                testID="searchInput"
                onChangeText={onChange}
            />,
            { wrapper: Provider }
        );

        const searchInput = getByTestId(/searchInput/);

        fireEvent.changeText(searchInput, "teste");

        expect(onChange).toHaveBeenCalledWith("teste");
    });
});
