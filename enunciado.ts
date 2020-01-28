interface Proceso
{
    prioridad : number
    consumo : number
    nombre : string
}
//----------------------------------
abstract class Nivel{
    sucesor : Nivel
    addSucesor(sucesor : Nivel){
        this.sucesor = sucesor;
    }
    abstract matar( proceso : Proceso);
}
class NivelUno extends Nivel{
    matar(proceso: Proceso) {
        if (proceso.consumo > 100 && proceso.prioridad == 3){
            console.log(`EjecutorNivel1 matará proceso ${proceso.nombre}`);
        }else{
            this.sucesor.matar(proceso);
        }
    }

}
class NivelDos extends Nivel{
    matar(proceso: Proceso) {
        if (proceso.consumo > 100 && proceso.prioridad == 2){
            console.log(`EjecutorNivel2 matará proceso ${proceso.nombre}`);
        }else{
            this.sucesor.matar(proceso);
        }
    }

}
class NivelTres extends Nivel{
    matar(proceso: Proceso) {
        if (proceso.consumo > 100 && proceso.prioridad == 1){
            console.log(`EjecutorNivel1 matará proceso ${proceso.nombre}`);
        }else{
            this.sucesor.matar(proceso);
        }
    }

}
//----------------------------------
// clase singleton solo se instancia una vez
class Ejecutor
{
    n1 : Nivel;
    n2 : Nivel;
    n3 : Nivel;
    constructor(){
            this.n1 = new NivelUno();
            this.n2 = new NivelDos();
            this.n3 = new NivelTres();

            this.n1.addSucesor(this.n2);
            this.n2.addSucesor(this.n3);
    }
    matar(proceso : Proceso)
    {
        this.n1.matar(proceso);
        /*if (proceso.prioridad == 3 && proceso.consumo > 100)
        {
            console.log(`EjecutorNivel1 matará proceso ${proceso.nombre}`)
        }else if (proceso.prioridad == 2 && proceso.consumo > 100)
        {
            console.log(`EjecutorNivel2 matará proceso ${proceso.nombre}`)
        }else if (proceso.prioridad == 1 && proceso.consumo > 100)
        {
            console.log(`EjecutorNivel3 matará proceso ${proceso.nombre}`)
        }*/
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
