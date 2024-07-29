Projeto Prisma com PostgreSQL
Este projeto utiliza o Prisma ORM com um banco de dados PostgreSQL para gerenciar e acessar dados. O esquema define modelos para User, Category, Product, Order, e Item.

Pré-requisitos
Node.js
Yarn
PostgreSQL
Prisma CLI
Configuração do Ambiente
Clonar o repositório

bash
Copiar código
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>
Instalar dependências

bash
Copiar código
yarn install
Configurar o banco de dados

Crie um banco de dados PostgreSQL e defina a variável de ambiente DATABASE_URL com a URL de conexão. A URL deve seguir o formato:

makefile
Copiar código
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
Você pode definir essa variável no arquivo .env na raiz do projeto:

bash
Copiar código
echo "DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE" > .env
Gerar o cliente Prisma

bash
Copiar código
yarn prisma generate
Executar as migrações

bash
Copiar código
yarn prisma migrate dev
Estrutura do Projeto
Modelos
User
id (String, @id, @default(uuid()))
name (String)
email (String)
password (String)
create_at (DateTime?, @default(now()))
updated_at (DateTime?, @default(now()))
Category
id (String, @id, @default(uuid()))
name (String)
create_at (DateTime?, @default(now()))
updated_at (DateTime?, @default(now()))
products (lista de Product)
Product
id (String, @id, @default(uuid()))
name (String)
price (String)
description (String)
banner (String)
create_at (DateTime?, @default(now()))
updated_at (DateTime?, @default(now()))
category_id (String)
category (referência para Category)
items (lista de Item)
Order
id (String, @id, @default(uuid()))
table (Int)
status (Boolean, @default(false))
draft (Boolean, @default(true))
name (String?)
create_at (DateTime?, @default(now()))
updated_at (DateTime?, @default(now()))
itens (lista de Item)
Item
id (String, @id, @default(uuid()))
amount (Int)
create_at (DateTime?, @default(now()))
updated_at (DateTime?, @default(now()))
order_id (String)
product_id (String)
order (referência para Order)
product (referência para Product)
Comandos Úteis
Gerar cliente Prisma após alterações no esquema

bash
Copiar código
yarn prisma generate
Criar uma nova migração

bash
Copiar código
yarn prisma migrate dev --name <NOME_DA_MIGRACAO>
Visualizar o banco de dados com Prisma Studio

bash
Copiar código
yarn prisma studio
Contribuição
Faça um fork do projeto.
Crie uma nova branch para a sua feature (git checkout -b feature/nova-feature).
Commit suas mudanças (git commit -m 'Adiciona nova feature').
Envie para o repositório remoto (git push origin feature/nova-feature).
Abra um pull request.
