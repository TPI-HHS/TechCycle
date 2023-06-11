# WA-2022-group-4
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the needed packages from NPM in the source folder of the project. (Where package.json / package-lock.json is located.)

```bash
npm install
# or 
yarn install
# or 
pnpm install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/products.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Development for Tech Cycle (Web Applications HHS)

Now you should be good to go:
1. Open a terminal on the root folder of the project
2. Install the NPM packages by running: `npm install`
3. Setup your environment variables (see the section below)
3. Start the website by running: `npm run dev`
4. Open your browser with the url http://localhost:3000

As you start editing components you'll see the realtime changes in your browser.

Before pushing changes to git you should check whether the build runs successfully. This can be done by running the
following command in your terminal on the root folder: `npm run build`. This will generate a static website with all the
pages. In case of any errors the build will stop and point out what's wrong.

## Environment variables

The environment variables are used to configure the website. The following variables are available: 

An example of the environment variables can be found below:

```dotenv
NEXT_PUBLIC_BACKEND_HOST_URL=
```

Fill in the variables with the correct values. The variables are used as follows:

- NEXT_PUBLIC_BACKEND_HOST_URL: The URL of the backend server. This is used to make requests to the backend.


These variables can be set in the following files:
### **Defaults**
- **DO NOT ADD SECRETS TO THIS FILE. This is a good place for defaults.**
- `.env.development`: This file is used for local development.
- `.env.production` This file is used for production builds.
### **Secrets**
- **DO NOT COMMIT THIS FILE TO GIT. This is a good place for secrets.**
- `.env.development.local`: This file is used for local development
- `.env.production.local`: This file is used for production builds.

For more information about environment variables see: https://nextjs.org/docs/basic-features/environment-variables

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
