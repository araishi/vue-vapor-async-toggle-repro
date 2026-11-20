# Vapor hydration: a lazy component under `v-if` does not come back

```sh
npm install
npm run dev
```

Open http://localhost:5173 and click **toggle** twice.

- Expected: the list (`a`, `b`) disappears, then comes back.
- Actual: it disappears and does not come back. No warning.

The files that matter are in `src/`:

- `App.vue`: a button and `<Panel :open="open" />`.
- `Panel.vue`: `<List v-if="open" />`, where `List` is `defineVaporAsyncComponent(() => import('./List.vue'))`.
- `List.vue`: `<p v-for="item in items" :key="item">`.

With `import List from './List.vue'` in `Panel.vue` instead, the list comes back.
