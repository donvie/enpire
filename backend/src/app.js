const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('./logger');

const feathers = require('@feathersjs/feathers');
const configuration = require('@feathersjs/configuration');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');


const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');
const channels = require('./channels');

const authentication = require('./authentication');

const sequelize = require('./sequelize');

const app = express(feathers());

// Load app configuration
app.configure(configuration());
// Enable security, CORS, compression, favicon and body parsing
app.use(helmet());
app.use(cors());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
// Host the public folder
app.use('/', express.static(app.get('public')));

// Set up Plugins and providers
app.configure(express.rest());
// app.configure(socketio());
app.configure(socketio(function(io) {
    io.on('connection', function(socket) {
  
      app.service('tapbidsrewards_tbl').find({
        query: {
          $limit: 60,
          active: true,
          $sort: {
            tap_points: 1
          }
        }
      }).then((rewards) => {
        for (var i = 0, len = rewards.data.length; i < len; i += 1) {
          (function(i) {
            let aa =  setInterval(function() {
                var now = new Date().getTime();
                var distance = +rewards.data[i].tap_stop - now;
            
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
                socket.emit(rewards.data[i].pk, {
                  reward_id: rewards.data[i].pk,
                  index: i,
                  timeRemaining: `${hours} hours ` + `${minutes} minutes ` + `${seconds} seconds `
                });
            
                if (distance < 0) {
                  socket.emit(rewards.data[i].pk, {
                    reward_id: rewards.data[i].pk,
                    index: i,
                    timeRemaining: 'Reward Ended!'
                  });
                  clearInterval(aa);
                }
              }, 1000)
          })(i);
        }
      }).catch(error => {
        console.error(error)
      })
  
    });
  
    io.use(function (socket, next) {
      socket.feathers.referrer = socket.request.referrer;
      next();
    });
  }));

app.configure(sequelize);

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
app.configure(authentication);
// Set up our services (see `services/index.js`)
app.configure(services);
// Set up event channels (see channels.js)
app.configure(channels);

// Configure a middleware for 404s and the error handler
app.use(express.notFound());
app.use(express.errorHandler({ logger }));

app.hooks(appHooks);

module.exports = app;
