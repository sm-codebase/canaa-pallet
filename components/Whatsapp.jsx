import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Whatsapp = () => {
  const HandleClick = () => {
    window.open("https://api.whatsapp.com/send?phone=5519989331908");
  };
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="55 19 98933-1908"
        allowClickAway="true"
        onClick={HandleClick}
      />
    </div>
  );
};

export default Whatsapp;
