export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Bienvenido a mi aplicación Fullstack</h1>
      <p>Frontend: Next.js con TypeScript</p>
      <p>Backend: FastAPI con Python</p>
      <div>
        <h2>Servicios disponibles:</h2>
        <ul>
          <li><a href="http://localhost:3000">Frontend (Next.js)</a></li>
          <li><a href="http://localhost:8000">Backend (FastAPI)</a></li>
          <li><a href="http://localhost:5555">Flower (Celery Monitor)</a></li>
          <li><a href="http://localhost:15672">RabbitMQ Management</a></li>
        </ul>
      </div>
    </main>
  )
}