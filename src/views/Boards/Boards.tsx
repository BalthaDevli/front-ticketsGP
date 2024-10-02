import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import BoardsContent from '../../components/Boards/BoardsContent';

const Boards = () => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  return (
    <div className="flex flex-col min-h-screen items-center ml-24 overflow-hidden">
      <Header title={'Tableros Área Sistemas'} secondTitle={''} isRefreshing={isRefreshing} setModalVisible={null} />

      <BoardsContent />
    </div>
  )
}

export default Boards;