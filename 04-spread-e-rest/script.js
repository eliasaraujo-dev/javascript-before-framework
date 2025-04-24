// // // // function showList(enterprise, ...clients) {
// // // //     console.log(enterprise);
// // // //     console.log(clients);
// // // // }

// // // // showList("Elias Araujo Inc", "João", "Maria", 10);

// // // const numeros = [1, 2, 4, 29, 32, 2, 45, 3];

// // // console.log(Math.max(...numeros));

// // const items = document.querySelectorAll("li");

// // [...items].map(item => {
// //     console.log(item);
// // });

// // console.log(items);

// const car = { cor: "Azul", portas: 4, ano: 2020 };

// const carClone2 = car;

// const carClone = { ...car, turbo: true };

// Represents an car that is an type of land transport
class Transport {
    constructor() {
        this.isLandVehicle = true;
    }
    start() {
        console.log("Vehicle in motion!")
    }
}

class Car extends Transport {
    constructor(vehicleColor, numberOfDoors) {
        super();
        this.vehicleColor = vehicleColor;
        this.numberOfDoors = numberOfDoors;
    }
}

const car = new Car("red", 4);

const carClone = { ...car };

console.log(car);
console.log(carClone);