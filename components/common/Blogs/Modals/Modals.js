import { useEffect, useRef, useState } from 'react';
import cx from 'classnames';

import styles from './Modals.module.scss';
import { useOutsideClick } from 'context/useOutsideClick';

const Modals = ({ isOpen, onClose, title, children, size = 'small' }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const modalRef = useRef(null);
  useOutsideClick(modalRef, onClose);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && (
        <div className={cx('fixed inset-0 flex items-center justify-center z-50', styles.modals__container)}>
          <div className={cx('fixed inset-0 bg-black opacity-50', styles.modals__background)} />
          <div 
            className={cx('bg-white rounded shadow-lg relative w-3/4 mx-4', {
              'md:w-1/4': size === 'small',
              'md:w-1/2 lg:w-1/3': size === 'medium',
              'md:w-10/12': size === 'large',
            })}
            ref={modalRef}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-medium">{title}</h2>
              <button
                className={cx("text-gray-500 hover:text-gray-700", styles.modals__buttonClose)}
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="p-4">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modals;
