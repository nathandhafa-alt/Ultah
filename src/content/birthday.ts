export const person = {
  name: "Nadira",
  age: 16,
  dateLabel: "17 Agustus",
};

export const invitation = {
  kicker: "Titah Kerajaan",
  title: "Undangan Agung",
  body: `Dengan segala kehormatan, kerajaan mengundang Sang Ratu Muda ${person.name} untuk merayakan hari kelahirannya yang ke-${person.age} pada ${person.dateLabel}.`,
  seal: "Bukalah segel ini",
  cta: "Masuk ke Istana",
};

export const doors = [
  {
    id: "1",
    to: "/pintu/1" as const,
    numeral: "I",
    title: "Balai Kerajaan",
    subtitle: "Dekrit, kenangan, dan peta perjalanan",
    hint: "Emas & Marun",
  },
  {
    id: "2",
    to: "/pintu/2" as const,
    numeral: "II",
    title: "Hutan & Goa Kristal",
    subtitle: "Turunlah perlahan menuju cahaya di dalam gelap",
    hint: "Hijau Rimba",
  },
  {
    id: "3",
    to: "/pintu/3" as const,
    numeral: "III",
    title: "Taman Mawar",
    subtitle: "Kelopak, doa, dan kata-kata paling lembut",
    hint: "Mawar & Emas",
  },
];

export const greetings = {
  royal: {
    heading: `Selamat Ulang Tahun, ${person.name}`,
    lead: `Pada hari ${person.dateLabel}, seluruh negeri berhenti sejenak untuk satu alasan: engkau bertambah satu tahun, dan dunia terasa sedikit lebih hangat karenanya.`,
    body: `Sebuah dekrit dibacakan di balai utama — bahwa hari ini adalah hari perayaan. Semoga tahun ke-${person.age} membawamu pada keberanian yang lebih besar, tawa yang lebih sering, dan mimpi yang akhirnya kau kejar tanpa ragu.`,
  },
  forest: {
    heading: person.name,
    lead: "Setiap perjalanan persis seperti hutan berawal dari siang yang terang, lalu menuruni jalan yang gelap, sebelum menemukan ruang penuh kristal yang bercahaya.",
    body: "Begitulah usiamu tumbuh: melewati bagian yang sulit, lalu menyadari bahwa cahaya itu selalu ada di dalam dirimu sendiri. PERCAYA DIRILAH",
  },
  romance: {
    heading: `My Couple, ${person.name}`,
    lead: `Selamat ulang tahun yang ke-${person.age}.`,
    body: "Semoga hatimu selalu punya tempat yang tenang untuk pulang, dan semoga tahun ini penuh hal-hal kecil yang membuatmu tersenyum tanpa alasan.",
  },
};

export type Card = { from: string; message: string };

export const cardsRoyal: Card[] = [
  { from: "he", message: `Selamat ulang tahun, ${person.name}. Semoga setiap langkah yang kau pijak tahun ini memiliki ujung yang indah untukmu.` },
  { from: "Penasihat Istana", message: "Tetaplah rendah hati saat dipuji, dan tetaplah tegak saat diremehkan. Dua-duanya akan berlalu." },
  { from: "Teman ", message: "Terima kasih sudah jadi orang yang selalu ada. Tahun ini giliran dunia yang baik padamu." },
  { from: "Raja ", message: "Namamu sudah tercatat di gulungan hari-hari baik. Jangan lupa merayakan dirimu sendiri." },
];

export const cardsForest: Card[] = [
  { from: "Alam Punya", message: "Jangan takut pada jalan yang gelap. Ia hanya cara alam menyuruhmu memperlambat langkah." },
  { from: "Pemberi Semangat", message: `Selamat ulang tahun, ${person.name}. Semoga kamu selalu menemukan alasan untuk bersinar.` },
  { from: "Teman 140226", message: "Cintailah alam sedalam kamu mencintai dirinya, hingga setiap hembusan angin, rimbunnya pepohonan, dan indahnya senja terasa seperti bagian dari dirinya." },
];

export const cardsRomance: Card[] = [
  { from: "Seseorang yang Peduli", message: `Selamat ulang tahun, ${person.name}. Semoga hari ini selembut yang kamu pantas dapatkan.` },
  { from: "Mimpi", message: "Kamu tidak harus mekar setiap hari. Istirahat juga bagian dari tumbuh." },
  { from: "Doa Kecil", message: "Semoga kamu dicintai dengan cara yang membuatmu merasa aman, bukan lelah." },
];

export const quotesRoyal = [
  "Pada akhirnya, yang paling berarti bukan seberapa lama kita hadir dalam hidup seseorang, tetapi seberapa dalam jejak yang kita tinggalkan.",
  "Kerajaan terbesar yang harus kau pimpin adalah dirimu sendiri.",
  "Tidak semua yang pergi adalah kehilangan; terkadang, ia adalah awal dari pertumbuhan.",
];

export const quotesForest = [
  "Yang gelap bukan berarti berbahaya; kadang di sanalah kristal tumbuh.",
  "Jika suatu hari kita berjalan di arah yang berbeda, semoga kita tetap bisa tersenyum ketika mengingat bahwa pernah ada masa di mana kita berjalan bersama.",
  "Tersesat sebentar tidak apa-apa, asal kamu terus berjalan.",
];

export const quotesRomance = [
  "Cintai dirimu seperti kamu mencintai orang lain: tanpa syarat.",
  "Hal-hal indah tidak perlu buru-buru; mawar pun mekar pada waktunya.",
  "Kamu layak atas semua hal lembut yang selama ini kamu berikan.",
];

export const journey = [
  { label: "Gerbang", note: "Undangan dibuka" },
  { label: "Aula", note: "Tiga pintu menanti" },
  { label: "Balai", note: "Dekrit dibacakan" },
  { label: "Galeri", note: "Kenangan dipajang" },
  { label: "Menara", note: "Doa dititipkan" },
  { label: "Mahkota", note: `Selamat ulang tahun, ${person.name}` },
];

export const photoSlotsRoyal = [
  { label: "Kenangan Pertama", src: "/public/8.png" },
  { label: "Momen Bersama Mahes", src: "/public/2.png" },
  { label: "Hari yang Cukup", src: "/public/10.png" },
  { label: "Pose Bahagia", src: "/public/11.png" },
  { label: "Fokus", src: "/public/12.png" },
  { label: "Momen Lain", src: "/public/13.png" },
];

export const photoSlotsForest = [
  { label: "Tawa Kebahagiaan", src: "/public/4.png" },
  { label: "Pemberani", src: "/public/11.png" },
  { label: "Alam Banget", src: "/public/9.png" },
  { label: "Menemukan Cahaya", src: "/public/13.png" },
  { label: "Senja di Hutan", src: "/public/6.png" },
  { label: "Senja di Hutan", src: "/public/14.png" },
];

export const photoSlotsRomance = [
  { label: "Kutu Buku", src: "/public/18.png" },
  { label: "Momen Bahagia", src: "/public/17.png" },
  { label: "Ekspresi", src: "/public/16.png" },
];
