# Amazon Product Page Gallery

> This repository is a clone of the Amazon Product Gallery as it relates to the DVD category

![deployed.png](/deployed.PNG)
## Related Projects

  - https://github.com/Zheng-Yi-Sao/ProductInformation
  - https://github.com/Zheng-Yi-Sao/ProductOverview
  - https://github.com/Zheng-Yi-Sao/CustomerReviews

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

You will need to first [seed the database](#seeding-db)
After that, you will need to create a .env file, which links to the product gallery service and overview service. For example:
```sh
GALLERY_IP='ec2.us-east-2.compute.amazonaws.com'
OVERVIEW_IP='ec2.us-east-2.compute.amazonaws.com'
```
The `Gallery_IP` should refer to this service itself, whether localhost or deployed.

if deploying, see [Deployment](#deployment)

if running and developing locally, you can follow these steps in two seperate terminals:
```sh
npm run react-dev
```

After that successfully builds, you can then run

```sh
npm run server-dev
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- MongoDB

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

### Deployment
You will need an Amazon AWS account, with an EC2 instance and also an s3 Bucket.
Next, you must connect to the EC2 instance and load this repository. You will need to create an `.env.aws` file for the build process. It should contain the following, obtained from your AWS bucket:

```sh
AWS_ID=
AWS_SECRET=
AWS_BUCKET=
```

Then, I recommend installing PM2. PM2 is a process manager that can run node scripts on startup, and has multiple features and benefits over starting the processes manually each time. Look into startup script generation from their official documentation.

After, you will simply need to run:
```sh
npm run build
npm run start
```

If you haven't already, you will want to set your EC2 instance to allow traffic on ports 3000-3010.

If everything went well, your service should be live on your EC2 server!