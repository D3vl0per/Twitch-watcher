<h1 align="center">Valorant watcher</h1>
<p align="center"> Passei dois dias assistindo os streams de Valorant para conseguir um drop. Fiquei entediado...</p>
<p align="center">
<img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/D3vl0per/Valorant-watcher"> <img alt="GitHub" src="https://img.shields.io/github/repo-size/D3vl0per/Valorant-watcher"> <img alt="GitHub repo size" src="https://img.shields.io/github/license/D3vl0per/Valorant-watcher"> <img alt="GitHub issues" src="https://img.shields.io/github/issues/D3vl0per/Valorant-watcher"> <a href="https://asciinema.org/a/rob4Rh1EG4XFVfN4XWK67JSnf" target="_blank"><img src="https://asciinema.org/a/rob4Rh1EG4XFVfN4XWK67JSnf.svg" /></a>
</p>

## Recursos

- 🎥 Suporte verdadeiro ao HTTP Live Streaming (Esqueça o código de erro #4000)
- 🔐 Login baseado em cookies
- 📜 Política de aceitação automática de cookies
- 👨‍💻 A escolha de um streamer aleatório com tag de drop habilitada
- 🤐 Stream sem som
- 🛠 Detecta streams baseado em conteúdo adulto e interaja com ele
- 🛡 Opção de proxy
- 📽 Configurações automáticas de resolução mais baixa possível
- 🧰 Base de código altamente personalizável
- 📦 Implantável no VPS pelo Docker
- 🏳️ Comunidade de suporte colaborativa
- 💬 Readme (Leia-me) em vários idiomas: [🇫🇷 README](https://github.com/D3vl0per/Valorant-watcher/blob/languages/README_FR.md), [🇧🇷 README](https://github.com/D3vl0per/Valorant-watcher/blob/languages/README_BR.md)

## Requisitos

- Sistema operacional Windows ou Linux
- Conexão de rede (Isso é óbvio...)
- [Nodejs](https://nodejs.org/pt-br/download/) e [NPM](https://www.npmjs.com/get-npm)

## Instalação

🎥 [Vídeo tutorial em Português Brasileiro por GGames](https://youtu.be/BvCUnhw9Vcw) 🎥

### Windows

1. Entre na sua conta do twitch
2. Abra o Inspecionar (F12 ou Ctrl+Shift+I) no site principal
3. Encontre a seção de cookies armazenados, geralmente é em: **Aplication**/**Storage**/**🍪 Cookies**/**https://www.twitch.tv/**
4. Copie o **auth-token**
5. Clone este repositório
6. Instale o Chromium
7. Geralmente, o caminho para o executável do Chromium é: C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe
8. Abre o CMD no Windows, navegue até a pasta do repositório clonado usando o comando **cd**
9. Instale as dependências com `npm install`
10. Inicie o programa com `npm start`

### Linux

1. Entre na sua conta do twitch
2. Abra o Inspecionar(F12 ou Ctrl+Shift+I) no site principal
3. Encontre a seção de cookies armazenados, geralmente é em: **Aplication**/**Storage**/**🍪 Cookies**/**https://www.twitch.tv/**
4. Copie o **auth-token**
5. Clone este repositório
6. Instale o Chromium: [TUTORIAL 🤗](https://www.addictivetips.com/ubuntu-linux-tips/install-chromium-on-linux/)
7. Localize executável do Chromium: `whereis chromium`
8. Abra o terminal do Linux (Ctrl+Alt+T), navegue até a pasta do repositório clonado usando o comando **cd**
9. Instale as dependências com `npm install`
10. Inicie o programa com `npm start`

## Docker

<p align="center">
<img alt="Docker Image Version (latest by date)" src="https://img.shields.io/docker/v/d3vm/valorant-watcher"> <img alt="Docker Pulls" src="https://img.shields.io/docker/pulls/d3vm/valorant-watcher"> <img alt="Docker Image Size (latest by date)" src="https://img.shields.io/docker/image-size/d3vm/valorant-watcher">
</p>

> O Docker é um conjunto de produtos de plataforma como serviço (PaaS) que usa a virtualização no nível do SO para fornecer software em pacotes chamados contêineres. Os contêineres são isolados um do outro e agrupam seu próprio software, bibliotecas e arquivos de configuração. Todos os contêineres são executados por um único kernel do sistema operacional e, portanto, usam menos recursos que as máquinas virtuais.

### Requisitos

- [Docker](https://docs.docker.com/get-docker/)
- [Docker-Compose](https://docs.docker.com/compose/install/)

### Uso

1. Faça Download do docker-compose-example.yml
2. Renomeie o docker-compose.yml
3. Abra e substitua o **token** do registro de ambiente
4. Execute com o comando `docker-compose up -d`

## Dependências

<p align="center">
<img alt="GitHub package.json dependency version (subfolder of monorepo)" src="https://img.shields.io/github/package-json/dependency-version/D3vl0per/Valorant-watcher/puppeteer-core"> <img alt="GitHub package.json dependency version (subfolder of monorepo)" src="https://img.shields.io/github/package-json/dependency-version/D3vl0per/Valorant-watcher/cheerio"> <img alt="GitHub package.json dependency version (subfolder of monorepo)" src="https://img.shields.io/github/package-json/dependency-version/D3vl0per/Valorant-watcher/inquirer"> <img alt="GitHub package.json dependency version (subfolder of monorepo)" src="https://img.shields.io/github/package-json/dependency-version/D3vl0per/Valorant-watcher/dotenv"> <img alt="GitHub package.json dependency version (subfolder of monorepo)" src="https://img.shields.io/github/package-json/dependency-version/D3vl0per/Valorant-watcher/dayjs"> <img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/D3vl0per/valorant-watcher/tree-kill">
</p>

## Solução de problemas

### Como o token se parece?

auth-token: `rxk38rh5qtyw95fkvm7kgfceh4mh6u`

---

### Streamers.json está vazio?

Tente novamente com maior atraso.
Atraso padrão:

```javascript
const scrollDelay = 2000;
```

[Vá até o código](https://github.com/D3vl0per/Valorant-watcher/blob/12dce8065423861971b7088563ad936b2dcc2559/app.js#L15)

---

### Algo deu errado?

Experimente o modo sem cabeçalho. Defina o valor sem cabeçalho como `true`, desta forma:

```javascript
const showBrowser = true;
```

[Vá até o código](https://github.com/D3vl0per/Valorant-watcher/blob/12dce8065423861971b7088563ad936b2dcc2559/app.js#L24)

---

### Proxy?

Sim, claro:

```javascript
const proxy = ""; // "ip:port" Por https://github.com/Jan710
```

[Vá até o código](https://github.com/D3vl0per/Valorant-watcher/blob/12dce8065423861971b7088563ad936b2dcc2559/app.js#L25)

OU

Com Docker env:

```
proxy=PROXY_IP_ADDRESS:PROXY_PORT
```

---

### Captura de tela sem o modo sem cabeçalho

```javascript
const browserScreenshot = false;
```

[Vá até o código](https://github.com/D3vl0per/Valorant-watcher/blob/12dce8065423861971b7088563ad936b2dcc2559/app.js#L27)

## Doação

Doe para manter vivo este projeto!

Especialmente os Drop Farmers que coletam toneladas de dinheiro com este software!🤓

<a href="https://www.buymeacoffee.com/D3v" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Compre-me um café" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## Suporte

- Keybase em [https://keybase.io/d3v\_](https://keybase.io/d3v_)
- Discord em [https://discord.gg/s8AH4aZ](https://discord.gg/s8AH4aZ)

## Aviso Legal

Este código é apenas para fins educacionais e de pesquisa.
Não tente violar a lei com qualquer coisa aqui contida.
Não serei responsável por nenhuma ação ilegal.
Reprodução e cópia autorizadas, desde que a fonte seja reconhecida.

## Tradução

Esta tradução foi feita pela equipe do [GGames](https://ggames.com.br/)
