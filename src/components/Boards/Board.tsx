import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../../theme/ThemeContext';
import { backgroundSoftland, backgroundNewRequirements, backgroundAppAndWeb, backgroundITSupport, backgroundIndicatorSupport } from '../../assets/Boards';

type BoardName = 'Softland' | 'Nuevos Requerimientos' | 'Apps/Páginas web' | 'Soporte IT' | 'Soporte Tableros / Indicadores';

interface BoardProps {
    name: BoardName;
    managers: any;
    navigate: string;
}

const Board: React.FC<BoardProps> = ({ name, managers, navigate }) => {
    const navigation = useNavigate();
    const { mode } = useThemeContext();

    const navigationTo = () => {
        navigation(`/boards/${navigate}`)
    };

    const imageToRender: Record<BoardName, string> = {
        'Softland': backgroundSoftland,
        'Nuevos Requerimientos': backgroundNewRequirements,
        'Apps/Páginas web': backgroundAppAndWeb,
        'Soporte IT': backgroundITSupport,
        'Soporte Tableros / Indicadores': backgroundIndicatorSupport,
    };

    return (
        <div className={`relative flex flex-col w-[19%] h-[80vh] z-10 p-2 rounded-xl backdrop-blur-xl ${mode === 'light' ? 'bg-[#f2f4f7]' : 'bg-[#1A232D]'} shadow-lg cursor-pointer overflow-hidden`} onClick={navigationTo}>
            <img src={imageToRender[name]} alt='softland logo' className='absolute top-20 right-5 scale-[140%]' />

            <p className={`flex h-[12%] z-20 justify-center items-center px-4 mb-4 border-b-4 border-white text-center text-xl font-semibold`}>{name}</p>

            <div className={`flex flex-col h-[60%] z-20 p-2 mb-4 rounded-xl ${mode === 'light' ? 'bg-white/30' : 'bg-[#121212]/30'} shadow-lg text-xs font-semibold`}>
                <p>Ingresa un Ticket acá si:</p>
            </div>

            <div className={`flex flex-col h-[21.5%] z-20 p-2 rounded-xl ${mode === 'light' ? 'bg-white/30' : 'bg-[#121212]/30'} shadow-lg text-xs font-semibold`}>
                <p>Encargados</p>

                <ul>
                    {managers.length > 0 && managers.map((manager: string, index: any) => (
                        <li key={index}>{manager}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Board;