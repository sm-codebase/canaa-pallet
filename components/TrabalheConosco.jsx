import React from "react";

const TrabalheConosco = () => {

  
  
  return (
    <div className="max-w[1240px]  mx-auto p-20  ">
      <h1 className="text-2xl font-bold text-center p-4">Trabalhe Conosco</h1>
      <div className="flex flex-col md:flex-row items-center justify-around">
        <div className="p-4 md:w-1/3">
          <div className="text-lg font-bold pb-4 ">
            <h1>Junte-se a nós</h1>
          </div>
          <p>
            {" "}
            Faça parte da equipe por trás da fabricação de paletes de qualidade!
            Se você é apaixonado por precisão, qualidade e busca fazer parte de
            um time comprometido em produzir paletes excepcionais, nós temos um
            lugar para você. Venha fazer parte da nossa equipe e seja parte
            fundamental na fabricação de paletes que fazem a diferença em
            diversos setores!" Essa mensagem destaca o comprometimento com a
            qualidade na fabricação de paletes e convida os interessados a se
            juntarem à equipe para serem parte desse processo de produção
            essencial em diferentes áreas.
          </p>
        </div>

        <form
          className="max-w-[600px] p-4 "
          action="https://getform.io/f/e27122d0-21c4-4930-8a9d-37c17244c7c7"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="text-2xl font-bold text-center p-4">
            <h1>Preencha o formulario </h1>
          </div>

          <input
            className="border shadow-lg p-3 w-full my-2"
            type="text"
            placeholder="Nome completo"
            name="nome"
          />
          <input
            className="border shadow-lg p-3 w-full my-2"
            type="email"
            placeholder="Email"
            name="email"
          />

          <input
            className="border shadow-lg p-3 w-full my-2"
            type="tel"
            placeholder="Numero de telefone"
            name="tel"
          />
          <input
            className="border shadow-lg p-3 w-full my-2"
            type="subject"
            placeholder="Cargo desejado"
            name="subject"
          />
          <input
            className="border shadow-lg p-3 w-full my-2"
            type="subject"
            placeholder="Linkedin"
            name="subject"
          />

          <input
            className="border shadow-lg p-3 w-full my-2"
            cols=""
            rows=""
            placeholder="Menssagem"
            name="mensagem"
          />
          <button className="border shadow-lg p-3 w-full mt-2">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default TrabalheConosco;
