class Mobil {
    // Konstruktor untuk inisialisasi objek
    constructor(merek, model, tahun) {
        this.merek = merek; // Properti objek
        this.model = model;
        this.tahun = tahun;
    } // Removed extra closing brace here

    // Metode untuk menampilkan informasi mobil
    displayInfo() { // Fixed typo: displaylnfo -> displayInfo
        console.log(`Mobil: ${this.merek} ${this.model} (${this.tahun})`); // Fixed: used backticks for template literal
    }
}

// Instansiasi objek dari kelas Mobil
const mobil1 = new Mobil('Toyota', 'Corolla', 2020); // Membuat objek mobil1
const mobil2 = new Mobil('Honda', 'Civic', 2021); // Membuat objek mobil2

// Memanggil metode untuk menampilkan informasi
mobil1.displayInfo(); // Output: Mobil: Toyota Corolla (2020)
mobil2.displayInfo(); // Output: Mobil: Honda Civic (2021)



class Kendaraan {
  constructor(jenis) {
    this.jenis = jenis;
  }
}

class Mobil extends Kendaraan {
  constructor(merek, model, tahun) {
    super('Mobil'); // Memanggil konstruktor kelas induk
    this.merek = merek;
    this.model = model;
    this.tahun = tahun;
  }
}

class Hewan {
  speak() {
    console.log("Hewan berbicara");
  }
}

class Anjing extends Hewan {
  speak() {
    console.log("Anjing menggonggong");
  }
}

let hewan1 = new Hewan();
let hewan2 = new Anjing();

hewan1.speak(); // Output: Hewan berbicara
hewan2.speak(); // Output: Anjing menggonggong
