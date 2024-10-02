import Header from '../../components/Header/Header';
import BoardsContent from '../../components/Boards/BoardsContent';

const Boards = () => {
  return (
    <div className="flex flex-col min-h-screen items-center ml-24 overflow-hidden">
      <Header title={'Tableros Área Sistemas'} />

      <BoardsContent />
    </div>
  )
}

export default Boards;