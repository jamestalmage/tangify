tangify
=======
[tang](https://github.com/jamestalmage/tang) transforms for your browserify build


install
-------
```
npm install --save-dev tang tangify
```


usage
-----
```
browserify: {
  debug: true,
  extensions : ['.js', '.coffee'],
  transform : [
    ['coffeeify', {sourceMap:true}],
    ['tangify', {sourceMap:true}]
  ]
}
```
Browse the [github repo](https://github.com/jamestalmage/tangify) for more thorough examples.
