## Things I learn from project

#### Watchers can watch `route`:

```
const route = useRoute()

watch(route, () => {
   // do something with route
})
```

#### How to use `.env` variable in VITE
- Vite exposes env variables on the special `import.meta.env` object

```
import.meta.env.VITE_API_BASE_URL
```

#### How to use Vuex

