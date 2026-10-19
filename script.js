// ===================================================
// script.js : logika permainan Detektif Nahwu
// Dipakai oleh index.html (beranda) dan kasus.html (permainan).
// Membutuhkan data.js yang dimuat lebih dulu.
// ===================================================

// ---------- 1. PENYIMPANAN PROGRES (localStorage) ----------
// Bentuk data: { skor: { "1": 4, "2": 3 } }
// "1": 4 artinya kasus 1 sudah selesai dengan 4 jawaban benar di percobaan pertama.
const KUNCI_SIMPAN = "detektifNahwu";
const POIN_PER_SOAL = 10;

function muatProgres() {
  try {
    const data = JSON.parse(localStorage.getItem(KUNCI_SIMPAN));
    if (data && data.skor) return data;
  } catch (e) {
    // abaikan, pakai data kosong
  }
  return { skor: {} };
}

function simpanProgres(progres) {
  try {
    localStorage.setItem(KUNCI_SIMPAN, JSON.stringify(progres));
  } catch (e) {
    // kalau penyimpanan diblokir, permainan tetap jalan tanpa menyimpan
  }
}

// ---------- 2. FUNGSI BANTU ----------
function hitungPoin(progres) {
  let total = 0;
  for (const id in progres.skor) {
    total += progres.skor[id] * POIN_PER_SOAL;
  }
  return total;
}

function tentukanPangkat(poin) {
  if (poin >= 80) return "Detektif Senior";
  if (poin >= 40) return "Detektif Muda";
  return "Detektif Pemula";
}

// Kasus 1 selalu terbuka. Kasus lain terbuka kalau kasus sebelumnya sudah selesai.
function kasusTerbuka(id, progres) {
  return id === 1 || progres.skor[id - 1] !== undefined;
}

function tampilkanStatus(progres) {
  const poin = hitungPoin(progres);
  document.getElementById("pangkat").textContent = tentukanPangkat(poin);
  document.getElementById("poin").textContent = poin + " poin";
}

// ---------- 3. HALAMAN BERANDA ----------
function jalankanBeranda() {
  const progres = muatProgres();
  tampilkanStatus(progres);

  const daftar = document.getElementById("daftar");

  kasus.forEach(function (k) {
    const item = document.createElement("li");
    item.className = "kasus-item";

    const teks = document.createElement("div");
    const judul = document.createElement("h3");
    judul.textContent = k.judul;
    const deskripsi = document.createElement("p");
    deskripsi.textContent = k.topik;
    teks.append(judul, deskripsi);

    let status;
    if (!kasusTerbuka(k.id, progres)) {
      item.classList.add("terkunci");
      status = document.createElement("span");
      status.className = "status";
      status.textContent = "Terkunci";
    } else {
      status = document.createElement("a");
      status.className = "status";
      status.href = "kasus.html?id=" + k.id;
      if (progres.skor[k.id] !== undefined) {
        item.classList.add("selesai");
        status.textContent = "Selesai " + progres.skor[k.id] + "/" + k.soal.length + ", main lagi";
      } else {
        item.classList.add("terbuka");
        status.textContent = "Buka kasus";
      }
    }

    item.append(teks, status);
    daftar.append(item);
  });
}

