require('version')
if(!Memory.SCRIPT_VERSION || Memory.SCRIPT_VERSION != SCRIPT_VERSION) {
    Memory.SCRIPT_VERSION = SCRIPT_VERSION
    console.log('New code uploaded. Version: ' + Memory.SCRIPT_VERSION)
}

var role_distributer = require("role_distributer");
var creep_factory = require ("creep_factory");

//check if new creeps are required and builds them
creep_factory.main();
//distributes each creep to the actions required by its role
role_distributer.main();
