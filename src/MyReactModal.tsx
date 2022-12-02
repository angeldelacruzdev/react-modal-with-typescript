export const MyReactModal = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: Function;
}) => {
  const handleCloseModal = (e: any) => {
    if (e.target.id === "container") onClose();
  };

  const handleCloseButton = () => {
    onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleCloseModal}
      className="fixed inset-0 h-full w-full bg-black bg-opacity-30  backdrop-blur-sm flex justify-center items-center transition-all"
    >
      <div className="bg-white  rounded w-2/3 z-50">
        <div className="p-2 bg-slate-900 rounded-tl rounded-tr">
          <h2 className="text-white">Modal Title</h2>
        </div>
        <div className="p-2">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus, inventore sunt. Porro libero dignissimos laudantium
            magni maiores, doloribus laboriosam eaque tempora reprehenderit
            quae, ipsum nemo sint voluptatum provident similique ut.
          </p>
        </div>

        <div className="bg-gray-200 p-2 rounded-br rounded-bl flex justify-end">
          <button
            onClick={handleCloseButton}
            className="h-10 flex items-center pr-4 pl-4 bg-red-600 rounded text-white w-32 justify-center"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};
