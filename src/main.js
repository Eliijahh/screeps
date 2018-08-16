require('version')
if(!Memory.SCRIPT_VERSION || Memory.SCRIPT_VERSION != SCRIPT_VERSION) {
    Memory.SCRIPT_VERSION = SCRIPT_VERSION
    console.log('New code uploaded. Version: ' + Memory.SCRIPT_VERSION)
}

console.log("Happy yes!")
