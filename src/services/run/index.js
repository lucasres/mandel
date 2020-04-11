import { phpParse } from "../parse";
const process = window.require('child_process');
const fs = window.require('fs');
const util = window.require('util');
const path = window.require('path');
const app = window.require('electron').remote.app
const current_path = app.getPath('temp');

const writeFile = util.promisify(fs.writeFile);
const exec = util.promisify(process.exec);
// const ipcRenderer = electron.ipcRenderer;

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
        value = phpParse(value);
        let file_path = path.join(current_path, 'temp.php');
        console.log(file_path);
        await writeFile(file_path,value);
        // let command = `cat ${file_path} | php /home/lucas/source/cev_flow/application/artisan tinker`;
        let command = `docker exec -i cev-flow-php-fpm php artisan tinker < ${file_path}`;
        let rs = await exec(command);
        return rs;
    }
}

export default RunService;