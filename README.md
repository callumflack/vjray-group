# vjray-group

Group website of VJ Ray. Uses Next.js.

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

Next doesn't require a config, but one has been made to use MDX.

Run in terminal and the exported site will be saved in `out/`:

```sh
npm run export
```

## Now v2

To deploy, run `now` in the project root.

This gives a random URL. To attach it to a dev URL, run `now --target staging`.

If you wish to alias to the live site, run `now now --target production`.

(We could set-up the Github hook, but let's keep this project on lockdown.)
