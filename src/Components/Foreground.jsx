import React, { useState } from "react";
import Cards from "./Cards";
const Foreground = () => {


  const data = [
    {
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle:"Download Now ", tagColor: "green" },
    },
    {
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle:"Download Now ", tagColor: "blue" },
    },
    {
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle:"Download Now ", tagColor: "green" },
    }
  ];

  return (
    <div  className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5 ">
      {data.map((item, index)=>(
        <Cards data ={item}  /> 
      ))} 
    </div>
  );
};

export default Foreground;
