export const phpParse = (value='') => {
    let escaped = value.replace('<?php','').replace('<?','');
    return escaped;
}

export const pythonParse = (value='') => {
    return value.replace(/\t/g,'');
}