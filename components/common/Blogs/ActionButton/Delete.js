import React from 'react';

const Delete = (handleDelete) => {
  return (
    <>
      <button
        className="w-full bg-red-500 text-white active:bg-red-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={ handleDelete }
      >
        <i
          className={
            "fas fa-eye mr-2 text-sm " 
          }
        ></i>{" "}
        Delete
      </button>
    </>
  );
};

export default Delete;
