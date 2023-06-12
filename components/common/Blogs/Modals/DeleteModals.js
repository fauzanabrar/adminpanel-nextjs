import { Modals } from '.';

const DeleteModal = ({ isOpen, onClose, onDelete }) => {
  const handleDelete = () => {
    // Lakukan aksi penghapusan di sini
    onDelete();
    onClose();
  };

  return (
    <Modals isOpen={isOpen} onClose={onClose} title="Delete Confirmation" size='medium'>
      <div className="text-center">
        <p>Are you sure you want to delete this item?</p>
        <div className="flex justify-center mt-4">
          <button
            type="button"
            onClick={handleDelete}
            className="px-4 py-2 text-white bg-red-500 rounded-md"
          >
            Delete
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

export default DeleteModal;
