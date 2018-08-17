module.exports = {

    var creeps_harvester = require('creeps_harvester')

    main() {
        for(var i in Game.creeps) {
            switch (Game.creeps[i].memory) {
                case 'harvester': creeps_harvester.main(Game.creeps[i]);
                    break;
            }
        }
    }
}
