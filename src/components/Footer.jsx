


import logo from "../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-stone-500  grid grid-cols-1  md:grid-cols-3">
        <div className="bg-amber-300 my-2 mx-2 mt-0 p-12">
            <img src={logo} alt="logo" className='w-12 md:w-36 pl-4' />
            <p className="mt-9">Gracias por permitirnos ser parte de tus celebraciones</p>
      </div>
      <div className="bg-green-400 my-2 mx-2 mt-0 p-12 ">
          <h2 className="text-3xl">Horario de atención</h2>
          <div>
              <p>Lunes a sábado</p>
              <p>7.00 AM a 7.00 PM</p>
              <p>Domingos y festivos</p>
              <p>8.00 AM a 5.00 PM</p>
          </div>
          <div className="flex">
              <FaFacebookF />
              <FaInstagram/>
          </div>
      </div>
      <div className="bg-cyan-300 my-2 mx-2 mt-0 p-12">
          <h2 className="text-3xl">Donde estamos</h2>
          <p>Calle 115 #14A-17 Ibagué</p>
      </div>
    </footer>
  )
}

export default Footer;