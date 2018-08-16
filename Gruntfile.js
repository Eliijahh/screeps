module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                email: 'paolo.caponeri@gmail.com',
                password: 'Piergio92!',
                branch: 'default',
                ptr: false
            },
            dist: {
                src: ['dist/*.{js,wasm}'],
            }
        }
    });
}
