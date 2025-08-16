https://chatgpt.com/c/6889fec6-9148-8320-bbe8-435daec817b5

run start    frontend

Lventar backend

1. .\venv\Scripts\activate
2. uvicorn server:app --reload

http://localhost:8000

Y la documentación interactiva está en:
http://localhost:8000/docs

Conectar mongo: 

1. win + R
2. services.msc
3. Barra de tareas buscar mongo  
4. 4. Verifica que MongoDB esté corriendo
Abre CMD y ejecuta:

bash
Copiar
Editar
mongo
Si ves el prompt de Mongo (>) ya está todo bien.

O abre Compass y conecta con:

arduino
Copiar
Editar
mongodb://localhost:27017
5. Si no corre automáticamente…
Ve a services.msc y busca “MongoDB”, dale clic derecho y elige Iniciar.

O en CMD (como admin):

bash
Copiar
Editar
net start MongoDB

