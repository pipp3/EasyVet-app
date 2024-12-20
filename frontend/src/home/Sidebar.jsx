import { ArrowLeftFromLine } from "lucide-react";
import { User } from "lucide-react";
import { PawPrint } from "lucide-react";
import { useState } from "react";
import { House } from "lucide-react";
import { LogOut } from "lucide-react";

import {useNavigate} from 'react-router-dom';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { useEffect } from "react";
import axios from 'axios';


export default function Sidebar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [nombres,setNombres] = useState('');
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/users/me", { withCredentials: true });
        setNombres(response.data.user.nombres);
      } catch (error) {
        console.log(error);
        iziToast.error({
          title: "Error",
          message: "No se pudo recuperar la información del usuario.",
          position: "topRight"
        });
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);
  const handleLogout = async() => {
    try {
      await axios.post("http://localhost:3000/api/auth/logout", {}, { withCredentials: true });
      iziToast.success({
        title: 'Sesión cerrada',
        message: 'Has cerrado sesión correctamente',
        position: 'topRight'
      });
      navigate('/login');
    } catch (error) {
      iziToast.error({
        title: "Error",
        message: "Hubo un problema al cerrar sesión.",
        position: "topRight"
      });
    }
  }
  return (
    <aside
      className={`h-screen p-5 w-72 pt-10 bg-blue-500 relative ${
        isOpen ? "w-72" : "w-20"
      } duration-300`}
    >
      <ArrowLeftFromLine
        className={`bg-white text-blue-900 text-3xl rounded-full absolute -right-3 top-9 border border-blue-900 p-1 cursor-pointer ${
          !isOpen ? "rotate-180" : ""
        }`}
        size={30}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className="inline-flex">
        
        <PawPrint
          className={`text-4xl cursor-pointer block float-left mr-2 duration-500 ${
            isOpen && "rotate-[360deg]"
          }`}
          size={34}
          color="#ffffff"
        />
        <h1
          className={`text-white origin-left font-medium text-3xl font-serif ${
            !isOpen && "scale-0"
          }`}
        >
          EasyVet
        </h1>
        
      </div>
      <h2 className={`text-white font-semibold text-xl my-1 hover:text-gray-200 cursor-pointer ${!isOpen && "scale-0"}`}>Bienvenido de regreso {nombres} !</h2>
      <ul className="pt-2">
        <li
          className={`text-white text-sm  flex items-center gap-x-4 cursor-pointer
             p-2 hover:bg-blue-700 rounded-md mt-2 ${!isOpen && "mt-2"}`}
        >
          <span className={`block float-left`}>
            <House size={28} color="#ffffff" />
          </span>
          <span className={`text-base font-medium ${!isOpen && "hidden"} duration-200`}>Inicio</span>
        </li>

        <li
          className={`text-white text-sm  flex items-center gap-x-4 cursor-pointer
             p-2 hover:bg-blue-700 rounded-md mt-2 ${!isOpen && "mt-2"}`}
        >
          <span className={`block float-left`}>
            <User size={28} color="#ffffff" />
          </span>
          <span className={`text-base font-medium ${!isOpen && "hidden"} duration-200`}>Perfil</span>
        </li>

        <li
          className={`text-white text-sm  flex items-center gap-x-4 cursor-pointer
             p-2 hover:bg-blue-700 rounded-md mt-2 ${!isOpen && "mt-2"}`}
             onClick={handleLogout}
        >
          <span className={`block float-left`}>
          <LogOut size={28} color="#ffffff" />
          </span>
          <span className={`text-base font-medium ${!isOpen && "hidden"} duration-200`}>Cerrar sesion</span>
        </li>
        
      </ul>
    </aside>
  );
}
