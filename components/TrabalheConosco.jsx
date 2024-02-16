import React from "react";

const TrabalheConosco = () => {
  return (
    <div
      id="form"
      className="flex md:flex-row flex-col-reverse justify-center gap-10 text-left p-5 mt-24"
    >
      <div className="">
        <form
          className="max-w-[600px]  "
          action="https://getform.io/f/e27122d0-21c4-4930-8a9d-37c17244c7c7"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="grid gap-2 ">
            <input
              className="border shadow-lg p-3"
              type="text"
              placeholder="Nome"
              name="nome"
              required
            />
            <input
              className="border shadow-lg p-3"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 md:gap-2">
            <input
              className="border shadow-lg p-3 w-full my-2"
              type="tel"
              placeholder="Telefone"
              name="telefone"
            />
            <input
              className="border shadow-lg p-3 w-full my-2"
              type="tel"
              placeholder="Celular"
              name="telefone"
              required
            />
          </div>
          <textarea
            className="border shadow-lg p-3 w-[600px]"
            cols=""
            rows="3"
            placeholder="Menssagem"
            name="mensagem"
          />
          <input
            type="file"
            name="files[]"
            multiple
            required
            className="border shadow-lg p-3 w-full my-2"
          />
          <div className="grid  justify-items-center">
            <button className="border shadow-lg p-2 w-[200px] rounded-3xl mt-4">
              Enviar
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col gap-8 p-8">
        <h1 className="text-4xl font-bold">Trabalhe conosco!</h1>
        <p>Precisamos de pessoas como voce.</p>
        <div>
          <p className="font-bold">Endereço</p>
          <p>Rua Joaquim de Seabra, n° 515, Mogi-Guaçu, SP, Brazil, 13848-622</p>
        </div>
        <div>
          <p className="font-bold">Contato</p>
          <p>(19) 3861.2511 | (19) 99660.7262 | canaa@canaapallets.com.br</p>
        </div>
      </div>
    </div>
  );
};
export default TrabalheConosco;
