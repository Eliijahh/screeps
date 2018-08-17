var harvester = require("creeps_harvester");

module.exports = {

    main() {
        for(var i in Game.creeps) {
            switch (Game.creeps[i].memory) {
                case 'harvester': harvester.main(Game.creeps[i]);
                    break;
            }
        }
    }
}
