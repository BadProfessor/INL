class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;   
    }
}

class CarFactory {
    createCar(type) {
        switch(type) {
            case 'civic':
                return new Car(4, 'V6', 'grey')
            case 'honda':
                return new Car(2, "V8", 'red')
        }
    }
}

class SUV {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;   
    }
}

class SuvFactory {
    createCar(type) {
        switch(type) {
            case 'cx5':
                return new Car(4, 'V6', 'grey')
            case 'sante fe':
                return new Car(2, "V8", 'red')
        }
    }
}

let carMixin = {
    revEngine() {
        console.log(`The ${this.engine} engine is doing Vroom Vroom!`);
        
    }
}

const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

const autoManufacturer = (type, model) => {
    switch(type) {
        case 'car':
            return carFactory.createCar(model);
        case 'suv':
            return suvFactory.createCar(model);
    }
}

Object.assign(Car.prototype, carMixin);

const honda = autoManufacturer('car', 'honda');

honda.revEngine();
