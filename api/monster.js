var _type = require('./type')
var EFECTIVIDAD = _type.EFECTIVIDAD
var TYPE = _type.TYPE
var E_TYPE = _type.eng_type
var _pokedex = require('./pokedex');
var pokedex = _pokedex.pokedex;


especiales = [E_TYPE.AGUA,E_TYPE.DRAGON,E_TYPE.ELECTRICO,E_TYPE.FUEGO,E_TYPE.HIELO,E_TYPE.PLANTA,E_TYPE.PSIQUICO,E_TYPE.SINIESTRO,E_TYPE.HADA]

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Monster(owner,index,name,level) {
    var data = pokedex[name];
    
    this.battle = null;
    this.owner = owner
    this.speed = data.baseStats.spe;
    
    
    this.level = level
    this.hpMax = Math.ceil(data.baseStats.hp * (level / 10));
    this.hp = Math.ceil(data.baseStats.hp * (level / 10));
    this.attackType = E_TYPE[data.types[0]];
    this.defenseType = E_TYPE[data.types[0]];
    if(especiales.indexOf(this.attackType))
    {
        this.atk = data.baseStats.spa
        this.def = data.baseStats.spd
        this.class = "especial"
    }
    else
    {
        this.atk = data.baseStats.atk
        this.def = data.baseStats.def
        this.class = "fisico"
    }
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
            status:this.status,
            class:this.class
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
            dmg = 0.01 * 5 * type_bonus * variacion * ((0.2 * this.level + 1) * this.atk * 100 / (25 * target.def))
            dmg = Math.ceil(dmg)
            if (dmg < 0) { dmg = 1 }
            target.getDamage(dmg)

            this.battle.report.push({
                class: "battle",
                turn: this.battle.turn,
                round: this.battle.round,
                atacante: this.index,
                defensor: target.index,
                withType: this.attackType,
                dmg: dmg,
                bonus:type_bonus,
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

module.exports = {Monster:Monster}