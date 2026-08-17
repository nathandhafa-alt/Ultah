# Website Ulang Tahun Bertema Kerajaan

Sebuah pengalaman interaktif: undangan kerajaan yang dibuka, lalu tiga pintu dengan tiga dunia berbeda.

## Alur Pengguna

```text
/  Kartu Undangan Kerajaan (segel lilin, buka amplop)
        |
        v
/pintu  Aula 3 Pintu  ->  pilih pintu
        |
        v
   Hitung mundur 3 detik (3 - 2 - 1) lalu masuk
        |
   +----+----------------+----------------+
   v                     v                v
/pintu/1              /pintu/2         /pintu/3
Balai Kerajaan        Hutan -> Goa      Romansa
```

## Halaman

**1. Kartu Undangan (`/`)**
Amplop perkamen dengan segel lilin emas, ornamen kerajaan, dan nama penerima. Klik segel -> kartu terbuka dengan animasi, menampilkan undangan ulang tahun ke-16 tanggal 17 Agustus, lalu tombol untuk melanjutkan.

**2. Aula Tiga Pintu (`/pintu`)**
Tiga gerbang batu berukir, masing-masing dengan aura berbeda (emas, hijau hutan, merah mawar). Saat dipilih: layar gelap + hitung mundur 3 detik dengan angka besar bergaya kerajaan, pintu terbuka, lalu masuk ke halamannya.

**3. Pintu Pertama — Balai Kerajaan (`/pintu/1`)**
- Pembuka: foto besar + ucapan selamat bergaya dekrit kerajaan
- Galeri foto kenangan
- Kartu ucapan (statis, gaya gulungan perkamen)
- Kata-kata motivasi
- Footer unik: peta perjalanan (jalur bertitik dari awal sampai akhir dengan ikon kastil, gulungan, mahkota) bergaya peta harta karun

**4. Pintu Kedua — Hutan ke Goa (`/pintu/2`)**
- Pembuka: foto + nama besar
- Turun: kartu ucapan, kata motivasi, galeri kenangan
- Latar berubah bertahap saat scroll: hutan terang -> hutan gelap -> mulut goa -> dalam goa berkilau kristal. Diterapkan dengan lapisan latar yang memudar mengikuti posisi scroll.

**5. Pintu Ketiga — Romansa (`/pintu/3`)**
- Pembuka: foto di satu sisi, ucapan di sisi lain (dua kolom, di mobile bertumpuk)
- Kartu ucapan
- Kalimat motivasi
- Galeri foto kenangan
- Palet lembut: mawar, blush, emas mawar, kelopak berguguran halus

## Konten

- Nama sementara "Nama" dipakai di seluruh teks lewat satu file konten agar mudah diganti.
- Semua teks ucapan, kartu, dan motivasi saya tulis dalam Bahasa Indonesia bertema kerajaan.
- Foto memakai placeholder bergaya bingkai kerajaan; Anda cukup kirim foto nanti dan saya pasang.
- Latar/tekstur (perkamen, hutan, goa, mawar) dibuat sebagai gambar ilustrasi.

## Catatan Teknis

- Route: `src/routes/index.tsx` (kartu undangan), `pintu.index.tsx`, `pintu.$id.tsx` atau tiga file terpisah `pintu.1/2/3.tsx`.
- Konten terpusat di `src/content/birthday.ts` (nama, ucapan, daftar kartu, motivasi) supaya penggantian teks/nama satu tempat.
- Animasi memakai Motion for React: buka amplop, hitung mundur, transisi pintu, parallax latar goa, reveal saat scroll.
- Token desain baru di `src/styles.css`: palet kerajaan (emas, marun, perkamen), hutan/goa, dan romansa — masing-masing dipakai sebagai kelas tema per halaman.
- Font: judul serif dekoratif (Cinzel) + isi (Cormorant/Karla) lewat `<link>` di `__root.tsx`.
- Setiap route punya `head()` sendiri (judul, deskripsi, og).
- Tanpa database — semua kartu ucapan statis.
- Prioritas tampilan mobile, tetap rapi di desktop.
