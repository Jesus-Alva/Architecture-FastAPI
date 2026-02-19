'use client';
import Image from "next/image";

import { ROUTES_IMAGES } from "../constants/routes";
import NavbarComponent from "../../components/layouts/navbarComponent";

const Page: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Header simple */}
            <NavbarComponent />

            {/* NUEVO: Dashboard con imagen de fondo */}
            <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
                {/* Imagen de fondo (puedes cambiar la URL por una imagen local o de tu preferencia) */}
                <div className="absolute inset-4 top-0 left-0 w-full h-full z-0">
                    <Image
                        src={ROUTES_IMAGES.dashboard}
                        alt="Programming background"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay oscuro para mejorar legibilidad */}
                    <div className="absolute inset-0 bg-black/50 bg-opacity-60"></div>
                </div>

                {/* Contenido del dashboard */}
                <div className="relative z-10 text-center text-white px-4">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                        Subgerencia de Desarrollo
                    </h2>
                    <p className="text-2xl md:text-4xl font-light mb-12 drop-shadow-lg">
                        Programas Informáticos
                    </p>

                    
                </div>
            </section>


            {/* Hero Section */}
            <section id="tecnologias" className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    Next.js + Tailwind + TypeScript
                </h1>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-6">
                    + Docker + PostgreSQL
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                    Arquitectura base para inicializar proyectos modernos con las mejores herramientas del ecosistema.
                </p>
                <div className="flex justify-center space-x-4">
                    <span className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:bg-blue-700 transition cursor-default">
                        Frontend
                    </span>
                    <span className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium shadow-lg hover:bg-green-700 transition cursor-default">
                        Backend
                    </span>
                    <span className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium shadow-lg hover:bg-purple-700 transition cursor-default">
                        DevOps
                    </span>
                </div>
            </section>

            {/* Tecnologías Section */}
            <section className="container mx-auto px-4 py-12">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                    Tecnologías Utilizadas
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Frontend Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition duration-300">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                <span className="text-blue-600 text-xl">⚛️</span>
                            </div>
                            <h3 className="text-2xl font-bold text-blue-600">Frontend</h3>
                        </div>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Next.js 15.5.9</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>React 19.1.0</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>TypeScript 5</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Tailwind CSS 3.4.1</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Flowbite & Flowbite-React</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>React Router DOM 6.26.0</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Axios 1.7.3</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>PostCSS & Autoprefixer</li>
                        </ul>
                    </div>

                    {/* Backend Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition duration-300">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                                <span className="text-green-600 text-xl">🐍</span>
                            </div>
                            <h3 className="text-2xl font-bold text-green-600">Backend</h3>
                        </div>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>FastAPI</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>Uvicorn 0.15.0</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>Gunicorn 20.1.0</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>SQLAlchemy 1.4</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>AsyncPG 0.24.0</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>Databases</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>PostgreSQL 2.9.1</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>Python-Jose / Passlib</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>FastAPI-Limiter 0.1.6</li>
                        </ul>
                    </div>

                    {/* DevOps Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition duration-300">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                                <span className="text-purple-600 text-xl">🐳</span>
                            </div>
                            <h3 className="text-2xl font-bold text-purple-600">DevOps & Infraestructura</h3>
                        </div>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>Docker</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>Docker Compose</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>PostgreSQL</li>
                        </ul>
                        <div className="mt-6 pt-4 border-t border-gray-200">
                            <p className="text-sm text-gray-500 italic">
                                Entorno containerizado para desarrollo y producción.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección extra: Ventajas */}
            <section className="bg-white py-16 mt-8">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                        ¿Por qué esta arquitectura?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center p-4">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">⚡</span>
                            </div>
                            <h3 className="font-semibold text-xl mb-2 text-black">Rendimiento</h3>
                            <p className="text-gray-600">Next.js y FastAPI ofrecen velocidad y optimización.</p>
                        </div>
                        <div className="text-center p-4">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🔒</span>
                            </div>
                            <h3 className="font-semibold text-xl mb-2 text-black">Seguridad</h3>
                            <p className="text-gray-600">TypeScript, autenticación JWT y rate limiting.</p>
                        </div>
                        <div className="text-center p-4">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🐳</span>
                            </div>
                            <h3 className="font-semibold text-xl mb-2 text-black">Portabilidad</h3>
                            <p className="text-gray-600">Docker garantiza entornos consistentes.</p>
                        </div>
                        <div className="text-center p-4">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">📦</span>
                            </div>
                            <h3 className="font-semibold text-xl mb-2 text-black">Escalabilidad</h3>
                            <p className="text-gray-600">Preparado para crecer con tu proyecto.</p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-300">
                        © 2025 - Arquitectura Base con Next.js, Tailwind, TypeScript, Docker y PostgreSQL
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                        Diseñado para iniciar proyectos con el pie derecho.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Page;