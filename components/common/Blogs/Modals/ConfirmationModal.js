import { Modals } from '.';

const ConfirmationModal = ({ isOpen, onClose, onDelete }) => {
  const handleConfirm = () => {
    // Lakukan aksi penghapusan di sini
    onDelete();
    onClose();
  };

  return (
    <Modals isOpen={isOpen} onClose={onClose} title="Confirm changes?" size='medium'>
      <div className="text-center">
        <p>Are you sure you want to edit this item?</p>
        <div className="flex justify-center mt-4">
          <button
            type="button"
            onClick={handleConfirm}
            className="px-4 py-2 text-white bg-green-500 rounded-md"
          >
            Confirm
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-white bg-blueGray-400 rounded-md ml-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modals>
  );
};

export default ConfirmationModal;
