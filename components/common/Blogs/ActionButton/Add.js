import React from 'react';

const Add = ({handleAdd= () => {}}) => {
  return (
    <>
      <button
        className="w-24 bg-blue-400 text-white active:bg-blue-600 text-xs font-bold uppercase py-2 rounded-md outline-none focus:outline-none  ease-linear transition-all duration-150"
        type="button"
        onClick={handleAdd}
      >
        <i
          className={
            "fas fa-plus mr-2 text-sm " 
          }
        ></i>{" "}
        Add
      </button>
    </>
  );
};

export default Add;
