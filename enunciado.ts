interface Proceso
{
    prioridad : number
    consumo : number
    nombre : string
}

class Ejecutor
{
    matar(proceso : Proceso)
    {
        if (proceso.prioridad == 3 && proceso.consumo > 100)
        {
            console.log(`EjecutorNivel1 matará proceso ${proceso.nombre}`)
        }else if (proceso.prioridad == 2 && proceso.consumo > 100)
        {
            console.log(`EjecutorNivel2 matará proceso ${proceso.nombre}`)
        }else if (proceso.prioridad == 1 && proceso.consumo > 100)
        {
            console.log(`EjecutorNivel3 matará proceso ${proceso.nombre}`)
        }
    }
}

let main = () =>
{
    let proceso : Proceso = {
        prioridad : 3,
        nombre : "Proceso de Prueba",
        consumo : 101
    }
    let en = new Ejecutor()
    en.matar(proceso)
}

main();
