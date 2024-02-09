import React from "react";
import Contact from "../components/Contact";
import Form from "../components/Form";

const FaleConosco = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center gap-10 text-center ">
      <div className="flex flex-col gap-8 p-8">
        <h1 className="text-4xl font-bold">Venha falar conosco!</h1>
        <p>
          Queremos te ouvir e apresentar a melhor proposta para seu negócio.
        </p>
        <div>
          <p className="font-bold">Endereço</p>
          <p>Rua Joaquim de Seabra, n° 515, Mogi-Guaçu, SP, Brazil</p>
        </div>
        <div>
          <p className="font-bold">Contato</p>
          <p>(19) 3861-2511 | canaa@canaapallets.com.br</p>
        </div>
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default FaleConosco;
