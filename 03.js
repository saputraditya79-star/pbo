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
