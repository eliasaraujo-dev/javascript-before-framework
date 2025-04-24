function handleMouseMove({ clientX, clientY }) {
    console.log(clientX, clientY);
}

const frutas = ["Banana", "Uva"];

const [fruta1, fruta2] = frutas;

const useState = [
    "blue", "red",
    function (color) { useState[0] = color; }
];

const [color, setCalor] = useState;


// document.documentElement.addEventListener("mousemove", handleMouseMove);

// Creating instance with configuration object

const config = {
    brand: 'Ford',
    model: 'Mustang',
    year: 2022
};

const myCar = new Transport(config);

// Using methods with destructuring
const { brand, model } = myCar;
console.log(`Created: ${brand} ${model}`);

// Calling methods that expect destructuring objects
const statusAfterStart = myCar.start();
const statusAfterAccelerate = myCar.accelerate({ amount: 50 });
const statusAfterBrake = myCar.brake({ amount: 20 });
const finalStatus = myCar.stop();

// Destructuring method returns
const { speed: finalSpeed } = finalStatus;
console.log(`Final speed: ${finalSpeed} mph`);

// Creating default transport with static methods
const defaultTransport = Transport.createDefaultTransport();
const { brand: defaultBrand } = defaultTransport;
console.log(`Default transport: ${defaultBrand}`);