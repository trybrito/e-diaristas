<div align="center">
  <div>
    <img src="./.github/ediaristas.svg" width="50px" />
    <h1>E-Diaristas</h1>
    <p>
      <a href="#-status">Status</a> •
      <a href="#-features">Features</a> • 
      <a href="#%EF%B8%8F-pré-requisitos">Pré-requisitos</a> • 
      <a href="#-tecnologias-utilizadas">Tecnologias utilizadas</a> • 
      <a href="#-autor">Autor</a> •
      <a href="#-readme-versions">README versions</a>
    </p>
    <h3>
      🧼 Uma aplicação ReactJS, Django e React Native para pesquisar e contratar faxineiras que trabalham próximas à você, bem como cadastrar e editar os dados das mesmas.
    </h3>
  </div>

  <div>
    <img src="https://img.shields.io/github/license/ThiagoBrito-Dev/Podcastr?color=6b2aee&style=for-the-badge" />
    <img src="https://img.shields.io/static/v1?label=version&message=1.0.0&color=6b2aee&style=for-the-badge" />
    <img src="https://img.shields.io/static/v1?label=yarn&message=v1.22.5&color=6b2aee&style=for-the-badge" />
  </div>
</div>

<hr>

### 🏁 Status

<h3 align="center">
  🎉 E-Diaristas ✔️ Finalizado 🎉
</h3>

<hr>

### 🏆 Features

- [x] Pesquisar diaristas a partir do CEP informado pelo usuário;
- [x] Pesquisar diaristas a partir da geolocalização do usuário;
- [x] Cadastrar diaristas; e
- [x] Editar diaristas.

<hr>

### ❗️ Pré-requisitos

Fala Dev, beleza? Antes de iniciar seus testes e/ou contribuições na aplicação, é necessário ter duas coisas instaladas, a primeira é o nosso maravilhoso [GIT](https://git-scm.com) e a segunda, o [Node.js](https://nodejs.org/en/), além, é claro, de um bom editor de texto.

Bom, com tudo instalado e pronto, podemos ir para o passo a passo de como rodar a aplicação.

### 🕹️ Rodando a aplicação

#### Geral

```bash
# Primeiramente, clone este repositório com o GIT
$ git clone <https://github.com/ThiagoBrito-Dev/e-diaristas>

# E acesse a pasta do projeto pelo terminal de comando
$ cd .../e-diaristas
```

#### ⚙️ Backend

```bash
# Acesse a pasta do backend da aplicação
$ cd ./backend/ediaristas_backend

# Instale as dependências presentes na pasta ./venv/Lib/site-packages
$ pip install

# Rode as migrations
$ python manage.py migrate

# E execute o servidor
$ python manage.py runserver
```

#### 💻 Frontend

```bash
# Acesse a pasta do frontend da aplicação
$ cd ./frontend

# Instale as dependências presentes no package.json
$ yarn / npm install

# E execute a aplicação
$ yarn dev
```

#### 📱 Mobile

```bash
# Acesse a pasta da aplicação mobile
$ cd ./mobile

# Instale as dependências presentes no package.json
$ yarn / npm install

# E execute a aplicação
$ yarn start
```

<hr>

### 🔮 Tecnologias utilizadas

#### Backend

- [Python](https://www.python.org/)
- [Django](https://www.djangoproject.com/)
- [Asgiref](https://pypi.org/project/asgiref/1.1.1/)
- [Pillow](https://pypi.org/project/Pillow/)
- [Pytz](https://pypi.org/project/pytz/)
- [Crispy-forms](https://pypi.org/project/django-crispy-forms/)
- [Easy-mask](https://pypi.org/project/easy-mask/)
- [Requests](https://pypi.org/project/requests/)
- [SQLparse](https://pypi.org/project/sqlparse/)
- [URLlib3](https://pypi.org/project/urllib3/)

#### Frontend

- [HTML](https://devdocs.io/html/)
- [Material UI](https://mui.com/pt/)
- [Emotion](https://emotion.sh/docs/introduction)
- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://pt-br.reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Axios](https://axios-http.com/)
- [React-input-mask](https://www.npmjs.com/package/react-input-mask)

#### Mobile

- [HTML](https://devdocs.io/html/)
- [Emotion](https://emotion.sh/docs/introduction)
- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [Axios](https://axios-http.com/)
- [Expo](https://expo.dev/)

<hr>

### 👨🏽‍🎓 Autor

<div align="center">
  <img src="https://github.com/ThiagoBrito-Dev.png" width="250px" />

  <br />

  <div>
    <h3>
      🤝 Thiago Raniery Brito
    </h3>
    <p>E aí Dev, gostou da aplicação? Bom, se quiser, fique à vontade para entrar em contato comigo por aqui ou pelas tags abaixo.</p>
  </div>
  
  <div>
    <a href="https://www.linkedin.com/in/thiagoranierybrito/">
      <img src="https://img.shields.io/badge/-LinkedIn-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thiagoranierybrito/" />
    </a>
    <a href="mailto:thiagobritotrs@gmail.com">
      <img src="https://img.shields.io/badge/-Gmail-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:thiagobritotrs@gmail.com" />
    </a>
  </div>
</div>

<hr>

### 📚 README versions

<div>
  <a href="https://github.com/ThiagoBrito-Dev/e-diaristas/blob/main/README.md">Portuguese (pt-br)</a>
  |   
  <a href="https://github.com/ThiagoBrito-Dev/e-diaristas/blob/main/README-en.md">English (en-us)</a>
</div>
