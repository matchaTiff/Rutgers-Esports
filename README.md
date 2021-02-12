# Rutgers Esports New Website

> This repository hosts the code for the new website built to replace [the old Rutgers Esports website](http://rutgersesports.com). 

## Table of Contents
- [Contribution Guide](#contribution-guide)
    - [Getting Started](#getting-started)
    - [Run locally](#run-locally)
    - [Making a Pull Request](#making-a-pull-request)
    - [Linting](#linting)

## Contribution Guide
> The following guide was written by [matchaTiff](https://github.com/matchaTiff).

### Getting Started
* Download [Visual Studio Code](https://code.visualstudio.com/).
* Download these extensions:
    * [Babel Javascript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel)
    * [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    * [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)
    * [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    * **OPTIONAL:** [Colorize](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize)
        * **Warning**. This extension may have issues with the linter.
* Download React: `npm i react`.
    * If you don't have experience with react, start by making your own test app first and experiment with it. [Here's a tutorial.](https://reactjs.org/tutorial/tutorial.html)

### Run locally
1. Clone: `git clone https://github.com/matchaTiff/Rutgers-Esports.git`
2. `npm i`
3. `npm run prep` (this downloads large files such as videos)
4. `npm start`


### Making a Pull Request
> The following steps assume you are a contributor. We are not taking pull requests from developers outside of the Rutgers Esports tech committee at the moment.

1. Clone the project if you haven't already. `git clone https://github.com/matchaTiff/Rutgers-Esports.git`
2. Switch to a new branch. `git checkout -b my-awesome-new-feature`
3. Code your cool feature!
4. [Run](#run-locally) and test your feature.
5. Stage, commit, and push your files:
```
git add <changed-files...>
npm run lint
git commit -m "Cool new commit for my cool new feature"
git push origin <my-awesome-new-feature>
```
6. `git` will output a link to help you create a new pull request from there.

### Linting
* This project uses ESLint to maintain and enfore code quality.
    * Specifically, this linter extends airbnb's ESLint configuration with some rule adjustments and additions.
* Before you commit code, run ESLint by running `npm run lint`. This will ensure that any newly written code matches a set of style rules.
* `husky` and `lint-staged` will prevent you from pushing code with issues by running the linter before allowing you to commit code.

# React README

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
