import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import logo from '/logo.svg'
import { Menu, ChevronLeft, Assignment, Dashboard, FormatListBulleted, InsertDriveFileOutlined, AccountTree, Logout } from '@mui/icons-material';
import { NavLink, useLocation } from 'react-router-dom';
import ThemeButton from './ThemeButton';
import { useThemeContext } from '../../theme/ThemeContext';

const Navbar = () => {
  const { logOut } = useContext(AuthContext);
  const { mode } = useThemeContext();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getActiveClass = (path: string) => location.pathname === path ? 'border-l-4 border-active' : '';

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-screen h-screen ${!isMenuOpen && 'hidden'} z-30 bg-overlay transition-all`}
        onClick={() => setIsMenuOpen(false)}
      />

      <nav className={`fixed flex flex-col ${isMenuOpen ? 'w-[20%]' : 'w-[5%]'} h-screen z-40 pt-9 pb-5 border-black ${mode === 'light' ? 'bg-white' : 'bg-[#121212]'} shadow-xl transition-all`}>
        <div className='flex flex-col h-screen justify-between'>
          <div className={`flex flex-col gap-5`}>
            <button className={`${!isMenuOpen && 'hidden'} absolute top-10 right-6`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <ChevronLeft fontSize='large' />
            </button>

            <div className={`flex flex-col ${!isMenuOpen && 'items-center'} gap-5`}>
              <NavLink className={`flex flex-row items-center ${isMenuOpen && 'px-5'} gap-5`} to={'/boards'}>
                <img src={logo} alt='Logo Grupo Penna' className="w-5 h-auto" />
                <p className={`${!isMenuOpen && 'hidden'} pt-2 text-xl font-semibold`}>GRUPO PENNA</p>
              </NavLink>

              <button className={`${isMenuOpen && 'hidden'} p-5`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu />
              </button>
            </div>

            <div className={`flex flex-col px-2.5 ${!isMenuOpen ? 'items-center m-0' : 'mt-20'} ${'gap-2'}`}>
              <NavLink className={`flex flex-row ${!isMenuOpen && 'w-auto justify-center'} items-center p-4 gap-5 ${getActiveClass('/tasks')} ${mode === 'light' ? 'hover:bg-[#E4E7EC]' : 'hover:bg-[#344051]'} rounded-lg transition-all`} to={'/tasks'} onClick={() => setIsMenuOpen(false)}>
                <Assignment color='inherit' fontSize={'medium'} />
                <p className={`${!isMenuOpen && 'hidden'}`}>Mis tareas</p>
              </NavLink>

              <NavLink className={`flex flex-row ${!isMenuOpen && 'w-auto justify-center'} items-center p-4 gap-5 ${getActiveClass('/boards')} ${mode === 'light' ? 'hover:bg-[#E4E7EC]' : 'hover:bg-[#344051]'} rounded-lg transition-all`} to={'/boards'} onClick={() => setIsMenuOpen(false)}>
                <Dashboard color='inherit' fontSize={'medium'} />
                <p className={`${!isMenuOpen && 'hidden'}`}>Tickets / Sistemas</p>
              </NavLink>

              <NavLink className={`flex flex-row ${!isMenuOpen && 'w-auto justify-center'} items-center p-4 gap-5 ${getActiveClass('/objectives')} ${mode === 'light' ? 'hover:bg-[#E4E7EC]' : 'hover:bg-[#344051]'} rounded-lg transition-all`} to={'/objectives'} onClick={() => setIsMenuOpen(false)}>
                <FormatListBulleted color='inherit' fontSize={'medium'} />
                <p className={`${!isMenuOpen && 'hidden'}`}>Objetivos</p>
              </NavLink>

              <NavLink className={`flex flex-row ${!isMenuOpen && 'w-auto justify-center'} items-center p-4 gap-5 ${getActiveClass('/documentation')} ${mode === 'light' ? 'hover:bg-[#E4E7EC]' : 'hover:bg-[#344051]'} rounded-lg transition-all`} to={'/documentation'} onClick={() => setIsMenuOpen(false)}>
                <InsertDriveFileOutlined color='inherit' fontSize={'medium'} />
                <p className={`${!isMenuOpen && 'hidden'}`}>Documentación</p>
              </NavLink>

              <NavLink className={`flex flex-row ${!isMenuOpen && 'w-auto justify-center'} items-center p-4 gap-5 ${getActiveClass('/chart')} ${mode === 'light' ? 'hover:bg-[#E4E7EC]' : 'hover:bg-[#344051]'} rounded-lg transition-all`} to={'/chart'} onClick={() => setIsMenuOpen(false)}>
                <AccountTree color='inherit' fontSize={'medium'} />
                <p className={`${!isMenuOpen && 'hidden'}`}>Organigrama</p>
              </NavLink>
            </div>
          </div>

          <div className='flex flex-col items-center gap-10'>
            <ThemeButton isMenuOpen={isMenuOpen} />

            <button className={`flex flex-row ${isMenuOpen && 'w-[255px]'} justify-center items-center p-3 gap-5 rounded-lg hover:bg-red-600 hover:text-white transition-all`} onClick={logOut}>
              <Logout color={'inherit'} />
              <p className={`${!isMenuOpen && 'hidden'} text-xl font-medium`}>Cerrar sesión</p>
            </button>
          </div>
        </div>
      </nav >
    </>
  )
}

export default Navbar;