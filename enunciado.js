var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//----------------------------------
var Nivel = /** @class */ (function () {
    function Nivel() {
    }
    Nivel.prototype.addSucesor = function (sucesor) {
        this.sucesor = sucesor;
    };
    return Nivel;
}());
var NivelUno = /** @class */ (function (_super) {
    __extends(NivelUno, _super);
    function NivelUno() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NivelUno.prototype.matar = function (proceso) {
        if (proceso.consumo > 100 && proceso.prioridad == 3) {
            console.log("EjecutorNivel1 matar\u00E1 proceso " + proceso.nombre);
        }
        else {
            this.sucesor.matar(proceso);
        }
    };
    return NivelUno;
}(Nivel));
var NivelDos = /** @class */ (function (_super) {
    __extends(NivelDos, _super);
    function NivelDos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NivelDos.prototype.matar = function (proceso) {
        if (proceso.consumo > 100 && proceso.prioridad == 2) {
            console.log("EjecutorNivel2 matar\u00E1 proceso " + proceso.nombre);
        }
        else {
            this.sucesor.matar(proceso);
        }
    };
    return NivelDos;
}(Nivel));
var NivelTres = /** @class */ (function (_super) {
    __extends(NivelTres, _super);
    function NivelTres() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NivelTres.prototype.matar = function (proceso) {
        if (proceso.consumo > 100 && proceso.prioridad == 1) {
            console.log("EjecutorNivel1 matar\u00E1 proceso " + proceso.nombre);
        }
        else {
            this.sucesor.matar(proceso);
        }
    };
    return NivelTres;
}(Nivel));
//----------------------------------
var Ejecutor = /** @class */ (function () {
    function Ejecutor() {
        this.n1 = new NivelUno();
        this.n2 = new NivelDos();
        this.n3 = new NivelTres();
        this.n1.addSucesor(this.n2);
        this.n2.addSucesor(this.n3);
    }
    Ejecutor.prototype.matar = function (proceso) {
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
    };
    return Ejecutor;
}());
var main = function () {
    var proceso = {
        prioridad: 3,
        nombre: "Proceso de Prueba",
        consumo: 101
    };
    var en = new Ejecutor();
    en.matar(proceso);
};
main();
