import { extendTheme } from "@chakra-ui/react";

const colors = {
    primary: {
        50: '#e7f4fe',
        100: '#c5daed',
        200: '#a1c1de',
        300: '#7ca8d1',
        400: '#588fc3',
        500: '#4076aa',
        600: '#305b84',
        700: '#22415f',
        800: '#12273a',
        900: '#010e17',
    },
    primary_light: {
        50: '#dbf9ff',
        100: '#afe7ff',
        200: '#80d6ff',
        300: '#51c5fe',
        400: '#2bb5fc',
        500: '#1b9be3',
        600: '#0d79b2',
        700: '#005680',
        800: '#00344f',
        900: '#00121f',
    },
    primary_lighter: {
        50: '#dff8ff',
        100: '#bce4f4',
        200: '#95d0e9',
        300: '#6dbdde',
        400: '#48aad4',
        500: '#2f90ba',
        600: '#217092',
        700: '#135069',
        800: '#033141',
        900: '#00121b',    
    },
    primary_lightest: {
        50: '#dcf7ff',
        100: '#b4e2fc',
        200: '#89cdf3',
        300: '#5db9ed',
        400: '#32a4e6',
        500: '#198bcd',
        600: '#0b6ca0',
        700: '#014d74',
        800: '#002f48',
        900: '#00101e',
    },
    primary_white: {
        50: '#eff5f6',
        100: '#d5dfe1',
        200: '#b8cbcd',
        300: '#9ab8bb',
        400: '#7ca3a7',
        500: '#64898e',
        600: '#4e6b6e',
        700: '#394c4e',
        800: '#222e2f',
        900: '#091010',
          
    },
    initialColorMode: "light",
    useSystemColorMode: true,
    background: "primary_lightest.100",
};

const customTheme = extendTheme({ colors });

export default customTheme;
