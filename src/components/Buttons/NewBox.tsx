import { useState } from "react";
import NewBoxModal from "./NewBoxModal";

const NewBox = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpenModal(true)}
        title="Add a new box"
        className="m-1 inline-flex items-center rounded-lg border border-gray-300 bg-gray-50 px-5 py-2.5 text-center text-sm font-medium hover:bg-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
      <NewBoxModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default NewBox;