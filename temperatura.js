export class ConversorTemperatura {
    constructor() {}

    aKelvin(celsius) {
        return celsius + 273.15;
    }

    aFahrenheit(celsius) {
        return (celsius * 9) / 5 + 32;
    }

    esNumeroValido(entrada) {
        if (entrada === null || entrada.trim() === "") {
            return false;
        }
        var numero = Number(entrada);
        return !isNaN(numero);
    }
}
