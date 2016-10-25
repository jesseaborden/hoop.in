var rootRouter = require('express').Router();
var gameRouter = require('./game_router.js');
var playerRouter = require('./player_router.js');

rootRouter.use('/newGame', gameRouter);
rootRouter.use('/getPlayers', playerRouter);
rootRouter.use('/newPlayer', playerRouter);
rootRouter.use('/deletePlayer', playerRouter);

module.exports = rootRouter;
