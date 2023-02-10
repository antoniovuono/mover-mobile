import { render, fireEvent } from "@testing-library/react-native";
import theme from "@theme/theme";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import PrimaryButton from "../index";

interface IProviderProps {
    children: React.ReactNode;
}

const Provider: React.FC<IProviderProps> = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe("Primary Button", () => {
    it("Should be able to render a button", () => {
        const { getByTestId } = render(
            <PrimaryButton title="Solicitar um motorista" onPress={() => {}} />,
            {
                wrapper: Provider,
            }
        );

        expect(getByTestId(/primaryButton/)).toBeTruthy();
    });

    it("Should be able to click on the primary button", () => {
        const handleClick = jest.fn();

        const { getByTestId } = render(
            <PrimaryButton
                title="Solicitar um motorista"
                onPress={handleClick}
            />,
            {
                wrapper: Provider,
            }
        );

        fireEvent.press(getByTestId(/primaryButton/));

        expect(handleClick).toHaveBeenCalled();
    });
});
