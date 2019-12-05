
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

module.exports = {Player:Player}