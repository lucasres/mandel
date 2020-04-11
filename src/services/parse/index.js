export const phpParse = (value='') => {
    let escaped = value.replace('<?php','').replace('<?','');
    return escaped;
}