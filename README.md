# Steps to reproduce

## production build

1 - build the app and start in prod

```
pnpm run build
pnpm start
```

2 - go to http://localhost:3000

-> refresh the page: the number stays the same, cache is working

3 - go to http://localhost:3000/enable to enable devmode

4 - go back to http://localhost:3000

-> refresh the page: the number changes every time, no errors !

## dev mode

1 - start the ap in dev mode

`pnpm run dev`

2 - go to http://localhost:3000

-> refresh the page: the number stays the same, cache is working

3 - go to http://localhost:3000/enable to enable devmode

4 - go back to http://localhost:3000

-> error `Error: Route "/": Uncached data was accessed outside of <Suspense>.`
