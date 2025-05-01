export const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-800 via-blue-600 to-blue-400">
      <h1 className="text-white text-5xl font-thin text-center drop-shadow-xl tracking-wide mb-6">
        parking rental .app
      </h1>
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <form className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="seuemail@exemplo.com"
            />
          </div>
          <div>
            <label
              htmlFor="senha"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Senha
            </label>
            <input
              type="password"
              id="senha"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Entrar
          </button>
          <p className="text-sm text-center text-gray-600">
            Não tem uma conta?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Registre-se
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
