
import Image from "next/image"

const Page: React.FC = () => {

    return (
        <div className="">
            <div className="h-full font-bold mb-4 text-center mx-auto">
                <h1 className="text-gray-600 text-5xl bg-white font-mono m-10">Next.js + Tailwind CSS + TypeScript + Docker + PostgreSQL</h1>
                <h1 className="text-4xl font-mono">Arquitectura base para inicializar un proyecto</h1>
                <span className="block mt-8 text-2xl text-left">
                    <h2 className="mb-4 text-4xl font-mono text-gray-800 w-full text-center">Tecnologías Utilizadas</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-blue-600 mb-2">Frontend</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                <li>Next.js 15.5.9</li>
                                <li>React 19.1.0</li>
                                <li>TypeScript 5</li>
                                <li>Tailwind CSS 3.4.1</li>
                                <li>Flowbite & Flowbite-React</li>
                                <li>React Router DOM 6.26.0</li>
                                <li>Axios 1.7.3</li>
                                <li>PostCSS & Autoprefixer</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-green-600 mb-2">Backend</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                <li>FastAPI</li>
                                <li>Uvicorn 0.15.0</li>
                                <li>Gunicorn 20.1.0</li>
                                <li>SQLAlchemy 1.4</li>
                                <li>AsyncPG 0.24.0</li>
                                <li>Databases</li>
                                <li>PostgreSQL 2.9.1</li>
                                <li>Python-Jose</li>
                                <li>Passlib</li>
                                <li>FastAPI-Limiter 0.1.6</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-purple-600 mb-2">DevOps & Infraestructura</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                <li>Docker</li>
                                <li>Docker Compose</li>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default Page