# text-normalizer for URL creation

<img align="right" src="https://github.com/yarnpkg/assets/blob/master/yarn-kitten-full.svg?raw=true" height="150px" alt="the yarn kitten">

Ultralight, non-dependent and minimalist open-source package to create Unicode Normalization Form of string for URL creation and text sanitization.

```js
const normalizer = require("text-normalizer");

normalizer.normalize("string");
```
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/) 
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/louisbrulenaudet/text-normalizer/issues)
![npm version](https://img.shields.io/npm/v/text-normalizer)

## Features

- Low memory usage
- Executable for generating applications quickly
- Simple deployment with one-line integration

## Tech Stack

**Server:** Node, Express

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the [npm](https://www.npmjs.com/) & [yarn](https://yarnpkg.com/?q=open-sri) registries.

Before installing, [download and install Node.js](https://nodejs.org/en/download/). Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file). Then:

```bash
  npm i text-normalizer
  yarn install text-normalizer
```

## Importing

```js
// Using Node.js 'require()'
const normalizer = require('text-normalizer');
```

## Usage/Examples

```javascript
const normalizer = require('text-normalizer');

normalizer.normalize("égrgr^''gèk3");
```

```javascript
egrgrgek3
```
Clean URLs (also known as friendly URLs, pretty URLs, search-engine friendly URLs or RESTful URLs) are web addresses or uniform resource locators (URLs) designed to improve the usability and accessibility of a website, web application or web service by being immediately and intuitively understandable to non-expert users.

## License

Copyright (c) 2022 Louis Brulé Naudet <contact@louisbrulenaudet.com>.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Feedback

If you have any feedback, please reach out to us at contact@louisbrulenaudet.com.
