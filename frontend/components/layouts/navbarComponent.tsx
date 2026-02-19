'use client';

import React from "react";

interface ComponentProps {}

const NavbarComponent: React.FC<ComponentProps> = () => {
    return (
        <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
            <span className="font-bold text-xl text-gray-800">Arquitectura Base</span>
          </div>
          <nav className="space-x-6 text-gray-600 font-medium">
            <a href="#inicio" className="hover:text-blue-600">Inicio</a>
            <a href="#tecnologias" className="hover:text-blue-600">Tecnologías</a>
            <a href="#" className="hover:text-blue-600">Documentación</a>
          </nav>
        </div>
      </header>
    )
}



export default NavbarComponent;