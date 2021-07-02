# Amazon Product Page Gallery

> Project description

## Related Projects

  - https://github.com/Zheng-Yi-Sao/ProductInformation
  - https://github.com/Zheng-Yi-Sao/ProductOverview
  - https://github.com/Zheng-Yi-Sao/CustomerReviews

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### Seeding DB

From within the root directory:
```sh
npm run db-seed
```

## API Endpoints

- **POST** `/images`
- **GET** `/images/${productId}`
- **PUT** `/images/${productId}`
- **DELETE** `/images/${productId}`
