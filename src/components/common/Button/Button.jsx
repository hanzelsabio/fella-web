import React from "react";

function Button() {
  return (
    <button
      onClick={closeModal}
      className="bg-black text-white py-2 px-5 hover:bg-gray-800 transition"
      style={{ cursor: "pointer" }}
    ></button>
  );
}

export default Button;
