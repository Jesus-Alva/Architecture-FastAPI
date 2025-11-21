#Actualizar estructura del proyecto ejecuta
tree /f > estructura.txt

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