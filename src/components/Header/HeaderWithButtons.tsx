import React from 'react';
import { useThemeContext } from '../../theme/ThemeContext';
import { ArrowBack, Edit, ExpandMore, Tune } from '@mui/icons-material';

interface HeaderProps {
    title: string;
}

const HeaderWithButtons: React.FC<HeaderProps> = ({ title }) => {
    const { mode } = useThemeContext();

    return (
        <header className="flex flex-row w-[95%] justify-between mt-2 mb-4 border-b-gray-600">
            <div className="flex flex-row w-full items-center py-5">
                <button className='flex flex-row items-center gap-2'>
                    <ArrowBack />
                    <p>Volver</p>
                </button>
                <button
                    className={`flex flex-row items-center gap-1`}
                >
                    <p className='text-3xl font-titilliumWeb'>Sistemas - {title}</p>
                    <ExpandMore />
                </button>
            </div>

            <div className="flex flex-row items-center gap-4 border">
                <input
                    className='rouneded bg-[#3F8EC8]'
                    type="text"
                />

                <button className='flex flex-row items-center gap-1 bg-[#3F8EC8]'>
                    <Edit />
                    <p className='text-white'>Nuevo ticket</p>
                </button>

                <button
                    className={`flex flex-row items-center gap-1 bg-[#3F8EC8]`}
                >
                    <Tune />
                    <p className='text-white'>Filtrar</p>
                </button>
            </div>
        </header>
    )
}

export default HeaderWithButtons;