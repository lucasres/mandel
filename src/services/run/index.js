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



const RunService = {
    exec: async (value) => {
        let config_state = store.getState();
        let file_name = '';
        let current = config_state.current_type;
        if(config_state.current_type === 'laravel'){
            value = phpParse(value);
            file_name = 'temp.php';
        } else {
            throw new Error('not implemented');
        }
        let file_path = path.join(current_path, file_name);
        await writeFile(file_path,value);
        // let command = `cat ${file_path} | php /home/lucas/source/cev_flow/application/artisan tinker`;
        let command = config_state[current].command.replace('{file_path}',file_path);
        let rs = await exec(command);
        return rs;
    }
}

export default RunService;