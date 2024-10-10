import { CleaningServicesOutlined } from "@mui/icons-material"

const DropdownFilters = () => {
  return (
    <div className="flex flex-col">
      <p>Filtrar por:</p>

      <button className="flex flex-row items-center p-2 rounded bg-primary">
        <CleaningServicesOutlined />
        <p className="text-sm">Limpiar filtros</p>
      </button>

      <div className="flex flex-col px-1 py-2 items-center">
        <label htmlFor="">Proyecto</label>
        <select className="w-full" name="" id="">
          <option value="">Apps / Páginas Web</option>
        </select>
      </div>

      <div className="flex flex-col px-1 py-2 items-center">
        <label htmlFor="">Epica</label>
        <select className="w-full" name="" id="">
          <option value="">Choferes</option>
        </select>
      </div>

      <div className="flex flex-col px-1 py-2 items-center">
        <label htmlFor="">Creación: Entre fechas</label>
        <input type="date" />
        <input type="date" />
      </div>

      <div className="flex flex-col px-1 py-2 items-center">
        <label htmlFor="">Tipo de tarea</label>
        <select className="w-full" name="" id="">
          <option value="">Tarea</option>
        </select>
      </div>

      <div className="flex flex-col px-1 py-2 items-center">
        <label htmlFor="">Area Solicitante</label>
        <select className="w-full" name="" id="">
          <option value="">Mi área</option>
        </select>
      </div>
    </div>
  )
}

export default DropdownFilters
