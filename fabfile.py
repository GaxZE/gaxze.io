from fabric.api import *
from fabric.contrib.project import rsync_project

env.use_ssh_config = True
env.hosts = ['garyhawes.co.uk']
project_root = '/usr/share/nginx/gaxze.io'

@task
def deploy_prod():
    setup()
    deploy()
    file_permissions()

def setup():
    local('npm run init')
    local('grunt')
    local('composer install --no-dev --optimize-autoloader')
    local('composer run clean')
    local('composer run production')
    local('cp source/.htaccess "output_prod/"')

def deploy():
    rsync_project(
        remote_dir='%s/web/' % project_root,
        local_dir='output_prod/',
        default_opts='-vzcrSLh',
        delete=True
    )
    run('sudo service nginx reload')

def file_permissions():
    run('sudo chown -R %s:%s %s/web' % (env.user, env.user, project_root))
    run('sudo chmod -R 750 %s/web' % project_root)