// ---------- 4. HALAMAN KASUS ----------
function jalankanKasus() {
  const progres = muatProgres();
  tampilkanStatus(progres);

  // Ambil nomor kasus dari link, contoh: kasus.html?id=2
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id")) || 1;
  const k = kasus.find(function (x) { return x.id === id; });

  // Kalau kasus tidak ada atau masih terkunci, kembali ke beranda
  if (!k || !kasusTerbuka(id, progres)) {
    window.location.href = "index.html";
    return;
  }

  // Ambil elemen-elemen yang akan diubah
  const tahapCerita = document.getElementById("tahap-cerita");
  const tahapSoal = document.getElementById("tahap-soal");
  const tahapSelesai = document.getElementById("tahap-selesai");
  const tombolLanjut = document.getElementById("tombol-lanjut");
  const kotakPilihan = document.getElementById("pilihan");
  const umpanBalik = document.getElementById("umpan-balik");

  // Isi tahap cerita
  document.title = k.judul + " | Detektif Nahwu";
  document.getElementById("judul-kasus").textContent = k.judul;
  document.getElementById("cerita-kasus").textContent = k.cerita;
  document.getElementById("ringkasan-kasus").textContent = k.ringkasan;

  // Status permainan
  let nomorSoal = 0;        // soal ke berapa (mulai dari 0)
  let benarPertama = 0;     // jumlah soal benar di percobaan pertama
  let sudahSalah = false;   // apakah soal ini sudah pernah salah

  function tampilkanSoal() {
    const s = k.soal[nomorSoal];
    sudahSalah = false;

    document.getElementById("progres").textContent =
      "Soal " + (nomorSoal + 1) + " dari " + k.soal.length;
    document.getElementById("teks-arab").textContent = s.keterangan;
    document.getElementById("teks-pertanyaan").textContent = s.pertanyaan;

    umpanBalik.textContent = "";
    umpanBalik.className = "umpan-balik";
    tombolLanjut.classList.add("tersembunyi");
    kotakPilihan.innerHTML = "";

    s.pilihan.forEach(function (teksPilihan, nomor) {
      const tombol = document.createElement("button");
      tombol.type = "button";
      tombol.textContent = teksPilihan;
      tombol.addEventListener("click", function () {
        periksaJawaban(tombol, nomor);
      });
      kotakPilihan.append(tombol);
    });
  }

  function periksaJawaban(tombol, nomor) {
    const s = k.soal[nomorSoal];

    if (nomor === s.jawaban) {
      // Jawaban benar
      tombol.classList.add("benar");
      kotakPilihan.querySelectorAll("button").forEach(function (b) {
        b.disabled = true;
      });
      umpanBalik.textContent = "Benar! " + s.penjelasan;
      umpanBalik.className = "umpan-balik benar";
      if (!sudahSalah) benarPertama++;

      const terakhir = nomorSoal === k.soal.length - 1;
      tombolLanjut.textContent = terakhir ? "Lihat hasil" : "Soal berikutnya";
      tombolLanjut.classList.remove("tersembunyi");
      tombolLanjut.focus();
    } else {
      // Jawaban salah: beri petunjuk, siswa boleh mencoba lagi
      sudahSalah = true;
      tombol.classList.add("salah");
      tombol.disabled = true;
      umpanBalik.textContent = "Belum tepat. " + s.petunjuk;
      umpanBalik.className = "umpan-balik salah";
    }
  }

  function tampilkanHasil() {
    // Simpan skor terbaik
    const skorLama = progres.skor[id] || 0;
    progres.skor[id] = Math.max(skorLama, benarPertama);
    simpanProgres(progres);
    tampilkanStatus(progres);

    // Lencana sesuai jumlah jawaban benar di percobaan pertama
    const total = k.soal.length;
    let lencana = "Detektif Perunggu 🥉";
    if (benarPertama === total) lencana = "Detektif Emas 🥇";
    else if (benarPertama >= total - 1) lencana = "Detektif Perak 🥈";

    document.getElementById("lencana").textContent = lencana;
    document.getElementById("skor-akhir").textContent =
      benarPertama + " dari " + total + " soal benar di percobaan pertama";
    document.getElementById("rumus-kasus").textContent = k.rumus;

    // Tombol kasus berikutnya
    const berikutnya = kasus.find(function (x) { return x.id === id + 1; });
    const tombolBerikutnya = document.getElementById("tombol-berikutnya");
    if (berikutnya) {
      tombolBerikutnya.href = "kasus.html?id=" + berikutnya.id;
    } else {
      tombolBerikutnya.textContent = "Semua kasus selesai";
    }

    tahapSoal.classList.add("tersembunyi");
    tahapSelesai.classList.remove("tersembunyi");
  }

  // Tombol "Mulai menyelidiki"
  document.getElementById("tombol-mulai").addEventListener("click", function () {
    tahapCerita.classList.add("tersembunyi");
    tahapSoal.classList.remove("tersembunyi");
    tampilkanSoal();
  });

  // Tombol "Soal berikutnya" atau "Lihat hasil"
  tombolLanjut.addEventListener("click", function () {
    if (nomorSoal < k.soal.length - 1) {
      nomorSoal++;
      tampilkanSoal();
    } else {
      tampilkanHasil();
    }
  });
}

// ---------- 5. PILIH FUNGSI SESUAI HALAMAN ----------
const halaman = document.body.dataset.halaman;
if (halaman === "beranda") jalankanBeranda();
if (halaman === "kasus") jalankanKasus();
