import { useState } from "react";
import { MyReactModal } from "./MyReactModal";

function App() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOnCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div>
        <button onClick={() => setOpenModal(!openModal)}>Open Modal</button>
        <MyReactModal visible={openModal} onClose={handleOnCloseModal} />
      </div>
    </>
  );
}

export default App;
