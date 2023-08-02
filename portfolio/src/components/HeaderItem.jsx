import React from "react";

const HeaderItem = ({ Icon, text }) => {
  return (
    <a
      href=""
      className="hover:bg-gray-200 p-4 flex-row flex justify-center items-center"
    >
      {text && <Icon className="md:mr-2" />}
      {!text && <Icon />}
      <span className="hidden md:block">{text}</span>
    </a>
  );
};

export default HeaderItem;
