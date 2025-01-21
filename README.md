# AluraGeek - CRUD com JSON Server

Este projeto é um exemplo de um hub de produtos utilizando **HTML**, **CSS** e **JavaScript** para consumo de uma API simulada com o **JSON Server**. Ele é responsivo e permite listar produtos existentes, adicionar novos produtos e atualiza a lista automaticamente.

## Funcionalidades
- **Listar produtos:** Consome o endpoint `GET /products` para exibir uma lista de produtos.
- **Adicionar produto:** Envia dados para o endpoint `POST /products` para criar novos produtos.
- **Responsividade:** Funciona em dispositivos móveis e desktops.

## Requisitos
- Node.js instalado
- Navegador web

## Como rodar o projeto

### 1. Clone o repositório
```bash
git clone https://github.com/nic0oles/challenge-alurageek.git
cd challenge-alurageek
```

### 2. Instale o JSON Server
Caso ainda não tenha o JSON Server instalado globalmente:
```bash
npm install -g json-server
```

### 3. Inicie o servidor JSON
Certifique-se de estar na pasta onde o arquivo `db.json` está localizado e execute:
```bash
json-server --watch db.json --port 3000
```
Isso iniciará o servidor na URL: [http://localhost:3000](http://localhost:3000)

### 4. Abra o projeto no navegador
- Abra o arquivo `index.html` diretamente no navegador ou utilize a extensão **Live Server** no VSCode para evitar problemas de CORS.

## Estrutura do `db.json`
O arquivo `db.json` simula a API REST. Ele segue a estrutura abaixo:
```json
{
  "products": [
    {
      "id": 1,
      "name": "Produto A",
      "price": 100.00,
      "image": "https://via.placeholder.com/150"
    },
    {
      "id": 2,
      "name": "Produto B",
      "price": 200.00,
      "image": "https://via.placeholder.com/150"
    }
  ]
}
```

## Comandos Principais do JSON Server
- **Listar produtos:** `GET /products`
- **Adicionar produto:** `POST /products`
- **Atualizar produto:** `PUT /products/:id`
- **Deletar produto:** `DELETE /products/:id`

## Tecnologias Utilizadas
- **Frontend:** HTML, CSS, JavaScript
- **Backend Simulado:** JSON Server

## Autor
[NICOLE SOARES DOS SANTOS] - Desenvolvedora Frontend

