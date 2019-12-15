vagrant init ubuntu/bionic64
vagrant up
npm run ansible
vagrant package --output provision/ubuntuVM.box --include .vagrant
 
# Provisionamiento de máquinas virtuales
Para este proyecto voy a usar Vagrant como herramienta para crear una máquina virtual local y Ansible como herramienta de provisionamiento
 
## Vagrant
Primero instalamos el cliente de Vagrant (desde la línea de comando o el binario de la página web oficial). Yo usaré el de la línea de comandos.
Antes de crear la máquina virtual es necesario usar las llamadas *boxes*. Son imágenes de máquinas virtuales ya creadas las cuales Vagrant las clonará para poder usarlas. Se pueden usar unas ya creadas es este [enlace](https://app.vagrantup.com/boxes/search) o crear manualmente una *box base*. Estas últimas contienen lo mínimo requerido para que Vagrant funcione. Usaré una *box* ya creada: [ubuntu/bionic]https://app.vagrantup.com/ubuntu/boxes/bionic64)
 
Primero añadimos el archivo *Vagrantfile* a través del comando:
 
```
vagrant init ubuntu/bionic64
 
```
 
A continuación arrancamos la máquina virtual:
 
```
vagrant up
```
 
Una vez instalada la provisionamos según el archivo *playbook.yml*:
 
```
npm run ansible
```
 
Ir a la siguiente sección (**Provisionamiento con Ansible**) para entender la estructura del archivo *playbook.yml*
 
 
Finalmente, para exportar la máquina virtual se ejecuta el siguiente comando:
 
```
vagrant package --output provision/ubuntuVM.box --include .vagrant
```
 
Donde *--output** indica la ruta y el nombre del archivo y *--include* para que incluya los ficheros de configuración de la máquina recién creada ubicados de forma predeterminada en el directorio *.vagrant*
 
Otros comandos útiles de Vagrant:
 
```
vagrant ssh
```
 
Nos conectamos via SSH con el siguiente comando:
 
```
vagrant halt
```
 
Para parar la máquina virtual simplemente ejecutamos:
 
```
vagrant destroy
```
 
Y si quisiéramos borrarla:
 
 
## Provisionamiento con Ansible
Estructura del archivo *playbook.yml*:
 
```
- hosts: vagrantboxes
 become: yes
```
 
Indica el grupo de máquinas a provisionar. Las pertenecientes a *vagrantboxes*
 
```
- name: Instalar curl
 apt:
  pkg: ['curl']
```
 
Insatala el paquete *curl*
 
```
- name: Instalar PPA del paquete nodejs
 shell:
  cmd: curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
```
 
Instala los archivos de paquetes personales de *nodejs*
 
```
- name: Instala paquetes
 apt:
  update_cache: yes
  pkg: ['git', 'nodejs']
```
 
Instala el paquete de *nodejs* y *git*
 
```
- name: Clona repositorio
 git:
  repo: https://github.com/sergiogp98/MultimediaManagement.git
  dest: $HOME/MultimediaManagement
```
 
Clona el repositorio en la carpeta indicada en *dest*. Al no crear ningún usuario, la crea en la carpeta */root*
 
```
- name: Instalar paquetes según el archivo package.json
 npm:
  path: $HOME/MultimediaManagement
```
 
Instala los paquetes de producción necesarios para lanzar la API
 

