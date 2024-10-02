import React from 'react';
import useStore from '../../zustand/store';
import { useThemeContext } from '../../theme/ThemeContext';

interface HeaderProps {
    title: string;
    secondTitle: string;
    isRefreshing: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>> | any;
}

const Header: React.FC<HeaderProps> = ({ title, secondTitle, isRefreshing, setModalVisible }) => {
    const { mode } = useThemeContext();

    const { index, setIndex } = useStore();

    return (
        <header className="flex flex-col w-[95%] mt-2 mb-4 border-b-gray-600">
            <div className="flex w-full justify-between items-center py-5">
                <div className='flex flex-row items-center gap-5'>
                    <button
                        className={`text-3xl font-titilliumWeb ${index === 1 && title === 'Seguimiento de viajes' && 'underline'}`}
                        onClick={() => { if (index !== 1) setIndex(1) }}
                    >
                        {title}
                    </button>
                    {secondTitle &&
                        <>
                            <p>|</p>
                            <button className={`text-3xl font-titilliumWeb ${index === 2 && 'underline'}`} onClick={() => { if (index !== 2) setIndex(2) }}>{secondTitle}</button>
                        </>
                    }
                </div>

                {index === 2 && secondTitle === 'Historico' && (
                    <div className='flex flex-row items-center gap-10'>
                        <button
                            className='w-48 h-10 px-2 bg-primary border border-primary rounded-lg text-white'
                            onClick={() => setModalVisible(true)}
                        >
                            + AÑADIR VIAJE
                        </button>
                    </div>
                )}
            </div>

            {isRefreshing ? (
                <div className="w-full h-[3px] rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 animate-pulse-fastest" />
            ) : (
                <div className={`w-full h-[3px] rounded-full ${mode === 'light' ? 'bg-black' : 'bg-white'}`} />
            )}
        </header>
    )
}

export default Header;