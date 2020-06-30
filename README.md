## Getting Started

- Run Locally
- Run `npm install` or `yarn install` if you use [Yarn](https://yarnpkg.com/en/)
- Run `npm run dev` or `yarn serve` to start a local development server

- To Deploy to github pages
- In the vue.config.js update

```
  publicPath: process.env.NODE_ENV === 'production'
    ? '/<your-repo-name-here>/'
    : '/'

```

- In the deploy.sh

```
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:<your-github-username>/<your-github-repo>.git master:gh-pages

cd -

```

- In terminal you will need to run `bash deploy.sh`

- Make sure you update the snippet and links specific to your env
