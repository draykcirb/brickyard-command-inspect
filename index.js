/**
 * Created by scott on 16-3-31.
 */

'use strict'

const butil = require('brickyard3/lib/util') // eslint-disable-line

module.exports = {
    register,
    run
}

/**
 *
 * @param {Command} cmd
 * @param {function(Object)} optionsCallback
 */
function register(cmd, optionsCallback) {
    return cmd
        .description('output the runtime object of the plugin')
        .arguments('<program...>')
        .action(function (program) {
            optionsCallback({ program: program })
        })
}

function run(runtime) {
    runtime.config = butil.sortObjectKeys(runtime.config)
    console.log(JSON.stringify(runtime, null, 4))
}
