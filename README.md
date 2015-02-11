# generator-command [![Build Status](https://secure.travis-ci.org/cladera/generator-bin.png?branch=master)](https://travis-ci.org/cladera/generator-bin)

Generate command-line toolkits with NodeJS. Based on project [nomnom](https://github.com/harthur/nomnom).

## Getting Started


### Command-line Generators

To install generator-bin from npm, run:

```bash
npm install -g generator-bin
```

#### Generate a new toolkit

```bash
yo bin my-tools
```

#### Generate a new command

```bash
yo bin:command test
```

### Execute your toolkits' commands


```bash
node my-tools.js test
```
If you want to execute directly your toolkit yo can change toolkit file's permissions:

```bash
chmod +x my-tools.js
```

And then

```bash
./my-tools.js test
```


## License

MIT
