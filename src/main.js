require('version')
if(!Memory.SCRIPT_VERSION || Memory.SCRIPT_VERSION != SCRIPT_VERSION) {
    Memory.SCRIPT_VERSION = SCRIPT_VERSION
    console.log('New code uploaded. Version: ' + Memory.SCRIPT_VERSION)
}

var creeps_role_distributer = require("creeps_roles_distributer");
var creeps_factory = require ("creeps_factory");

//check if new creeps are required and builds them
creeps_factory.main();
//distributes each creep to the actions required by its role
creeps_role_distributer.main();
