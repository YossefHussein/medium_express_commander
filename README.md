Basic middleware creation:

```
build-middleware create myMiddleware
```

Create route-specific middleware:

```
build-middleware create authMiddleware --type route
```


Specify custom output directory:

```
build-middleware create logger --dir src/custom-middlewares
```
Combine options:

```
build-middleware create apiLogger --type route --dir src/middlewares
```

Show version:

```
build-middleware --version
```

Show help:


```
build-middleware --help
```