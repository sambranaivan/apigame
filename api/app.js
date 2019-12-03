let express = require('express');
let app = express();
var cors = require('cors')
var _type = require('./type')
var _pokedex = require('./pokedex');
var pokedex = _pokedex.pokedex
let Request = require("request");
function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var turn = 1;
var round = 1;
report = [];

var EFECTIVIDAD = _type.EFECTIVIDAD
var TYPE = _type.TYPE
var E_TYPE = _type.eng_type




//



function Player(name) {
    this.team = [];
    this.name = name;
    this.isAlive = function () {

        var status = false
        this.team.forEach(e => {
            if (e.hp > 0) {
                status = true;
            }
        })
        return status
    }
    this.status = function () {

        var alive = this.team.filter(x => x.hp > 0).length;
        // console.log(this.name+"("+alive+"/"+this.team.length+")")

    }

    this.enemy;
}


function Monster(owner,index,name,level) {
    var data = pokedex[name];
    

    this.owner = owner
    this.speed = data.baseStats.spd;
    this.atk = data.baseStats.atk
    this.def = data.baseStats.def
    this.level = level
    this.hpMax = Math.ceil(data.baseStats.hp * (level / 10));
    this.hp = Math.ceil(data.baseStats.hp * (level / 10));
    this.attackType = E_TYPE[data.types[0]];
    this.defenseType = E_TYPE[data.types[0]];
    this.name = name
    this.index = index
    this.sprite = data.num
    this.status = 1;

    this.toJson = function(){
        return {
            owner: this.owner.name,
            speed: this.speed,
            atk: this.atk,
            def: this.def,
            hpMax: this.hpMax,
            hp: this.hp,
            attackType: this.attackType,
            defenseType: this.defenseType,
            level: this.level,
            name: this.name,
            index: this.index,
            sprite:this.sprite,
            status:this.status
    }}

    //
    this.attack = function () {
        /**select target */


        target = this.owner.enemy.team.reduce((prev, current) => (prev.hp > current.hp) ? prev : current)
        target.onTarget(this);//trigger on target Effect
        if (target.hp > 0) {
            // console.log("\t" + "(" + this.owner.name + ")" + this.name + " attacks " + "(" + target.owner.name + ")" + target.name + " hp:" + target.hp);

            //damage step
            type_bonus = (EFECTIVIDAD[this.attackType][target.defenseType]);
            // console.log(this.attackType+" "+target.defenseType)
            // console.log
            variacion = randomIntFromInterval(85, 100);
            dmg = 0.01 * 1 * type_bonus * variacion * ((0.2 * this.level + 1) * this.atk * 100 / (25 * target.def))
            dmg = Math.ceil(dmg)
            if (dmg < 0) { dmg = 1 }
            target.getDamage(dmg)

            report.push({
                class: "battle",
                turn: turn,
                round: round,
                atacante: this.index,
                defensor: target.index,
                withType: this.attackType,
                dmg: dmg,
                hpleft: target.hp,
                status:battle.getStatus()

            })
        }
        else {
            // ya esta muerto
        }

    }
    this.onTarget = function () {
        //TODO
    }
    this.getDamage = function (dmg) {
        this.hp -= dmg;
        if (this.hp <= 0) {
            this.hp = 0;
            this.status = 0;
            //  console.log("\t\t"+this.name+" defeated")

        }
        // console.log("hp left: "+this.hp)
    }
}

//

function Battle(player, enemy) {


    this.monsters = [];
    this.player = player;
    this.enemy = enemy;
    this.getStatus = function(){
        let status = [];
        this.player.team.forEach(e => {
            status.push(e)
        });
        this.enemy.team.forEach(e => {
            status.push(e)
        });

        let reduce = [];
        status.forEach(e => {
            reduce.push(e.toJson())
        })

        return reduce;

    }

    this.battleStart = function () {
        this.player.team.forEach(e => {
            this.monsters.push(e)
        });
        this.enemy.team.forEach(e => {
            this.monsters.push(e)
        });


        report.push(this.getStatus())
        this.standByPhase();

    }
    this.standByPhase = function () {
        this.monsters.sort((a, b) => (a.speed < b.speed) ? 1 : -1)

        // console.log("Turn: "+this.turn)
        this.player.status();
        this.enemy.status();
        this.battlePhase();
    }

    this.battlePhase = function () {
        round = 0;
        this.monsters.forEach(e => {
            continuar = true
            if (e.hp > 0)//esta vivo?
            {
                if (e.owner.enemy.isAlive) {
                    round++
                    // console.log("Ronda: "+this.round)
                    e.attack();

                }
            }




        })
        if (this.player.isAlive() && this.enemy.isAlive()) {
            turn++;
            this.standByPhase();
        }
        else if (this.player.isAlive()) {
            console.log(this.player.name + " WIN")
            report.push({
                class: "end", winner: "player"

            })
            // console.log(report)
        }
        else if (this.enemy.isAlive()) {
            console.log(this.enemy.name + "WIN")
            report.push({
                class: "end", winner: "enemy"

            })
            // console.log(report)
        }

    }
};

app.get('/',cors(),function(req,res){
    console.log("Begin")

    var player = new Player("Jugador 1")
    var enemy = new Player("Enemigo")
    player.enemy = enemy;
    enemy.enemy = player;


    player.team.push(new Monster(player,0,"raichu",25))
    player.team.push(new Monster(player,1,"pichu",25))
    player.team.push(new Monster(player,2,"charmander",25))
    player.team.push(new Monster(player,3,"lugia",25))
    player.team.push(new Monster(player,4,"treecko",25))
    player.team.push(new Monster(player,5,"chikorita",25))

    enemy.team.push(new Monster(enemy,6,"arbok",25))
    enemy.team.push(new Monster(enemy,7,"gastly",25))
    enemy.team.push(new Monster(enemy,8,"totodile",25))
    enemy.team.push(new Monster(enemy,9,"eevee",25))
    enemy.team.push(new Monster(enemy,10,"vulpix",25))
    enemy.team.push(new Monster(enemy,11,"vaporeon",25))


    battle = new Battle(player, enemy);

    battle.battleStart();
    res.json(report)

})

app.listen(3000, function () {
    console.log('Inicando Servidor');
});


