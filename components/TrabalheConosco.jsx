import React, { useState } from "react";

const TrabalheConosco = () => {
  const [query, setQuery] = useState({
    name: "",
    email: "",
    tel: "",
    cargo: "",
    url: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState(null);

  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    fetch("https://getform.io/f/e27122d0-21c4-4930-8a9d-37c17244c7c7", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        setQuery({
          name: "",
          email: "",
          tel: "",
          cargo: "",
          url: "",
          message: "",
        });
        setSuccessMessage("Formulário enviado com sucesso!");
        // You can also redirect the user or perform other actions upon success
      })
      .catch((error) => {
        // Handle submission error
        console.error("Erro ao enviar o formulário", error);
      });
  };

  return (
    <div className="max-w-[1240px] mx-auto p-20">
      <h1 className="text-3xl font-bold text-center p-4">Trabalhe Conosco</h1>
      <div className="flex flex-col md:flex-row items-center justify-around">
        <div className="p-4 md:w-1/3">
          <div className="text-lg font-bold pb-4">
            <h1>Junte-se a nós</h1>
          </div>
          <p>
            Faça parte da equipe por trás da fabricação de paletes de qualidade!
            Se você é apaixonado por precisão, qualidade e busca fazer parte de
            um time comprometido em produzir paletes excepcionais, nós temos um
            lugar para você. Venha fazer parte da nossa equipe e seja parte
            fundamental na fabricação de paletes que fazem a diferença em
            diversos setores! Essa mensagem destaca o comprometimento com a
            qualidade na fabricação de paletes e convida os interessados a se
            juntarem à equipe para serem parte desse processo de produção
            essencial em diferentes áreas.
          </p>
        </div>

        <form onSubmit={formSubmit} className="max-w-[600px] p-4">
          <div className="text-2xl font-bold text-center p-4">
            <h1>Preencha o formulário </h1>
          </div>

          <input
            className="border shadow-lg p-3 w-full my-2"
            type="text"
            placeholder="Nome completo"
            name="name"
            required
            value={query.name}
            onChange={handleParam()}
          />
          <input
            className="border shadow-lg p-3 w-full my-2"
            type="email"
            placeholder="Email"
            name="email"
            required
            value={query.email}
            onChange={handleParam()}
          />

          <input
            className="border shadow-lg p-3 w-full my-2"
            type="tel"
            placeholder="Número de telefone"
            name="tel"
            required
            value={query.tel}
            onChange={handleParam()}
          />
          <input
            className="border shadow-lg p-3 w-full my-2"
            type="text"
            placeholder="Cargo desejado"
            name="cargo"
            required
            value={query.cargo}
            onChange={handleParam()}
          />
          <input
            className="border shadow-lg p-3 w-full my-2"
            type="text"
            placeholder="Linkedin"
            name="url"
            required
            value={query.url}
            onChange={handleParam()}
          />

          <textarea
            className="border shadow-lg p-3 w-full my-2"
            placeholder="Mensagem"
            name="message"
            required
            value={query.message}
            onChange={handleParam()}
          />

          <button className="border shadow-lg p-3 w-full mt-2 bg-green-500 text-white hover:bg-green-600 transition">
            Enviar
          </button>

          {successMessage && (
            <div className="bg-green-100 rounded-md p-3 flex">
              <svg
                className="stroke-2 stroke-current text-green-600 h-8 w-8 mr-2 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none" />
                <circle cx="12" cy="12" r="9" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <div className="text-green-500">
                {successMessage}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default TrabalheConosco;