public class mahasiswa {
  private String nama;
  private String nim;
  private String jurusan;
  
  public mahasiswa(String nama,String nim,String jurusan){
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
}
  public void belajar(){
    System.out.println(nama + 'sedang belajar.');
  }
}  


// Class Mahasiswa
class Mahasiswa {
    // Konstruktor untuk inisialisasi objek
    constructor(nama, nim, jurusan, angkatan) {
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
        this.angkatan = angkatan;
    }

    // Metode untuk menampilkan informasi mahasiswa
    displayInfo() {
        console.log(`Mahasiswa: ${this.nama} | NIM: ${this.nim} | Jurusan: ${this.jurusan} | Angkatan: ${this.angkatan}`);
    }
}

// Instansiasi objek dari class Mahasiswa
const mhs1 = new Mahasiswa('Budi', '202101001', 'Informatika', 2021);
const mhs2 = new Mahasiswa('Siti', '202102002', 'Sistem Informasi', 2020);

// Memanggil metode untuk menampilkan informasi
mhs1.displayInfo(); 
mhs2.displayInfo();


// Inheritance (Pewarisan)
class Orang {
    constructor(peran) {
        this.peran = peran;
    }
}

class MahasiswaAktif extends Orang {
    constructor(nama, nim, jurusan, angkatan) {
        super('Mahasiswa'); // Memanggil konstruktor kelas induk
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
        this.angkatan = angkatan;
    }

    belajar() {
        console.log(`${this.nama} sedang belajar di jurusan ${this.jurusan}`);
    }
}

const mhs3 = new MahasiswaAktif('Andi', '202103003', 'Teknik Elektro', 2022);
mhs3.belajar();


// Polymorphism (Polimorfisme)
class MahasiswaPoli {
    aktivitas() {
        console.log("Mahasiswa melakukan aktivitas umum");
    }
}

class MahasiswaKampus extends MahasiswaPoli {
    aktivitas() {
        console.log("Mahasiswa sedang kuliah di kelas");
    }
}

class MahasiswaOrganisasi extends MahasiswaPoli {
    aktivitas() {
        console.log("Mahasiswa mengikuti kegiatan organisasi");
    }
}

let mhs4 = new MahasiswaPoli();
let mhs5 = new MahasiswaKampus();
let mhs6 = new MahasiswaOrganisasi();

mhs4.aktivitas(); // Output: Mahasiswa melakukan aktivitas umum
mhs5.aktivitas(); // Output: Mahasiswa sedang kuliah di kelas
mhs6.aktivitas(); // Output: Mahasiswa mengikuti kegiatan organisasi

