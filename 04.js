class Mahasiswa {
  constructor(nama, nim, nilai, jurusan = "Belum Ditentukan") {
    this.nama = nama;
    this.nim = nim;
    this._nilai = nilai; // Menggunakan underscore untuk property private
    this.jurusan = jurusan;
    this.mataKuliah = []; // Array untuk menyimpan mata kuliah
  }

  // Getter untuk mengakses nilai
  get nilai() {
    return this._nilai;
  }

  // Setter untuk mengubah nilai dengan validasi
  set nilai(nilaiBaru) {
    if (nilaiBaru >= 0 && nilaiBaru <= 100) {
      this._nilai = nilaiBaru;
      console.log(`Nilai berhasil diubah menjadi ${nilaiBaru}`);
    } else {
      console.log('Nilai harus antara 0 dan 100');
    }
  }

  // Method untuk menambahkan mata kuliah
  tambahMataKuliah(namaMatkul, sks, nilaiMatkul) {
    const matkul = {
      nama: namaMatkul,
      sks: sks,
      nilai: nilaiMatkul
    };
    this.mataKuliah.push(matkul);
    console.log(`Mata kuliah ${namaMatkul} berhasil ditambahkan`);
  }

  // Method untuk menghitung IPK
  hitungIPK() {
    if (this.mataKuliah.length === 0) {
      return 0;
    }
    
    let totalNilai = 0;
    let totalSKS = 0;
    
    this.mataKuliah.forEach(matkul => {
      // Konversi nilai angka ke skala 4.0
      let nilaiSkala4 = this.konversiNilai(matkul.nilai);
      totalNilai += nilaiSkala4 * matkul.sks;
      totalSKS += matkul.sks;
    });
    
    return (totalNilai / totalSKS).toFixed(2);
  }

  // Method untuk konversi nilai ke skala 4.0
  konversiNilai(nilai) {
    if (nilai >= 85) return 4.0;
    if (nilai >= 80) return 3.7;
    if (nilai >= 75) return 3.3;
    if (nilai >= 70) return 3.0;
    if (nilai >= 65) return 2.7;
    if (nilai >= 60) return 2.3;
    if (nilai >= 55) return 2.0;
    if (nilai >= 50) return 1.7;
    if (nilai >= 45) return 1.3;
    return 0;
  }

  // Method untuk mendapatkan predikat
  getPredikat() {
    const ipk = parseFloat(this.hitungIPK());
    if (ipk >= 3.5) return "Cumlaude";
    if (ipk >= 3.0) return "Sangat Memuaskan";
    if (ipk >= 2.5) return "Memuaskan";
    return "Cukup";
  }

  // Method untuk menampilkan informasi mahasiswa
  tampilkanInfo() {
    console.log("\n=== INFORMASI MAHASISWA ===");
    console.log(`Nama: ${this.nama}`);
    console.log(`NIM: ${this.nim}`);
    console.log(`Jurusan: ${this.jurusan}`);
    console.log(`Nilai Rata-rata: ${this._nilai}`);
    console.log(`IPK: ${this.hitungIPK()}`);
    console.log(`Predikat: ${this.getPredikat()}`);
    
    if (this.mataKuliah.length > 0) {
      console.log("\nDaftar Mata Kuliah:");
      this.mataKuliah.forEach((matkul, index) => {
        console.log(`${index + 1}. ${matkul.nama} (${matkul.sks} SKS) - Nilai: ${matkul.nilai}`);
      });
    }
  }

  // Method untuk mengubah jurusan
  ubahJurusan(jurusanBaru) {
    this.jurusan = jurusanBaru;
    console.log(`Jurusan berhasil diubah menjadi ${jurusanBaru}`);
  }
}

// ===== CONTOH PENGGUNAAN =====

// Membuat objek mahasiswa
const mahasiswa1 = new Mahasiswa("Budi Santoso", "2023001", 85, "Teknik Informatika");
const mahasiswa2 = new Mahasiswa("Siti Aminah", "2023002", 78, "Sistem Informasi");

// Menambahkan mata kuliah untuk mahasiswa1
mahasiswa1.tambahMataKuliah("Pemrograman Web", 3, 88);
mahasiswa1.tambahMataKuliah("Basis Data", 4, 85);
mahasiswa1.tambahMataKuliah("Algoritma", 3, 90);

// Menambahkan mata kuliah untuk mahasiswa2
mahasiswa2.tambahMataKuliah("Analisis Sistem", 3, 75);
mahasiswa2.tambahMataKuliah("Jaringan Komputer", 3, 80);

// Menggunakan getter
console.log(`\nNilai ${mahasiswa1.nama}: ${mahasiswa1.nilai}`);

// Menggunakan setter
mahasiswa1.nilai = 90; // Valid
mahasiswa1.nilai = 105; // Invalid - akan muncul pesan error

// Menampilkan informasi lengkap
mahasiswa1.tampilkanInfo();
mahasiswa2.tampilkanInfo();

// Mengubah jurusan
mahasiswa2.ubahJurusan("Teknik Komputer");
