import Layout from "./Layout";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <Layout>
        <section className="w-[1300px] rounded-md p-8">
          <div className="flex justify-center">
            <div className="flex items-center w-full max-w-lg p-8 mx-auto lg:px-12 lg:w-2/5 bg-white rounded-lg shadow-lg">
              <div className="w-full">
                <h1 className="text-3xl font-semibold tracking-wider font-serif text-blue-600 capitalize">
                  Inicia Sesión
                </h1>
                <p className="mt-4 text-gray-700">
                  Bienvenido de vuelta. Inicia sesión para acceder a tu cuenta.
                </p>

                <form className="grid grid-cols-1 gap-6 mt-8">
                  <div>
                    <label
                      className="block mb-2 text-sm text-gray-600"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="tucorreo@ejemplo.com"
                      className="block w-full px-4 py-3 mt-2 text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500 focus:outline-none"
                      required
                      aria-label="Email"
                    />
                  </div>

                  <div>
                    <label
                      className="block mb-2 text-sm text-gray-600"
                      htmlFor="password"
                    >
                      Contraseña
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Ingresa tu contraseña"
                      className="block w-full px-4 py-3 mt-2 text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500 focus:outline-none"
                      required
                      aria-label="Contraseña"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="remember"
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="remember"
                        className="ml-2 text-sm text-gray-600"
                      >
                        Recuérdame
                      </label>
                    </div>
                    <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                        ¿Olvidaste tu contraseña?
                    </Link>
                   
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 transition duration-300"
                  >
                    <span className="uppercase font-semibold">
                      Iniciar Sesión
                    </span>
                  </button>

                  <p className="mt-4 text-sm text-center text-gray-600">
                    ¿No tienes cuenta?{" "}
                    <Link to="/register" className="text-blue-600 hover:underline">
                      Regístrate
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
