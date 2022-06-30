# @next-threejs

A simple 3D cube created with WebGL (Three.js), rendered with Next.js SSR (Server Side Rendering)

## Quick start

```js
yarn && yarn dev
```

## Usage

The main purpose of this repository is to show how to implement and render Three.js on Next.js. It also serve as my documentations. Most part of the code is based on [Three.js Journey by Bruno Simon](https://threejs-journey.com/).

It uses orbital controls. Which means you can control the cube. Here is how:

| Control           | Description                                                                |
| ----------------- | -------------------------------------------------------------------------- |
| **_Left Click_**  | You can rotate the cube to wherever the direction you are pointing on      |
| **_Right Click_** | Click and hold the right click to move and change the position of the cube |
| **_Scroll_**      | Scroll out to zoom out, and scroll in to zoom in                           |

## Tech Stack

- Next.js `(12.2.0)`
- Three.js `(0.142.0 - Vanilla, no r3f / react-three-fiber)`
- Material UI `(5.8.6)`
- Node.js `(16.15.1 LTS)`
- Yarn `(1.22.17)`
