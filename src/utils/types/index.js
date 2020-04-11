export const DEFAULT_TYPES = {
    laravel: {
        config: {
            command: 'cat {file_path} | php {project_path}/artisan tinker',
        }
    },
    django:{
        config:{
            command: 'python3 {project_path}/manage.py shell < {file_path}'
        }
    }
}