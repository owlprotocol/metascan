# React Starter Project
Built with https://www.sitepoint.com/react-with-typescript-best-practices/

Leo's React starter project.
After working on many React projects, I've decided to fork all new projects from this starter repo. Created with create-react-app + additional features using eslint + flow. Husky enables pre-commit formatting/tests ensuring consistent styling. Also featured quick deployment using gh-pages.

## Getting Started

## Installing

If you are new to React follow these steps.
To install all required dependencies.

```
$ yarn
```

## Cloning

To clone this starter repo and add it as an upstream folow below:

```
$ git clone https://github.com/leovigna/react-starter-ts.git myproject
$ cd myproject
$ git remote set-url origin https://github.com/leovigna/myproject.git
$ git remote add upstream https://github.com/leovigna/react-starter-ts.git
$ git push origin master
$ git push --all
```

Then to sync any new changes form this repo to the new repo follow [this](https://help.github.com/en/articles/syncing-a-fork):

```
$ git fetch upstream
$ git checkout master
$ git merge upstream/master
```

## Dependencies

Install dependencies, including devDependencies.

```
$ yarn -D
```

- [Husky](https://github.com/typicode/husky) - Prevent bad commits

### Testing

```
$ yarn test
```

### Deployment

```
$ yarn deploy
```

### Codestyle

```
$ yarn lint
```

### Also used

## Contributing

To contribute code, feel free to fork this repo.

## License

2019 Leo Vigna
MIT License.
