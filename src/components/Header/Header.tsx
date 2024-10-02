import React from 'react';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className="flex flex-col w-[95%] mt-2 mb-4 border-b-gray-600">
            <div className="flex w-full justify-between items-center py-5">
                <div className='flex flex-row items-center gap-5'>
                    <button className={`text-3xl font-titilliumWeb `} >
                        {title}
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;