// Main.java
class Vehicle {               // 1. class induk (Parent)
    // 5. atribut
    protected String brand;
    protected int year;

    // Konstruktor
    public Vehicle(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }

    // 4. metode
    public void startEngine() {
        System.out.println("Mesin " + brand + " menyala.");
    }

    public void info() {
        System.out.println("Brand: " + brand + ", Year: " + year);
    }
}

class Car extends Vehicle {   // 2. class anak (Child) extends Vehicle
    private int seats;         // atribut tambahan pada class anak

    // Konstruktor: panggil konstruktor induk dengan super()
    public Car(String brand, int year, int seats) {
        super(brand, year);
        this.seats = seats;
    }

    // Overriding method dari induk (polimorfisme)
    @Override
    public void startEngine() {
        System.out.println("Mobil " + brand + " (tahun " + year + ") : mesin bunyi rrrooom!");
    }

    // Method khusus di class anak
    public void showSeats() {
        System.out.println("Jumlah kursi: " + seats);
    }

    // getter dan setter (opsional)
    public int getSeats() {
        return seats;
    }

    public void setSeats(int seats) {
        this.seats = seats;
    }
}

public class Main {
    public static void main(String[] args) {
        // 3. objek: buat instance dari class induk
        Vehicle v = new Vehicle("GenericBrand", 2010);
        v.info();            // memanggil method info()
        v.startEngine();     // memanggil method startEngine() dari induk

        System.out.println("----------------------");

        // 3. objek: buat instance dari class anak (Car)
        Car myCar = new Car("Toyota", 2022, 5);
        myCar.info();        // method diwarisi dari Vehicle
        myCar.startEngine(); // method yang dioverride di Car
        myCar.showSeats();   // method khusus di Car

        System.out.println("----------------------");

        // Polimorfisme: referensi tipe induk menunjuk ke objek anak
        Vehicle poly = new Car("Honda", 2020, 4);
        poly.info();         // memanggil method info() dari Vehicle
        poly.startEngine();  // memanggil versi override (Car.startEngine)
        // poly.showSeats(); // TIDAK BISA: reference Vehicle tidak punya showSeats()
    }
}
