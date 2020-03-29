<h1 align="center">
  GoBarber
</h1>  
  
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-09?color=%2304D361">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/MGustav0/gobarber/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/MGustav0/gobarber?style=social">
  </a>
</p>

## :exclamation: Requisitos Gerais

1. NodeJS
2. Yarn (versão 1.x)
3. Banco de Dados PostgreSQL, MongoDB e Redis
4. Deixe os Bancos de Dados rodando em segundo plano e não altere suas portas de comunicação padrão.

## :computer: Back-end - Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta rodando no terminal `cd gobarber/backend`;
3. Rode `yarn` para instalar as dependências;
4. Crie um banco de dados no postgres com o nome de `gobarber` e senha `docker`;
5. Renomeie o arquivo `.env.example` para `.env`;
6. Coloque as suas credenciais de servidor de e-mail dentro do `.env` - utilizei o [Mailtrap](https://mailtrap.io/);
7. Rode `yarn sequelize db:migrate` para executar as migrations;
8. Rode `yarn dev` para iniciar o client,

## :tv: Front-end - Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta rodando no terminal `cd gobarber/frontendWbeb`;
3. Rode `yarn` para instalar as dependências;
4. Rode `yarn start` para instalar as dependências;

## :iphone: Front-end - Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta rodando `cd gobarber/frontendMobile`;
3. Rode `yarn` para instalar as dependências;
4. Rode `react-native start` em um terminal separado;
5. Rode `react-native run-ios` ou `react-native run-android` dependendo do SO.

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Gustavo Moreira - [Meu LinkedIn](https://www.linkedin.com/in/gustav0/)
