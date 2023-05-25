
class Professional {
    constructor(name, age, weight, height, isRetired, nationality, oscarsNumber, profession, photo) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.photo = photo;
    }

    printAll() {
        console.log(`Nombre: ${this.name}`);
        console.log(`Edad: ${this.age}`);
        console.log(`Peso: ${this.weight}`);
        console.log(`Altura: ${this.height}`);
        console.log(`Retirado: ${this.isRetired}`);
        console.log(`Nacionalidad: ${this.nationality}`);
        console.log(`Tiene ${this.oscarsNumber} oscars`);
        console.log(`Profesión: ${this.profession}`);
    }
}