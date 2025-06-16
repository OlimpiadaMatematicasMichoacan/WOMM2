# WOMM2

Website de la Olimpiada Michoacana de Matemáticas versión 2 (WOMM2).

La primera versión de la página desarrollada en Jekyll fue lanzada en 2020 y desde entonces ha sido un recurso valioso para los estudiantes de matemáticas en Michoacán. 
Sin embargo, con el tiempo, la tecnología ha avanzado y hemos decidido actualizar la página a una versión más moderna.
Utilizando tecnologías modernas como React, Vite y Tailwind CSS, esta versión es más rápida y fácil de mantener.

### Instalación

```
$ pnpm install
```

### Local

```
$ pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Despliegue

Using SSH:

```
$ USE_SSH=true pnpm deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> pnpm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
