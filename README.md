## Getting Started

### Fork and copy to your own repo

1. Fork the `pendo-vuetify-app` repo

2. Open Terminal

3. Create a bare clone of of the repo

- `$ git clone --bare git@github.com:<your-user-name>/pendo-vuetify-app.git`

4. Create a new repo

5. Mirror-push to the new repository.

- `$ cd pendo-vuetify-app.git`
- `$ git push --mirror git@github.com:<your-user-name>/<your-new-repo>.git`

5. Remove the temporary local repository you created earlier.

- `$ cd ..`
- `$ rm -rf pendo-vuetify-app.git`

### Code in the app that needs to be updated

1. Update the app for you environment and subscription

2. In the index.html file add you snippet inside the script tags

3. Add or change user data that will be used to identify the user located in the `src/user-data/user-data.json`

4. In the Drawer.vue component

- `teamEnvUrlAndSubLink` computed property add your `baseUrl` and `subId`
- `teamEnvUrlAndSub` computed property add your `teamEnv` and `subName`

5. In the Footer.vue component

- `teamEnvUrlAndSubLink` computed property add your `baseUrl` and `subId`
- `teamEnvUrlAndSub` computed property add your `teamEnv` and `subName`

### Run Locally

- Run `npm install` or `yarn install` if you use [Yarn](https://yarnpkg.com/en/)
- Run `npm run dev` or `yarn serve` to start a local development server

### Deploy to github pages

1. In the vue.config.js update

```
  publicPath: process.env.NODE_ENV === 'production'
    ? '/<your-repo-name-here>/'
    : '/'

```

2. In the deploy.sh

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

3. In terminal you will need to run `bash deploy.sh`

- Your github page will be `https://<your-user-name>.github.io/<your-repo-name>/`