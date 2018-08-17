module.exports = {

    main(creep) {

        if(creep.carry.RESOURCE_ENERGY == creep.carryCapacity) {
            //TODO go back and unload
        } else {

            //Identify the the sources in the room with energy equal or more than the harvester capacity and then searches for the
            //closest source
            var sources = [];
            var assigned_resource;

            sources = creep.room.find(FIND_SOURCES).filter(source => source.energy >= creep.carryCapacity);

            //find closest source and check if it has a free spot next to it
            var target = creep.pos.findClosestByPath(FIND_SOURCES, sources)

            if(creep.pos.getRangeTo(target) <= 1) {
                creep.harvest(target, );
            } else {
                creep.moveTo(target);
            }
        }

    }
}
