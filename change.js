class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    Fahrenheit() {
        return this.celsius * 9 / 5 + 32;
    }
    Kelvin() {
        return this.celsius + 273.15;
    }
    toString() {
        let fahrenheit = this.Fahrenheit();
        let kelvin = this.Kelvin();
        return "Fahrenheit: " + fahrenheit + "; Kelvin: " + kelvin;
    }
}
let temperature = new Temperature(9);
temperature.toString();
document.write(temperature.toString());
