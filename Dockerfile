FROM node:23.9.0-alpine

WORKDIR /app

# copy folders
COPY ./node_modules /app/node_modules
COPY ./.next /app/.next
COPY ./public /app/public
# copy files
COPY ./.env /app
COPY ./package-lock.json /app
COPY ./package.json /app
COPY ./next.config.ts /app

RUN ls -la /app

# # copy all files from current directory to /app in the container
# COPY . /app

# # install dependencies
# RUN npm install
# # build the app
# RUN npm run build
# # remove all files except node_modules, .next, .env, package.json, package-lock.json, public, and next.config.js
# RUN find . -maxdepth 1 ! -name 'node_modules' ! -name '.next' ! -name '.env' ! -name 'package.json' ! -name 'package-lock.json' ! -name 'public' ! -name 'next.config.ts' ! -name '.' ! -name '..' -exec rm -rf {} \;
# # remove the cache folder inside the .next folder, if it exists
# RUN rm -rf .next/cache

EXPOSE ${NEXT_PUBLIC_APP_PORT}

CMD ["npm","run","start"]