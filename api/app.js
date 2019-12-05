let express = require('express');
let app = express();
let cors = require('cors')
let _player = require('./player');
let _monster = require('./monster')
let Request = require("request");
let _battle = require("./battle")






//


app.get('/',cors(),function(req,res){
    console.log("Begin")

    var player = new _player.Player("Jugador 1")
    var enemy = new _player.Player("Enemigo")
    player.enemy = enemy;
    enemy.enemy = player;


    player.team.push(new _monster.Monster(player,0,"rayquaza",25))
    player.team.push(new _monster.Monster(player,1,"pichu",25))
    player.team.push(new _monster.Monster(player,2,"charmander",25))
    player.team.push(new _monster.Monster(player,3,"lugia",25))
    player.team.push(new _monster.Monster(player,4,"treecko",25))
    player.team.push(new _monster.Monster(player,5,"chikorita",25))

    enemy.team.push(new _monster.Monster(enemy,6,"arbok",25))
    enemy.team.push(new _monster.Monster(enemy,7,"gastly",25))
    enemy.team.push(new _monster.Monster(enemy,8,"totodile",25))
    enemy.team.push(new _monster.Monster(enemy,9,"eevee",25))
    enemy.team.push(new _monster.Monster(enemy,10,"vulpix",25))
    enemy.team.push(new _monster.Monster(enemy,11,"vaporeon",25))


    battle = new _battle.Battle(player, enemy);

    battle.battleStart();
    res.json(battle.report)

})


app.listen(3000, function () {
    console.log('Inicando Servidor');
});


