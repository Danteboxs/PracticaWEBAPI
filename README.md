# Nodepop
Power By
[![N|Solid](https://divioag2017-live-e9fe0b8244c24280878375-8ae4759.divio-media.net/filer_public_thumbnails/filer_public/c6/bf/c6bf8cc8-22cc-44ff-a142-bb1201a27617/nodejs-logo-small.png__800x450_q90_crop_subsampling-2.png)](https://nodejs.org/es/)

Nodepop es un ejemplo de api-rest-full. (Proyecto practica ejemplo de Api con MongoDB)

  - Insert
  - Update
  - Delete
  - Select
  - Web Interface

# Version Inicial (0.1)

  - Metodos Básicos mantenimiento productos.
 
> Desarrollado por Santiago Rodríguez ([danteboxs]), fundamentos 
> nodejs como práctica del curso BootCampWeb de KeepCoding.
### Tecnologías

NodePop usa las siguientes tecnologías:

* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]

Código disponible en [repositorio][nodepop] on GitHub.
Generado con: [dillinger]

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd dillinger
$ npm install -d
$ node app
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

### Plugins

Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| Github | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |


### Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app
```

Second Tab:
```sh
$ gulp watch
```

(optional) Third:
```sh
$ karma test
```
#### Building for source
For production release:
```sh
$ gulp build --prod
```
Generating pre-built zip archives for distribution:
```sh
$ gulp build dist --prod
```
### Docker
Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd dillinger
docker build -t joemccann/dillinger:${package.json.version}
```
This will create the dillinger image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart="always" <youruser>/dillinger:${package.json.version}
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8000
```

#### Kubernetes + Google Cloud

See [KUBERNETES.md](https://github.com/joemccann/dillinger/blob/master/KUBERNETES.md)


### Todos

 - Write MORE Tests
 - Add Night Mode

License
----

GNU General Public License v3.0


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [danteboxs]: <https://github.com/Danteboxs/>
   [nodepop]: <https://github.com/Danteboxs/PracticaWEBAPI>
   [dillinger]: <https://dillinger.io/>
   [express]: <http://expressjs.com>
   [node.js]: <http://nodejs.org>