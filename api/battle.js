
function Battle(player, enemy) {
     this.turn = 1;
     this.round = 1;
     this.report = [];

    this.monsters = [];
    this.player = player;
    this.enemy = enemy;
    this.player.batttle = this
    this.enemy.batttle = this
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
            e.battle = this;
            this.monsters.push(e)
        });
        this.enemy.team.forEach(e => {
            e.battle = this;
            this.monsters.push(e)
        });


        this.report.push(this.getStatus())
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
        this.round = 0;
        this.monsters.forEach(e => {
            continuar = true
            if (e.hp > 0)//esta vivo?
            {
                if (e.owner.enemy.isAlive) {
                    this.round++
                    // console.log("Ronda: "+this.round)
                    e.attack();

                }
            }




        })
        if (this.player.isAlive() && this.enemy.isAlive()) {
            this.turn++;
            this.standByPhase();
        }
        else if (this.player.isAlive()) {
            console.log(this.player.name + " WIN")
            this.report.push({
                class: "end", winner: "player"

            })
            // console.log(this.report)
        }
        else if (this.enemy.isAlive()) {
            console.log(this.enemy.name + "WIN")
            this.report.push({
                class: "end", winner: "enemy"

            })
            // console.log(this.report)
        }

    }
};

module.exports = {Battle:Battle}