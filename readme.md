# ow-lite

> Lightweight replacement for the [ow](https://github.com/sindresorhus/ow) validation library meant for browser usage.

## Install

```bash
npm install ow-lite-ts
```

> fork from [ow-lite](https://github.com/transitive-bullshit/ow-lite)

    try make support for typescript, but ... feel sad ... can't make it fully support

## Why

`ow-lite` supports the most practical `ow` usage and is **30x smaller**, which is really important for **browser usage**.

| Library        | Size      | Minified | GZip    |
|:---------------|:----------|:---------|:--------|
| `ow@0.5.0`     | 119.61kb  | 65.95kb  | 17.58kb |
| `ow-lite`      | 6kb       | 2.2kb    | 903b    |


`ow-lite` has the following drawbacks:

- less verbose error messages
- less support for uncommon types and predicate methods

## Usage

You may use `ow-lite` as a mostly drop-in replacement for `ow`. It supports the following types:

- number
- string
- object

Webpack's [resolve.alias](https://webpack.js.org/configuration/resolve/#resolve-alias) is a solid option for replacing `ow` with `ow-lite` at build time. See also [ow-shim](https://github.com/transitive-bullshit/ow-shim) if you want to replace `ow` usage with noops in production.

## Related

- [ow](https://github.com/sindresorhus/ow) - Function argument validation for humans.
- [ow-shim](https://github.com/transitive-bullshit/ow-shim) - Drop-in replacement to make the ow validation library a noop in production.

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
