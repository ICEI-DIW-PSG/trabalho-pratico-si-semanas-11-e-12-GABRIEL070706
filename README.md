# Trabalho Prático 06 - Semanas 11 e 12

Nessa etapa, você irá evoluir o projeto anterior e montando um ambiente de desenvolvimento mais completo, típico de projetos profissionais. Nesse processo, vamos utilizar um **servidor backend simulado** com o JSON Server que fornece uma APIs RESTful a partir de um arquivo JSON.

Para esse projeto, além de mudarmos o JSON para o JSON Server, vamos permitir o cadastro e alteração de dados da entidade principal (CRUD).

## Informações do trabalho

- Nome:Gabriel Henrique Morais Trotta
- Matricula:1582901
- Proposta de projeto escolhida: site culinaria
- Breve descrição sobre seu projeto:Este projeto faz parte de uma série de desenvolvimentos voltados à criação de um portal de receitas interativo.
Nesta primeira etapa, o foco foi construir a estrutura base do sistema, com HTML, CSS, Bootstrap e JavaScript, e integrar o front-end com o JSON Server para realizar as principais operações do CRUD:

✅ GET – Listagem de receitas

✅ POST – Cadastro de novas receitas

✅ PUT – Edição de receitas existentes

✅ DELETE – Exclusão de receitas

A aplicação utiliza Fetch API para comunicação com o servidor e apresenta uma interface simples, responsiva e funcional.
As próximas etapas do projeto incluirão recursos avançados, como login de usuários, favoritos, pesquisa dinâmica e visualização de dados em gráficos interativos.

**Print dos testes da API com Postman ou similar**

<< <img width="1366" height="720" alt="Captura de tela 2025-11-09 200526" src="https://github.com/user-attachments/assets/610715f7-c1ad-4afc-bb48-a2fa3613a627" />
<img width="1366" height="768" alt="Captura de tela 2025-11-09 205428" src="https://github.com/user-attachments/assets/104fc259-b335-4cb3-9ca2-216e5fdba61c" />
 >>

<<<img width="1366" height="768" alt="Captura de tela 2025-11-09 210818" src="https://github.com/user-attachments/assets/7dd216f8-2741-4ac4-9d67-b69118749b80" />
 >>

<< <img width="1366" height="768" alt="Captura de tela 2025-11-09 205743" src="https://github.com/user-attachments/assets/b2d660d5-3738-49d9-8977-1b44acb03e3b" />
>>

<<<img width="1366" height="768" alt="Captura de tela 2025-11-09 210647" src="https://github.com/user-attachments/assets/95d04ecf-65ef-4642-817a-3b20be8ae606" />
 >>

**Print da aba NETWORK com requisições Fetch/XHR POST e GET**

<< <img width="1366" height="768" alt="Captura de tela 2025-11-09 211239" src="https://github.com/user-attachments/assets/c29ba1d3-5f15-44a6-b6ca-aa874ace5085" />
>>

## **Orientações Gerais**

Nesse projeto você vai encontrar a seguinte estrutura base:

* **Pasta db**
  Essa pasta contem um único arquivo: `db.json`. Esse arquivo serve de banco de dados simulado e nele você deve colocar as estruturas de dados que o seu projeto manipula.
  * **OBS**: Já incluímos a estrutura de usuários como exemplo e para que você possa utlizar no seu projeto. Se precisar, faça os ajustes necessários para seu projeto.
* **Pasta public**
  Nesta pasta você deve colocar todos os arquivos do seu site (front end). Aqui vão os arquivos HTML, CSS, JavaScript, imagens, vídeos e tudo o mais que precisar para a interface do usuário.
* **Arquivo README.md**
  Este arquivo em que são colocadas as informações de quem está desenvolvendo esse projeto e os registros solicitados no enunciado da tarefa.
* **Arquivo .gitignore**
  Configuração do que deve ser ignorado pelo git evitando que seja enviado para o servidor no GitHub.
* **Arquivo package.json**
  Considerado o manifesto do projeto ou arquivo de configuração. Nesle são incluídas as informações básicas sobre o projeto (descrição, versão, palavras-chave, licença, copyright), a lista de pacotes dos quais o projeto depende tanto para desenvolvimento quanto execução, uma lista de  do projeto, scripts entre outras opções.
  * **OBS**: Esse arquivo é criado assim que o projeto é iniciado por meio do comando `npm init`.
  * **OBS2**: Esse arquivo já traz a informação de necessidade do JSONServer.
* **Pasta node_modules**
  Local onde ficam os pacotes dos quais o projeto depende. Evite enviar essa pasta para o repositório remoto. Essa pasta é reconstruída toda vez que se executa o comando `npm install`.

**Ambiente de Desenvolvimento (IMPORTANTE)**

> A partir de agora, **NÃO utilizamos mais o LiveServer/FiveServer** durante o processo de desenvolvimento. O próprio JSONServer faz o papel de servidor.

Para iniciar o JSONServer e acessar os arquivos do seu site, siga os seguintes passos:

1. Abra a pasta do projeto dentro da sua IDE (por exemplo, Visual Studio Code)
2. Abra uma janela de teminal e certifique-se que a pasta do terminal é a pasta do projeto
3. Execute o comando `npm install`
   Isso vai reconstruir a pasta node_modules e instalar todos os pacotes necessários para o nosso ambiente de desenvolvimento (Ex: JSONServer).
4. Execute o comando `npm start`
   Isso vai executar o JSONServer e permitir que você consiga acessar o seu site no navegador.
5. Para testar o projeto:
   1. **Site Front End**: abra um navegador e acesse o seu site pela seguinte URL: 
      [http://localhost:3000]()
   2. **Site Back End**: abra o navegador e acesse as informações da estrutura de usuários por meio da API REST do JSONServer a partir da seguinte URL: 
      [http://localhost:3000/usuarios](http://localhost:3000/usuarios)

Ao criar suas estruturas de dados no arquivo db.json, você poderá obter estes dados através do endereço: http://localhost:3000/SUA_ESTRUTURA, tal qual como foi feito com a estrutura de usuários. **IMPORTANTE**: Ao editar o arquivo db.json, é necessário parar e reiniciar o JSONServer.

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar:

* na pasta **`public`,** para os arquivos de front end, mantendo os arquivos **`index.html`**, **`detalhes.html`**, **`styles.css`** e **`app.js`** com estes nomes, e
* na pasta **`db`**, com o arquivo `db.json`.

Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**
