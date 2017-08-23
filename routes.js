const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes.add('index', '/')
routes.add('meme', '/:name/:phrase/:adjective/:noun/:verb/:descriptive', '/')
routes.add(
  'share',
  '/share/:name/:phrase/:adjective/:noun/:verb/:descriptive',
  'share'
)
