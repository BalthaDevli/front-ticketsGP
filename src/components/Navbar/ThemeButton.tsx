import React from "react";
import { LightMode, DarkMode } from '@mui/icons-material';
import { useThemeContext } from "../../theme/ThemeContext";

interface ButtonProps {
    isMenuOpen: boolean;
}

const ThemeButton: React.FC<ButtonProps> = ({ isMenuOpen }) => {
    const { mode, toggleColorMode } = useThemeContext();

    // const [checked, setChecked] = useState(mode === 'light');

    return (
        <div>
            {isMenuOpen ? (
                <div className={`flex flex-row justify-center items-center p-2 ${mode === 'light' ? 'bg-[#E4E7EC]' : 'bg-[#344051]'} rounded-lg transition-all`}>
                    <button
                        className={`${!isMenuOpen && mode !== 'light' && 'hidden'} flex flex-row w-[50%] justify-center items-center px-5 py-3 gap-3 ${isMenuOpen && mode === 'light' && 'bg-[#C6E5FB]'} rounded-lg transition-all`}
                        onClick={() => {if(mode !== 'light') toggleColorMode()}}
                    >
                        <LightMode color={mode === 'light' ? "info" : 'inherit'} />
                        <p className={`${!isMenuOpen && 'hidden'} font-medium ${mode === 'light' && 'text-[#0288d1]'}`}>Claro</p>
                    </button>

                    <button
                        className={`${!isMenuOpen && mode === 'light' && 'hidden'} flex flex-row w-[50%] justify-center items-center px-5 py-3 gap-3 ${isMenuOpen && mode === 'dark' && 'bg-[#141C25]'} rounded-lg transition-all`}
                        onClick={() => {if(mode === 'light') toggleColorMode()}}
                    >
                        <DarkMode color={mode !== 'light' ? "info" : 'inherit'} />
                        <p className={`${!isMenuOpen && 'hidden'} font-medium ${mode !== 'light' && 'text-[#0288d1]'}`}>Oscuro</p>
                    </button>
                </div>
            ) : (
                <button className={`p-4 ${mode === 'light' ? 'bg-[#E4E7EC]' : 'bg-[#344051]'} rounded-lg transition-all`} onClick={() => toggleColorMode()}>
                    {mode === 'light' ? (
                        <LightMode color={mode === 'light' ? "info" : 'inherit'} />
                    ) : (
                        <DarkMode color={mode !== 'light' ? "info" : 'inherit'} />
                    )}
                </button>
            )}
        </div>
    )
}

export default ThemeButton;