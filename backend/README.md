# Projeto GoBarber

**Descrição:** Projeto de desafio para Bootcamp 2019 da Rocketseat.

## Documentação do projeto

1. Prints de Tela
  1. PC Web
  2. Mobile Web
  3. Mobile App
2. Back-end
  1. Linguagens
  2. Servidor
  3. Banco de Dados
  4. E-mail
  5. Outras Tecnologias
  6. Desenvolvimento
3. Front-End
4. Arquivos
5. Documentação

### Prints de Tela

### Back-end

#### 1. Linguagens
* Javascript
* JSON (AJAX)
* SQL
* HTML5
* CSS3
* Markdown

#### 2. Servidor

**NodeJS**

* Express
* Sequelize
* Sucrase

#### 3. Banco de Dados

* PostgreSQL
  * Sequelize
  * Yup
  * PostBird
  * PgAdmin
* MongoDB
  * Mongoose
  * MongoDB Compass Community
* Redis

#### 4. Email

* Nodemailer - Envio de emails.
* HandlebarsJS - Templates de emails.
  * nodemailer-express-handlebars - Integração com o nodemailer.
  * express-handlebars - Integração com o express.

#### 5. Outras Tecnologias

* bcryptjs - Encriptador/decriptador de senhas.
* jsonwebtoken - Token de segurança para sessões.
* date-fns - Formatador de senhas.
* multer - Upload de arquivos.
* bee-queue - Ferramenta de fila em background jobs, com funcionalidades básicas.
* Sentry - Monitoramento e tratamento de excessões.
  * express-async-errors - Monitora erros dentro dos async-await do express.
  * youch - Faz tratativa das mensagens de erro e mostra em JSON ou HTML, retira a visualização do terminal e envia por JSON/HTML.
* dotenv - Permitir que as variáveis de ambiente possam ser inseridas via ```process.env```.

Obs.: para outras funcionalidades como controle de prioridade, considerar o uso do **Kue**, que é mais robusto, porém menos performático.

#### 6. Desenvolvimento

**Softwares**

* VS Code
* Insomnia - REST Client.
* Docker

**Depenências de Desenvolvimento**

* Nodemon
* ESLint (AirBNB) - Padronizador e formatador de código.
* Prettier - Padronizador e formatador de código.
* Sucrase - Para utilizar a sintaxe atual do javascript.
* npm-run-all - Roda vários scripts em paralelo com um único comando.
  * Configuração:
  ```json
  "scripts": {
    "dev": "npm-run-all -p dev:*",
    "dev:server": "nodemon src/server.js",
    "dev:queue": "nodemon src/queue.js",
    "dev:debug": "nodemon --inspect src/server.js"
  },
  ```
  Podendo executar também:
  ```json
  "scripts": {
    "postinstall": "npm-run-all -p -c installdeps:*",
    "installdeps:backend": "cd client && yarn",
    "installdeps:frontend": "cd server && yarn",
    "dev": "npm-run-all -p -c dev:*",
    "dev:backend": "cd server && yarn dev",
    "dev:frontend": "cd client && yarn dev",
  },
  ```

### Front-end

**Tecnologias**
* ReactJS
* ReactNative

### Arquivos

Arquivos.

### Documentação

A documentação está integrada nas pastas, de acordo com o nome de cada uma, funções, arquivos e instruções, quando necessário.# gobarber
