import React from "react";
import { useRouter } from "next/router";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Whatsapp = () => {
  const router = useRouter();

  const HandleClick = () => {
    router.push("/contato"); // Redireciona para a nova página de contato
  };

  return (
    <div>
      <FloatingWhatsApp
        accountName="Canaa Pallets"
        chatMessage="Olá, tudo bem? Como posso ajudar?"
        statusMessage="Atendendo..."
        phoneNumber="55 19 9988-5555"
        allowClickAway={true}
        onClick={HandleClick}
      />
    </div>
  );
};

export default Whatsapp;
