import Board from "./Board";
import { managersSoftland, managersNewRequirements, managersAppAndWeb, managersITSupport, managersIndicatorSupport } from "../../api/predefinedData/boardsData";

const BoardsContent = () => {
    return (
        <div className='flex w-[95%] h-full justify-between'>
            <Board name={'Softland'} managers={managersSoftland} navigate={'softland'} />
            <Board name={'Nuevos Requerimientos'} managers={managersNewRequirements} navigate={'new_requirements'} />
            <Board name={'Apps/Páginas web'} managers={managersAppAndWeb} navigate={'apps_web'} />
            <Board name={'Soporte IT'} managers={managersITSupport} navigate={'it_support'} />
            <Board name={'Soporte Tableros / Indicadores'} managers={managersIndicatorSupport} navigate={'indicators_support'} />
        </div>
    )
}

export default BoardsContent;