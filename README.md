📚 Book Manager
Aplicação full stack para gerenciamento de livros, composta por um client em React (`/client`) e uma API REST em .NET (`/server`), seguindo os princípios de Hypermedia (HATEOAS).
🖥️ Tecnologias
Client
React
React Router (routes.js)
Axios/fetch (services/api.js)
CSS Modules
Server
.NET / ASP.NET Core
Entity Framework (pasta `Data` / `db`)
Repository Pattern (`Repository`)
Hypermedia / HATEOAS (`Hypermedia`)
Upload de arquivos (`UploadDir`)
📁 Estrutura do projeto
```
.
├── client/                    # Aplicação React
│   ├── public/
│   └── src/
│       ├── assets/            # Imagens e ícones
│       ├── pages/
│       │   ├── Books/         # Listagem de livros
│       │   ├── Login/         # Autenticação
│       │   └── NewBook/       # Cadastro de livro
│       ├── services/
│       │   └── api.js         # Configuração de chamadas HTTP
│       ├── App.js
│       ├── global.css
│       ├── index.js
│       └── routes.js
│
└── server/                    # API RestWithASPNETErudio
    ├── Business/               # Regras de negócio
    ├── Configurations/         # Configurações da aplicação
    ├── Controllers/            # Endpoints da API
    ├── Data/                   # Contexto de dados
    ├── db/                     # Scripts/arquivos de banco de dados
    ├── Hypermedia/             # Implementação HATEOAS
    ├── Model/                  # Entidades/DTOs
    ├── Repository/             # Camada de acesso a dados
    ├── Services/               # Serviços da aplicação
    ├── UploadDir/              # Diretório de uploads
    ├── appsettings.json
    └── Program.cs
```
✅ Pré-requisitos
Node.js (v18+)
.NET SDK (v6+)
Um SGBD compatível (ex: SQL Server / MySQL), conforme configurado em `appsettings.json`
🚀 Como executar
Server (.NET)
```bash
cd server
dotnet restore
dotnet build
dotnet run
```
Configure a connection string do banco de dados em `appsettings.json` antes de subir a aplicação.
Por padrão, a API estará disponível em `https://localhost:5001` (ou porta configurada em `Properties/launchSettings.json`).
Client (React)
```bash
cd client
npm install
npm start
```
O client estará disponível em `http://localhost:3000`.
> Certifique-se de que a URL base da API esteja corretamente configurada em `client/src/services/api.js`.
🔑 Funcionalidades
Autenticação de usuário (Login)
Listagem de livros
Cadastro de novos livros
API REST com suporte a Hypermedia (HATEOAS)
Upload de arquivos/imagens
🤝 Contribuindo
Faça um fork do projeto
Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
Faça commit das alterações (`git commit -m 'Adiciona minha feature'`)
Faça push para a branch (`git push origin feature/minha-feature`)
Abra um Pull Request
📄 Licença
Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
