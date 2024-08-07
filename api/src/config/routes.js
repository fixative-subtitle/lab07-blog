const index = require('../controllers/index');
const posts = require('../controllers/posts');

const routes = {};

// Connect our controllers to specific base paths.
// For example, actions defined in our posts controller should be available at
// paths beginning with /posts.
routes.connect = (app) => {
  // Use the index controller for /
  app.use('/', index); // this is the route for the index controller
  // TODO: Use the posts controller for /posts
  app.use('/posts', posts) // this is the route for the posts controller
};

module.exports = routes;
