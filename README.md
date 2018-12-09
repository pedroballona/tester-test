# Regal Auctions

## Dependências

1. [Python](https://www.python.org/downloads/) (Lembre-se de selecionar no instalador para adicionar ao PATH no windows)
1. [Node + Npm](https://nodejs.org/en/)

## Instalação Backend

Após instalar as depedências primeiramente vamos instalar o PipEnv:

```
pip install pipenv
```

Ir até o diretório backend e rodar:

```
pipenv install
```

Para entrar no ambiente criado:


```
pipenv shell
```

Após entrar no ambiente rode:

```
python manage.py migrate
python manage.py createsuperuser
```

Para rodar o server rode:

```
python manage.py runserver
```

A api agora está rodando no endereço http://localhost:8000/api

Os seguintes endpoits foram criados:

1. /api/users/ - Retorna todos os usuários
1. /api/auctions/ - Retorna todos os Leilões
1. /api/bids/ - Retorna todos os lances


As interfaces rests são autenticadas não permitindo acesso para quem não possua um token de segurança

Para obter o realize um post no endpoint /api-token-auth/ passando os seguintes campos:
```
{
  username: //username
  password: //password
}
```

O endpoint irá retornar o token:
```
{
  token: a123124sadffwewef
}
```

Com este token é possível se autenticar em qualquer chamadas a api inserindo o seguinte header HTTP nas chamadas:

```
Authorization: Token a123124sadffwewef
```

Mantenha o server rodando e siga para preparar o frontend

## Instalação frontend

Instale o angular cli

```
npm install -g @angular/cli
```

Vá para o diretório do frontend e rode:

```
npm install
```

Para rodar o frontend rode:

```
npm start
```
