var Game = require('../models/game_model.js');
var Team = require('../models/team_model.js');
var Player = require('../models/player_model.js');
var gameController = {};

gameController.GET = (req, res) => {
  res.send('i am in game controller!');
};

function makeid() {
  var secretpw = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (var i = 0; i < 5; i++) {
    secretpw += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return secretpw;
}

gameController.POST = (req, res) => {
  var secretpw = makeid();
  var location = req.body.location;
  var game = Game.build({ time: req.body.time, token: secretpw, location: location, active: true });
  var team1 = Team.build({ count: 1 });
  var team2 = Team.build({ count: 0 });
    var player = Player.build({
      arrivalTime: req.body.time,
      active: false,
      queued: true,
      name: req.body.name,
      admin: true,
    });
  game.save().then(function () {
      team1.save().then(function () {
        this.setGame(game);
        player.save().then(function () {
          this.setGame(game);
          this.setTeam(team1);
        });
      });

      team2.save().then(function () {
        this.setGame(game);
      });
  });

    var obj = {};
    obj.player = player;
    obj.team1 = team1;
    obj.team2 = team2;
    obj.game = game;
    res.send(obj);

};

module.exports = gameController;

