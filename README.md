# Actualizar estructura del proyecto ejecuta
tree /f > estructura.txt

## Instalacion de NEXT.JS
# Asegúrate de tener Node.js instalado en tu sistema
npx create-next-app@latest frontend --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# O si prefieres la configuración mínima:
npx create-next-app@latest frontend --yes

 Los flags significan:
--typescript: Habilita TypeScript

--tailwind: Instala Tailwind CSS

--eslint: Configura ESLint

--app: Usa el App Router (nuevo en Next.js 13+)

--src-dir: Usa carpeta src/ para el código

--import-alias "@/*": Configura alias de imports


# Construir y levantar todos los servicios
docker-compose up --build

# Ejecutar migraciones de Alembic (si las tienes)
docker-compose run web alembic upgrade head

# Ver logs de un servicio específico
docker-compose logs web
docker-compose logs worker

# Servicios Disponibles:
FastAPI: http://localhost:8000
Flower (Monitoreo): http://localhost:5555
RabbitMQ Management: http://localhost:15672 (guest/guest)
PostgreSQL: localhost:5432
Redis: localhost:6379