import { IThemeProviderProps } from "@interfaces/index";
import { render } from "@testing-library/react-native";
import theme from "@theme/theme";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import SplashScreen from "../index";
import { Title, SubTitle, SubTitleCircle } from "../styles";

const Provider: React.FC<IThemeProviderProps> = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe("Splash Screen", () => {
    describe("Splash Screen texts", () => {
        it("Should be able to render a splash screen correctly title", () => {
            const { findByText } = render(<SplashScreen />, {
                wrapper: Provider,
            });

            expect(findByText(/mover/i)).toBeTruthy();
        });

        it("Should be able to render a mobility correctly  subtitle", () => {
            const { findByText } = render(<SplashScreen />, {
                wrapper: Provider,
            });

            expect(findByText(/mobilidade/i)).toBeTruthy();
        });

        it("Should be able to render a security correctly  subtitle", () => {
            const { findByText } = render(<SplashScreen />, {
                wrapper: Provider,
            });

            expect(findByText(/segurança/i)).toBeTruthy();
        });

        it("Should be able to render a agility subtitle", () => {
            const { findByText } = render(<SplashScreen />, {
                wrapper: Provider,
            });

            expect(findByText(/agilidade/i)).toBeTruthy();
        });
    });

    describe("Splash screen textx layouts", () => {
        it("Should be able to render a title with a correctly theme color", () => {
            const { getByTestId } = render(
                <Title testID="title">mover</Title>,
                {
                    wrapper: Provider,
                }
            );

            expect(getByTestId(/title/).props.style[0].color).toBe(
                theme.colors.background_white
            );
        });

        it("Should be able to render a title with a correctly theme font-family", () => {
            const { getByTestId } = render(
                <Title testID="title">mover</Title>,
                {
                    wrapper: Provider,
                }
            );

            expect(getByTestId(/title/).props.style[0].fontFamily).toBe(
                theme.fonts.ROBOTO_BLACK
            );
        });

        it("Should be able to render a subtitle with a correctly theme color", () => {
            const { getByTestId } = render(
                <SubTitle testID="subtitle">mover</SubTitle>,
                {
                    wrapper: Provider,
                }
            );

            expect(getByTestId(/subtitle/).props.style[0].color).toBe(
                theme.colors.background_white
            );
        });

        it("Should be able to render a subtitle with a correctly theme font-family", () => {
            const { getByTestId } = render(
                <SubTitle testID="subtitle">mover</SubTitle>,
                {
                    wrapper: Provider,
                }
            );

            expect(getByTestId(/subtitle/).props.style[0].fontFamily).toBe(
                theme.fonts.ROBOTO_REGULAR
            );
        });
    });

    it("Should be able to render a circle separator", () => {
        const { getByTestId } = render(<SubTitleCircle testID="circle" />, {
            wrapper: Provider,
        });

        expect(getByTestId(/circle/).props.style[0].width).toBe(10);
        expect(getByTestId(/circle/).props.style[0].height).toBe(10);
        expect(getByTestId(/circle/).props.style[0].borderRadius).toBe(50);
    });
});
