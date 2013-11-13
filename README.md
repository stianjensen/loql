loql
====

Runs a local development server on a custom domain. (Note: OS X only).

By running the following command, the current directory will be served at `http://name.dev`.

```
loql name
```

Just type `name.dev/` in your browser. This way, you won't have to mess with `http://localhost:8888` anymore.

# Setup

```
$ npm install -g loql
```

Now, whenever you run loql your directory will be served, until you stop it again with `ctrl-C`.

# About

This project depends on the following projects:

- [local-tld](https://github.com/hoodiehq/local-tld)
- [connect](https://github.com/senchalabs/connect)

**Note:** Local-tld will not work well with other vhosts
