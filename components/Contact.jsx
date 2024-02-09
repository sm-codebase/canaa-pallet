import React from "react";

const Contact = () => {
  return (
    <div className="maxx-w[1240px] m-auto p-5">
      <div className="flex md:flex-row flex-col-reverse justify-center  gap-10 text-left p-5">
        
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
            <input
              className="border shadow-lg p-3 w-full my-2"
              type="subject"
              placeholder="Assunto"
              name="subject"
            />
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
            <div className="grid  justify-items-center">
            <button className="border shadow-lg p-2 w-[200px] rounded-3xl mt-4">Enviar</button>
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-6 p-8">
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

      </div>
    </div>
  );
};

export default Contact;
