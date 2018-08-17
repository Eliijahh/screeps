module.exports = {

    main() {

        var harvesters = [];
        for(var i in Game.creeps) {
            if(Game.creeps[i].memory.role == 'harvester') {
                harvesters.push(Game.creeps[i])
            }
        }

        if(harvesters.length < 3 && Game.spawns['Spawn 1'].energyAvailable >= 200) {
            Game.spawns['Spawn 1'].spawnCreep([WORK, CARRY, MOVE], "Bruno" + Game.time.toString(), {memory: {role: "harvester"}});
        }

    }
}
