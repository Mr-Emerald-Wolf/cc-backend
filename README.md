<h1 align="center">Welcome to cc-backend 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

## Backend ExpressJS App for ShopCart.

### Backend Created Using 
* NodeJS
* ExpressJS
* Postgres
* JWT 
* Sequelize 

> Users and Products Table Created Using Sequelize CLI 

## Available Routes for Users 

* /users/createUser to create new users
* /users/getUser to fetch all users 
* /users/findUser to fetch a user's info
* /users/updateUser to update a user 
* /users/deleteUser to delete a user
* /users/login to login using JWT a user 

## Available Routes for Products 

* /product/createProduct to create a new product
* /product/getProduct to fetch all products 
* /product/findProduct to fetch a products's info
* /product/updateProduct to update a product 
* /product/deleteProduct to delete a product


## Install

```sh
npm install
```

## Usage

```sh
node index.js
```

## Run tests

```sh
npm run test
```

## Reset database

```sh
npm run db:reset
```

## Author

👤 **Shivam Sharma**

* Website: https://ssharma.netlify.app
* Github: [@Mr-Emerald-Wolf ](https://github.com/Mr-Emerald-Wolf )

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_