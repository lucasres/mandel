const process = window.require('child_process');
// const ipcRenderer = electron.ipcRenderer;

const RunService = {
    exec: async (value) => {
        //ipcRenderer.send('run','ds');
        let command = `echo "${value}" | php /home/lucas/source/cev_flow/application/artisan tinker`;
        return process.execSync(command);
    }
}

export default RunService;