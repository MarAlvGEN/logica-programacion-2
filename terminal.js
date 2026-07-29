import { ConversorTemperatura } from "./temperatura.js";

export class TerminalApp {
    constructor() {
        this.conversor = new ConversorTemperatura();
        this.output = document.getElementById("terminal-output");
        this.input = document.getElementById("celsius-input");
        this.form = document.getElementById("terminal-form");
    }

    iniciar() {
        const self = this;

        this.form.addEventListener("submit", function (event) {
            event.preventDefault();
            self.procesarEntrada();
        });
    }

    imprimirLinea(texto, claseColor) {
        const linea = document.createElement("div");
        linea.className = claseColor ? claseColor : "text-light";
        linea.textContent = texto;

        this.output.appendChild(linea);

        this.output.scrollTop = this.output.scrollHeight;
    }

    procesarEntrada() {
        const valorEntrada = this.input.value;

        this.imprimirLinea("> " + valorEntrada, "text-warning");

        if (!this.conversor.esNumeroValido(valorEntrada)) {
            this.imprimirLinea(
                "[ERROR]: La entrada '" +
                    valorEntrada +
                    "' no es un número válido. Intenta de nuevo.",
                "text-danger",
            );
            this.input.value = "";
            return;
        }

        const celsius = parseFloat(valorEntrada);
        const kelvin = this.conversor.aKelvin(celsius);
        const fahrenheit = this.conversor.aFahrenheit(celsius);

        const resultados = [
            "Grados Kelvin: " + kelvin,
            "Grados Fahrenheit: " + fahrenheit,
        ];

        for (let i = 0; i < resultados.length; i = i + 1) {
            this.imprimirLinea(
                "  " + resultados[i],
                "Grados celsius",
                "text-success",
            );
            console.log(resultados[i]);
        }

        this.input.value = "";
    }
}
