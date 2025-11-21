# Te explico la estructura del Dockerfile línea por línea:

# Análisis del Dockerfile
dockerfile
FROM python:3.11-slim
# Propósito: Define la imagen base

python:3.11: Imagen oficial de Python versión 3.11

# slim: Versión reducida que incluye solo lo esencial, más ligera que la versión completa

dockerfile
WORKDIR /app
# Propósito: Establece el directorio de trabajo dentro del contenedor

# Crea el directorio /app si no existe

# Todos los comandos siguientes se ejecutarán desde esta ubicación

# Equivalent a hacer cd /app en el contenedor

dockerfile
RUN apt-get update && apt-get install -y \
    gcc \
    postgresql-dev \
    && rm -rf /var/lib/apt/lists/*
# Propósito: Instala dependencias del sistema necesarias

apt-get update: Actualiza la lista de paquetes disponibles

apt-get install -y: Instala paquetes (flag -y confirma automáticamente)

gcc: Compilador C necesario para algunos paquetes de Python

postgresql-dev: Librerías de desarrollo de PostgreSQL para psycopg2

rm -rf /var/lib/apt/lists/*: Limpia la cache de apt para reducir el tamaño de la imagen

dockerfile
COPY requirements.txt .
# Propósito: Copia el archivo de dependencias

# Copia requirements.txt desde tu máquina local al directorio /app del contenedor

# Se hace antes de copiar el código completo para aprovechar la cache de Docker

dockerfile
RUN pip install --no-cache-dir -r requirements.txt
Propósito: Instala las dependencias de Python

pip install: Instala paquetes de Python

-r requirements.txt: Lee las dependencias desde el archivo

--no-cache-dir: Evita guardar la cache de pip, reduciendo el tamaño de la imagen

dockerfile
COPY ./app /app/app
Propósito: Copia el código de la aplicación

# Copia toda la carpeta app y su contenido al contenedor

# Se hace después de instalar dependencias para optimizar la cache de Docker

dockerfile
EXPOSE 8000
# Propósito: Documenta el puerto que la aplicación usará

# NO abre el puerto, solo sirve como documentación

# El mapeo real de puertos se hace en docker-compose.yml

dockerfile
CMD ["uvicorn", "app.api.route.main:app", "--host", "0.0.0.0", "--port", "8000"]
# Propósito: Define el comando por defecto al ejecutar el contenedor

uvicorn: Servidor ASGI para FastAPI

app.api.route.main:app: Ruta al objeto FastAPI (app dentro de main.py)

--host 0.0.0.0: Hace que la aplicación escuche en todas las interfaces

--port 8000: Puerto donde escuchará la aplicación