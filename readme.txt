##Dependências##

Python (Lembre-se de selecionar no instalador para adicionar ao PATH no windows)
Node + Npm
Instalação Backend
Após instalar as depedências primeiramente vamos instalar o PipEnv:

pip install pipenv

Ir até o diretório backend e rodar:

pipenv install

Para entrar no ambiente criado:

pipenv shell

Após entrar no ambiente rode:

python manage.py migrate
python manage.py createsuperuser

Para rodar o server rode:

python manage.py runserver

Mantenha o server rodando e siga para preparar o frontend

##Instalação frontend##

Instale o angular cli

npm install -g @angular/cli

Vá para o diretório do frontend e rode:

npm install

Para rodar o frontend rode:

npm start
