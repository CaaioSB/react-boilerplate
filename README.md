<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/CaaioSB/PIM2S">
    <img src="https://user-images.githubusercontent.com/34246280/175796578-96089ca0-2ecb-496b-a24c-767e7dca996e.png" alt="Logo" width="200">
  </a>
  
  <h3 align="center">React Boilerplate ⚡</h3>

  <p align="center">
    <br />
    <a href="https://github.com/CaaioSB/react-boilerplate/issues/new">Bug report</a>
    ·
    <a href="https://github.com/CaaioSB/react-boilerplate/issues/new">Request a feature</a>
    ·
    <a href="https://github.com/CaaioSB/react-boilerplate/compare">Collaborate</a>
  </p>
</p>

# Summary

- [Documentation](#documentation)
  - [How to create commits](#how-to-create-commits)

<br />

# Documentation

Below there are some tips to be able to use the boilerplate, if you have doubts, create an issue with the label `question`.

<br />

## How to use root import

A very simple way to import your components is not putting "../../../", the root import simplifies your code.

Assuming the following structure:

```javascript
├── /src
|   ├── /components
|   |    ├── /<ButtonComponent>
|   |    |    ├── <Button>.js
|   |    |    ├── index.js
|   ├── /helpers
|   |    ├── /<constants>.js // export const [...]
|   |    ├── index.js // export * from <constants>.js

```To use the ButtonComponent in any local of your project, just use the following:

```javascript
import React from 'react'

import Button from 'components/ButtonComponent'
import { constants } from 'helpers'

// [...]
```

And congrats, you are using root import in your project.

<br />

## How to create commits

A nice way to push your changes to the repository is using commitzen, it's very simple.

1. After making your changes add them to the changes to be committed using "`git add <file>...`".
2. Use `yarn commit`, `npx commit` or `npm commit` on terminal to enjoy commitzen.
3. Follow the steps provided by cz-cli.
4. Run `git push <remote> <branch>` to send your changes to repository.
5. Done 🎉
