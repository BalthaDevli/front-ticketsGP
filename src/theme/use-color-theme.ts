import { useState, useEffect, useMemo } from "react";
import { createTheme, PaletteMode } from "@mui/material";
import theme from './theme';

export const useColorTheme = () => {
    const [mode, setMode] = useState<PaletteMode>(() => {
        const storedMode = localStorage.getItem('colorMode');
        return storedMode ? (storedMode as PaletteMode) : 'light';
    });

    const toggleColorMode = () => {
        setMode((prevMode) => {
            const newMode = prevMode === 'light' ? 'dark' : 'light';
            localStorage.setItem('colorMode', newMode); // Guarda el nuevo modo en el localStorage
            return newMode;
        });
    };

    useEffect(() => {
        // Si el modo cambia por algún motivo, se asegura de que se guarde en el localStorage
        localStorage.setItem('colorMode', mode);
    }, [mode]);


    const modifiedTheme = useMemo(
        () =>
            createTheme({
                ...theme,
                palette: {
                    ...theme.palette,
                    mode,
                },
            }),
        [mode]
    )

    return {
        theme: modifiedTheme,
        mode,
        toggleColorMode,
    }
};