// ===================================================
// data.js : semua materi dan soal Detektif Nahwu
// Menambah kasus baru = menambah satu blok { ... } di bawah.
// Catatan: "jawaban" berisi nomor pilihan yang benar,
// dihitung mulai dari 0 (0 = pilihan pertama, 1 = kedua, dst).
// ===================================================

const kasus = [

  // ---------- KASUS 1 ----------
  {
    id: 1,
    judul: "Siapa pelakunya?",
    topik: "Fa'il",
    cerita: "Kaca jendela madrasah pecah! Beberapa saksi memberi keterangan, tapi urutan katanya membingungkan. Hanya detektif yang paham nahwu yang bisa menemukan pelakunya.",
    ringkasan: "Fa'il adalah pelaku pekerjaan. Fa'il selalu marfu', dan untuk isim mufrad tandanya dhammah. Jadi pelaku dikenali dari harakat akhirnya, bukan dari urutan katanya.",
    rumus: "Fa'il → marfu' → dhammah (ـُ / ـٌ)",
    soal: [
      {
        keterangan: "كَسَرَ الزُّجَاجَ أَحْمَدُ",
        pertanyaan: "Siapa yang memecahkan kaca?",
        pilihan: ["Ahmad", "Kaca", "Pak Satpam"],
        jawaban: 0,
        petunjuk: "Lihat harakat di akhir kata. Dhammah menandakan pelaku.",
        penjelasan: "أَحْمَدُ berharakat dhammah, jadi dia fa'il (pelaku)."
      },
      {
        keterangan: "ضَرَبَ الْوَلَدَ مُحَمَّدٌ",
        pertanyaan: "Siapa yang memukul?",
        pilihan: ["Anak itu", "Muhammad", "Guru"],
        jawaban: 1,
        petunjuk: "Jangan tertipu urutan kata. Cari kata yang berharakat dhammah.",
        penjelasan: "مُحَمَّدٌ berharakat dhammah, jadi dia fa'il. الْوَلَدَ berharakat fathah, jadi dia bukan pelaku."
      },
      {
        keterangan: "أَكَلَ الْكَعْكَ سَعِيدٌ",
        pertanyaan: "Siapa yang makan kue?",
        pilihan: ["Kue", "Ibu", "Sa'id"],
        jawaban: 2,
        petunjuk: "Pelaku berharakat dhammah di akhir katanya.",
        penjelasan: "سَعِيدٌ berharakat dhammah, jadi dia fa'il. الْكَعْكَ berharakat fathah, jadi dia yang dimakan."
      },
      {
        keterangan: "فَتَحَ الْبَابَ يُوسُفُ",
        pertanyaan: "Siapa yang membuka pintu?",
        pilihan: ["Yusuf", "Pintu", "Penjaga"],
        jawaban: 0,
        petunjuk: "Cari kata yang berharakat dhammah.",
        penjelasan: "يُوسُفُ berharakat dhammah, jadi dia fa'il (pelaku)."
      }
    ]
  },

  // ---------- KASUS 2 ----------
  {
    id: 2,
    judul: "Apa yang hilang?",
    topik: "Maf'ul bih",
    cerita: "Barang-barang hilang dari kelas! Para saksi menyebut apa yang diambil, tapi kamu harus tahu mana yang menjadi korban pekerjaan dan mana yang pelakunya.",
    ringkasan: "Maf'ul bih adalah objek, yaitu sesuatu yang dikenai pekerjaan. Maf'ul bih selalu manshub, dan untuk isim mufrad tandanya fathah.",
    rumus: "Maf'ul bih → manshub → fathah (ـَ / ـً)",
    soal: [
      {
        keterangan: "أَخَذَ سَمِيرٌ الْقَلَمَ",
        pertanyaan: "Apa yang diambil?",
        pilihan: ["Buku", "Pena", "Sameer"],
        jawaban: 1,
        petunjuk: "Yang diambil adalah objek. Objek berharakat fathah.",
        penjelasan: "الْقَلَمَ berharakat fathah, jadi dia maf'ul bih (objek)."
      },
      {
        keterangan: "أَضَاعَ خَالِدٌ الْكِتَابَ",
        pertanyaan: "Apa yang hilang?",
        pilihan: ["Khalid", "Tas", "Buku"],
        jawaban: 2,
        petunjuk: "Cari kata yang berharakat fathah.",
        penjelasan: "الْكِتَابَ berharakat fathah, jadi dia maf'ul bih. خَالِدٌ berharakat dhammah, jadi dia fa'il."
      },
      {
        keterangan: "حَمَلَتْ فَاطِمَةُ الْحَقِيبَةَ",
        pertanyaan: "Apa yang dibawa Fatimah?",
        pilihan: ["Tas", "Pena", "Buku"],
        jawaban: 0,
        petunjuk: "Yang dibawa adalah objek, berharakat fathah.",
        penjelasan: "الْحَقِيبَةَ berharakat fathah, jadi dia maf'ul bih (objek)."
      },
      {
        keterangan: "حَمَلَتْ فَاطِمَةُ الْحَقِيبَةَ",
        pertanyaan: "Siapa yang membawa tas?",
        pilihan: ["Tas", "Fatimah", "Ustazah"],
        jawaban: 1,
        petunjuk: "Sekarang yang dicari pelaku, bukan objek. Cari harakat dhammah.",
        penjelasan: "فَاطِمَةُ berharakat dhammah, jadi dia fa'il (pelaku)."
      }
    ]
  },

  // ---------- KASUS 3 ----------
  {
    id: 3,
    judul: "Di mana kuncinya?",
    topik: "Huruf jar dan majrur",
    cerita: "Kunci ruang guru disembunyikan! Petunjuknya hanya berupa tempat. Perhatikan kata setelah huruf jar, karena harakatnya akan menunjukkan tempat yang benar.",
    ringkasan: "Huruf jar seperti فِي (di dalam), عَلَى (di atas), dan إِلَى (ke) membuat isim setelahnya menjadi majrur, dengan tanda kasrah.",
    rumus: "Setelah huruf jar → majrur → kasrah (ـِ / ـٍ)",
    soal: [
      {
        keterangan: "الْمِفْتَاحُ فِي الْحَقِيبَةِ",
        pertanyaan: "Di mana kuncinya?",
        pilihan: ["Di atas meja", "Di dalam tas", "Di kantin"],
        jawaban: 1,
        petunjuk: "Lihat huruf jar-nya, lalu lihat kata setelahnya.",
        penjelasan: "الْحَقِيبَةِ ada setelah فِي dan berharakat kasrah, jadi dia majrur."
      },
      {
        keterangan: "الْمِفْتَاحُ عَلَى الْمَكْتَبِ",
        pertanyaan: "Di mana kuncinya?",
        pilihan: ["Di atas meja", "Di bawah kursi", "Di dalam tas"],
        jawaban: 0,
        petunjuk: "عَلَى berarti di atas.",
        penjelasan: "الْمَكْتَبِ ada setelah عَلَى dan berharakat kasrah, jadi dia majrur."
      },
      {
        keterangan: "الْكِتَابُ فِي الْمَكْتَبَةِ",
        pertanyaan: "Di mana bukunya?",
        pilihan: ["Di kelas", "Di masjid", "Di perpustakaan"],
        jawaban: 2,
        petunjuk: "Kata setelah فِي menunjukkan tempatnya.",
        penjelasan: "الْمَكْتَبَةِ ada setelah فِي dan berharakat kasrah, jadi dia majrur."
      },
      {
        keterangan: "ذَهَبَ الطَّالِبُ إِلَى الْفَصْلِ",
        pertanyaan: "Ke mana siswa pergi?",
        pilihan: ["Ke kelas", "Ke masjid", "Ke rumah"],
        jawaban: 0,
        petunjuk: "إِلَى berarti ke. Lihat kata setelahnya.",
        penjelasan: "الْفَصْلِ ada setelah إِلَى dan berharakat kasrah, jadi dia majrur. الطَّالِبُ berharakat dhammah, jadi dia fa'il."
      }
    ]
  }

];
