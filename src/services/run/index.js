import { phpParse } from "../parse";
import store from "../../store";
const process = window.require('child_process');
const fs = window.require('fs');
const util = window.require('util');
const path = window.require('path');
const app = window.require('electron').remote.app
const current_path = app.getPath('temp');
const writeFile = util.promisify(fs.writeFile);
const exec = util.promisify(process.exec);
// const ipcRenderer = electron.ipcRenderer;

String.prototype.formatUnicorn = String.prototype.formatUnicorn || function () {
    "use strict";
    var str = this.toString();
    if (arguments.length) {
        var t = typeof arguments[0];
        var key;
        var args = ("string" === t || "number" === t) ?
            Array.prototype.slice.call(arguments)
            : arguments[0];

        for (key in args) {
            str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
        }
    }

    return str;
};

const RunService = {
    // exec: async (value) => {
    //     value = phpParse(value);
    //     let file_path = path.join(current_path, 'temp.php');
    //     await writeFile(file_path,value);
    //     let command = `cat ${file_path} | php /home/lucas/source/cev_flow/application/artisan tinker`;
    //     // let command = `cat ${file_path} | docker exec sso-server-php-fpm php artisan tinker`;
    //     console.log(command);
    //     return process.execSync(command);
    // }
    exec: async (value) => {
        let config_state = store.getState();
        value = phpParse(value);
        let file_path = path.join(current_path, 'temp.php');
        await writeFile(file_path,value);
        // let command = `cat ${file_path} | php /home/lucas/source/cev_flow/application/artisan tinker`;
        let command = config_state.command.replace('{file_path}',file_path);
        let rs = await exec(command);
        return rs;
    }
}

export default RunService;