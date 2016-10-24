var Sequelize = require('sequelize');

<<<<<<< 87e68c2847aeb053d931bedb843b0a360e8126d6
var sequelize = new Sequelize('postgres://nhhfsvxl:PmfmyAew57jYcGCbVPbLg2A2n13rEyXD@elmer.db.elephantsql.com:5432/nhhfsvxl');
=======
var sequelize = new Sequelize('postgres://eghnhvmy:4Ux6rwaZSerOqXvyNIX6sgnfVfftpz4B@elmer.db.elephantsql.com:5432/eghnhvmy');
>>>>>>> [fixed]-Using my database url

module.exports = {
  sequelize: sequelize,
};

var Team = require('./models/team_model.js');
var Player = require('./models/player_model.js');
var Game = require('./models/game_model.js');
Team.belongsTo(Game);
Team.hasMany(Player);
Game.hasMany(Team);
Game.hasMany(Player);
Player.belongsTo(Team);
Player.belongsTo(Game);
console.log('i entered even though i exported already');
