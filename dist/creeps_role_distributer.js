module.exports = {

var harvester = require('harvester')

    main() {
        for(var i in Game.creeps)
            switch (Game.creeps[i].memory) {
                case 'harvester': harvester.main(Game.creeps[i]);
                    break;
            }
        }



}
