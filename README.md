# image processing api
image processing api nodejs convert image size.


## Installation

Clone the repo `git clone https://github.com/Moemen-Gaballah/image-processing-api.git` and `cd` into it

`npm install`

"start": "nodemon src/server.ts",
"prod": "node dist/server.js",
"build": "npx tsc",
"prettier": "npx prettier --write .",
"jasmine": "jasmine",
"test": "npm run build && npm run jasmine"

run env development `npm run start`

run env production `npm run prod`

run jasmine `npm run jasmine`

run prettier `npm run prettier`

run test `npm run test`

### Done

- [x] Express Server running `http://localhost:3000/`
- [x] Example route `http://localhost:3000/images?filename=palmtunnel.jpg&height=200&width=200`
- [x] add test

### TODO
- [] add more test (unit test).
- [] test more and more manual and unit
- [] upload image to convert it
- [] add cache as redis or use memory server or cache file
- [] etc
- etc...