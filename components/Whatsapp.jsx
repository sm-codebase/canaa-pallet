import React from "react";
import { useRouter } from "next/router";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Whatsapp() {
  const router = useRouter();

  const handleClick = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "whatsapp_click",
        button_location: "Floating",
        dest: "/contato",
      });
    }
    router.push("/contato");
  };

  return (
    <FloatingWhatsApp
      accountName="Canaa Pallets"
      chatMessage="Olá, tudo bem? Como posso ajudar?"
      statusMessage="Atendendo..."
      phoneNumber="5519971593235" 
      allowClickAway={true}
      onClick={handleClick}
    />
  );
}
