import React from "react";
import 'react-slideshow-image/dist/styles.css';
import { IoMdClose } from "react-icons/io";

const NewReviewModal = (props) => {


  return (
    <div class=" bg-white w-8/12 h-5/6 border-2 border-blue-600 rounded-xl flex flex-col">
        <div className="my-6 mx-10 flex justify-end items-center">
        <IoMdClose onClick={props.onClose} className="hover:cursor-pointer" size={50}/>
        </div>

    </div>
  );
}

export default NewReviewModal;
