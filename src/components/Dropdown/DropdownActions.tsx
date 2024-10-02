import React from 'react';

const DropdownActions = () => {
  return (
    <div className='flex flex-col'>
        <p>Acciones posibles</p>

        <button className='flex flex-row items-center gap-3'>
            <p>Nuevo ticket</p>
        </button>

        <button className='flex flex-row items-center gap-3'>
            <p>Reporte horario</p>
        </button>

        <button className='flex flex-row items-center gap-3'>
            <p>Cronograma  de temas (GANTT)</p>
        </button>

        <button className='flex flex-row items-center gap-3'>
            <p>Calendario  de temas</p>
        </button>
    </div>
  )
}

export default DropdownActions;