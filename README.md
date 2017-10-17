# vjray-group

Offical group website of vjray.



## Set up

This repository contains react.js components from [vjray-shared-components](https://github.com/BarryPH/vjray-shared-components) as a git submodule.

To clone this repo along with it's submodules run:

```sh
git clone --recursive repo_url
```

If you have already cloned the repo but are missing the submodules run:

```sh
git submodule update --init
```

## Exporting to static build

Only pages listed in the next.config.js exportPathMap will be exported

In one terminal run:

```sh
npm run dev
```

In another run:

```sh
npm run build
npm run export
```

The exported site will be saved in out/
