***
# Task Tracking - `JavaScript`
> Gestor de Tareas a través de linea de comandos.

## Descripción general
> Proyecto de simulación de consola de administración de tareas. Elaborado con `JavaScript` el cual gestiona un archivo JSon para persistir todas las tareas que se gestionarán.

## Features

> Detro de las funcionalidades que ofrece el gestor de tareas estan:
> 
> 1. Agregar Tareas
> 2. Actualizar Tareas
> 3. Eliminar Tareas
> 4. Listar Tareas
> 5. Filtrar Tareas

## Estructura de proyecto

> El proyecto se organizó de la siguiente manera:

```
- src
    - index.js
        - main()
            - answer()
            - commandLineTaskCli()
                - commandLineHelpCli()
                - commandLineListTaskCli()
                - commandLineAddTaskCli()
                - commandLineUpdateTaskCli()
                - commandLineDeleteTaskCli()
                - commandLineChangeStatusTaskCli()
    - repository.js
        - saveTasks()
        - readTasks()
        - addTask()
        - updateTask()
        - deleteTask()
        - listTasks()
    - tasks.json
```

## Instalación

### Node JS
> Tener cualquier versión de node js para la ejecución del código fuente

### Clonar repositorio
> `git clone https://github.com/brandoncahuecc/task-tracking-js.git`

### Instalar dependencias

> Por motivos que no se instalaron dependencias no es necesario ejecutar el siguiente comando
>
> `npm i` | `npm install`

### Ejecutar proyecto
> 1. Abrir una terminal sobre la carpeta contenedora del proyecto
> 2. Ejecutar el siguiente comando para el inicio del proyecto
> 
> `node src/index.js`
>
> 3. Al cargar el programa si deseas conocer la lista de comandos ejecuta el comando
>
> `task-cli help`


## Uso
> A continuación se detalla los comandos y una breve explicación de su funcionamiento

| Comando | Descripción |
| - | - |
| task-cli add `<description>` | Agregar una nueva tarea |
| task-cli update `<id>` `<description>` | Actualizar una tarea |
| task-cli delete `<id>` | Eliminar una tarea |
| task-cli list `<status>` | Listar tareas por estatus, `<status>` opcional |
| task-cli mark-in-progress `<id>` | Marcar una tarea en progreso |
| task-cli mark-done `<id>` | Marcar una tarea como completada |
| exit | Salir del programa |
