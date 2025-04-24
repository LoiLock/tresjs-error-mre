# Minimal reproducable example for TresJS camera is undefined error when using Vue's `<Transition />` component

> Project uses pnpm for package management

To run the repo:

1. Clone repo
2. `pnpm install`
3. `pnpm dev`

I've removed most things from the project. The canvas is empty, containing only an ambient light, OrbitControls from @tresjs/cientos and a perspective camera with an initial position.

To reproduce the error, go to /globe, wait a bit, and click on "Sprint" at the top. Whilst it doesn't happen every time, it happens often enough to be able to reproduce it at least once every 3 tries. It **ONLY** happens when navigating from /globe to /sprint (or any other route).

`SlideViewLayout.vue` Contains the `RouterView` and `Transition` components. I don't think I'm doing anything weird here since I've nicked it straight from Vue's docs.

Removing `<component />` and getting rid of the `Transition` 100% gets rid of the error.

[Link to video to reproduce](tresjs-error.mp4)
