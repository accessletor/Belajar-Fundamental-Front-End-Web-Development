# Kriteria Bookshelf Apps
Buatlah aplikasi web yang dapat memasukan data buku ke dalam rak, memindahkan data buku antar rak, dan menghapus data buku dari rak. 

Untuk lebih jelasnya, terdapat 5 kriteria utama pada Bookshelf Apps yang harus Anda buat.



## Kriteria 1: Mampu Menambahkan Data Buku
Bookshelf Apps harus mampu menambahkan data buku baru.
Data buku yang disimpan merupakan objek JavaScript dengan struktur berikut:
```json
{
  "id": "string | number",
  "title": "string",
  "author": "string",
  "year": "number",
  "isComplete": "boolean"
}
```
Berikut contoh data riilnya:
```json
{
  "id": 3657848524,
  "title": "Harry Potter and the Philosopher's Stone",
  "author": "J.K Rowling",
  "year": 1997,
  "isComplete": false
}
```
Catatan:
- Untuk id buku pada setiap buku yang disimpan haruslah unik. Anda bisa memanfaatkan nilai timestamp untuk menetapkan nilai id. Anda dapat menggunakan expression `+new Date()` untuk mendapatkan nilai timestamp di JavaScript.

## Kriteria 2: Memiliki Dua Rak Buku

Bookshelf Apps harus memiliki 2 rak buku: "Belum selesai dibaca" dan "Selesai dibaca".
- Rak buku "Belum selesai dibaca" hanya menyimpan buku jika properti isComplete bernilai false.
- Rak buku "Selesai dibaca" hanya menyimpan buku jika properti isComplete bernilai true.

## Kriteria 3: Dapat Memindahkan Buku antar Rak

Buku yang ditampilkan pada rak, baik itu "Belum selesai dibaca" maupun "Selesai dibaca", harus dapat dipindahkan di antara keduanya.

## Kriteria 4: Dapat Menghapus Data Buku

Buku yang ditampilkan pada rak, baik itu "Belum selesai dibaca" maupun "Selesai dibaca", harus dapat dihapus.

## Kriteria 5: Manfaatkan localStorage dalam Menyimpan Data Buku

Data buku yang ditampilkan pada rak, baik itu "Belum selesai dibaca" maupun "Selesai dibaca", harus dapat bertahan walaupun halaman web ditutup. Anda harus menyimpan data buku pada localStorage.
