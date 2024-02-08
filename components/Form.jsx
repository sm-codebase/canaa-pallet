import React from 'react';

const Form = () => {
  return (
    <div>
      <form
        className="max-w-[600px] m-auto mt-24"
        action="https://getform.io/f/e27122d0-21c4-4930-8a9d-37c17244c7c7"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid grid-cols-2 gap-2">
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
          type="tel"
          placeholder="Telefone"
          name="telefone"
          required
        />
        <select
          className="border shadow-lg p-3 w-full my-2"
          name="assunto"
          defaultValue=""
          required
        >
          <option value="" disabled hidden>
            Selecione o Assunto
          </option>
          <option value="Compra de Pallet">Compra de Pallet</option>
          <option value="RH">RH</option>
          <option value="Comercial">Comercial</option>
          {/* Adicione outras opções conforme necessário */}
        </select>
        <textarea
          className="border shadow-lg p-3 w-full"
          cols=""
          rows="10"
          placeholder="Mensagem"
          name="mensagem"
          required
        />
        <input
          type="file"
          name="files[]"
          multiple
          className="border shadow-lg p-3 w-full my-2"
        />
        <button className="border shadow-lg p-3 w-full mt-2">Enviar</button>
      </form>
    </div>
  );
};
export default Form;