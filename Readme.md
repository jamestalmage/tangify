tangify
=======
[tang](https://github.com/jamestalmage/tang) for your browserify build.

[Tang](https://github.com/jamestalmage/tang) provides a series of annotations that make it easier
to test your angular code. See the [tang readme](https://github.com/jamestalmage/tang) to understand what
is possible.

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
