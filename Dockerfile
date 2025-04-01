FROM node:latest

WORKDIR /app

# copy all files from current directory to /app in the container
COPY . /app

# install dependencies
RUN npm install
# build the app
RUN npm run build
# remove all files except node_modules, .next, .env, package.json, package-lock.json, and public
RUN find . -maxdepth 1 ! -name 'node_modules' ! -name '.next' ! -name '.env' ! -name 'package.json' ! -name 'package-lock.json' ! -name 'public' ! -name '.' ! -name '..' -exec rm -rf {} \;

EXPOSE ${NEXT_PUBLIC_APP_PORT}

CMD ["npm","run","start"]