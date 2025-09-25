// ===== 1 Class Induk =====
class Mahasiswa {
    constructor(nama, nim, jurusan, angkatan, ipk) {
        this.nama = nama;       // Atribut 1
        this.nim = nim;         // Atribut 2
        this.jurusan = jurusan; // Atribut 3  
        this.angkatan = angkatan; // Atribut 4
        this.ipk = ipk;         // Atribut 5
    }

    // Method 1
    perkenalan() {
        console.log(`Halo, saya ${this.nama} (${this.nim}) dari jurusan ${this.jurusan}.`);
    }
}

// ===== 2 Class Anak =====
class MahasiswaS1 extends Mahasiswa {
    // Method 2
    ikutKuliah(matkul) {
        console.log(`${this.nama} sedang kuliah ${matkul}.`);
    }
}

class MahasiswaSemester3 extends Mahasiswa {
    // Method 3
    mengerjakanTugas(matkul) {
        console.log(`${this.nama} sedang mengerjakan tugas ${matkul}.`);
    }
}

// ===== 3 Object =====
const m1 = new Mahasiswa("Budi", "202101001", "Informatika", 2021, 3.5);
const m2 = new MahasiswaS1("Siti", "202002002", "Sistem Informasi", 2020, 3.7);
const m3 = new MahasiswaSemester3("Andi", "202103003", "Teknik Elektro", 2021, 3.4);

// ===== 4 Method dipanggil =====
m1.perkenalan();               // dari induk
m2.perkenalan();               // warisan induk
m2.ikutKuliah("Pemrograman");  // khusus S1
m3.mengerjakanTugas("Struktur Data"); // khusus Semester 3
