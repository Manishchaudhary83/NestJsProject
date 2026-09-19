FROM node:22-alpine

WORKDIR /app

#Enable Corepack to use pnpm automatically
RUN corepack enable && corepack prepare pnpm@latest --activate

#Copy dependency manifests
COPY package.json pnpm-lock.yaml ./

#nstall dependencies using pnpm
RUN pnpm install

#Copy the rest of your NestJS source code
COPY . .

#Build your NestJS TypeScript code into JavaScript (creates /dist)
RUN pnpm run build

#Open the port matching your NestJS configuration
EXPOSE 8000

#Run the compiled application directly with Node for production
CMD ["node", "dist/main.js"]
