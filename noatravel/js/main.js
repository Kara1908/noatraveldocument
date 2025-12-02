// =========================
// KONFIGURASI KONTAK
// =========================
const CONTACT_CONFIG = {
  email: "rezaseptiann7@gmail.com",
  whatsappReza: "6282111187730",
  whatsappFidella: "6287715066432",
};

// Sisipkan email ke tampilan
const emailDisplay = document.getElementById("emailDisplay");
if (emailDisplay) {
  emailDisplay.textContent = CONTACT_CONFIG.email;
}



// =========================
// DATA KATALOG VISA
// =========================
const visaCountries = [
  {
    negara: "Amerika Serikat (USA B1/B2)",
    deskripsi:
      "Visa kunjungan untuk urusan bisnis (B1) maupun wisata (B2). Termasuk pendampingan pembuatan akun & penjadwalan wawancara di kedutaan.",
    hargaMulai: "Rp 4.200.000",
    durasiProses: "Durasi fleksibel, mengikuti jadwal kedutaan",
    jenisVisa: "B1 (Bisnis), B2 (Turis)",
    imageUrl: "assets/Amerika.jpg",
  },
  {
    negara: "Australia",
    deskripsi:
      "Pilihan ideal untuk liburan keluarga, studi singkat, maupun perjalanan bisnis ke Sydney, Melbourne, Perth, dan kota lainnya.",
    hargaMulai: "Rp 3.500.000",
    durasiProses: "10–21 hari kerja",
    jenisVisa: "Turis, Bisnis, Kunjungan Keluarga",
    imageUrl: "assets/Australia.jpg",
  },
  {
    negara: "Cina (China)",
    deskripsi:
      "Sering digunakan untuk kunjungan pabrik, meeting bisnis, hingga wisata ke kota bersejarah seperti Beijing dan sekitarnya.",
    hargaMulai: "Rp 1.300.000",
    durasiProses: "7–10 hari kerja",
    jenisVisa: "Bisnis, Turis, Kunjungan",
    imageUrl: "assets/cina.jpg",
  },
  {
    negara: "Inggris (UK)",
    deskripsi:
      "Untuk perjalanan ke London dan kota lain di Inggris, baik untuk liburan, kunjungan keluarga, maupun keperluan bisnis.",
    hargaMulai: "Rp 3.800.000",
    durasiProses: "15–30 hari kerja",
    jenisVisa: "Turis, Bisnis, Studi Singkat",
    imageUrl: "assets/Inggris.jpg",
  },
  {
    negara: "Schengen Eropa (Prancis, dll.)",
    deskripsi:
      "Satu visa untuk menjelajahi beberapa negara di area Schengen, termasuk Prancis, Jerman, Italia, Belanda, dan lainnya.",
    hargaMulai: "Rp 3.400.000",
    durasiProses: "10–21 hari kerja",
    jenisVisa: "Turis, Bisnis, Kunjungan Keluarga",
    imageUrl: "assets/paris.jpg",
  },
  {
    negara: "Kanada",
    deskripsi:
      "Cocok untuk liburan kota besar seperti Toronto, Vancouver, atau kunjungan keluarga dan perjalanan bisnis.",
    hargaMulai: "Rp 3.700.000",
    durasiProses: "15–30 hari kerja",
    jenisVisa: "Turis, Bisnis, Kunjungan Keluarga",
    imageUrl: "assets/rusia.jpg",
  },
  {
    negara: "Jepang",
    deskripsi:
      "Cocok untuk liburan musim semi, musim gugur, hingga perjalanan bisnis ke Tokyo, Osaka, atau kota lainnya.",
    hargaMulai: "Rp 1.300.000",
    durasiProses: "7–15 hari kerja",
    jenisVisa: "Turis, Bisnis, Kunjungan Keluarga",
    imageUrl:
      "https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=1200&q=80",
  },
  {
    negara: "Korea Selatan",
    deskripsi:
      "Favorit untuk penggemar K-Pop & drama, juga untuk perjalanan bisnis ke Seoul dan kota besar lainnya.",
    hargaMulai: "Rp 1.600.000",
    durasiProses: "7–14 hari kerja",
    jenisVisa: "Turis, Bisnis, Kunjungan Keluarga",
    imageUrl:
      "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=1200&q=80",
  },
  {
    negara: "Turki (e-Visa)",
    deskripsi:
      "Proses relatif cepat dan praktis, cocok untuk transit panjang maupun liburan singkat di Istanbul.",
    hargaMulai: "Rp 950.000",
    durasiProses: "1–3 hari kerja",
    jenisVisa: "e-Visa Turis",
    imageUrl: "assets/Turki.jpg",
  },
  {
    negara: "Arab Saudi (Umrah / Kunjungan)",
    deskripsi:
      "Untuk perjalanan ibadah Umrah, kunjungan keluarga, maupun keperluan bisnis tertentu ke Arab Saudi.",
    hargaMulai: "Rp 1.800.000",
    durasiProses: "7–14 hari kerja",
    jenisVisa: "Umrah, Kunjungan Keluarga, Bisnis",
    imageUrl:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80",
  },
];



// =========================
// RENDER VISA CARDS
// =========================
function renderVisaCards(targetId) {
  const container = document.getElementById(targetId);
  if (!container) return;

  container.innerHTML = "";

  visaCountries.forEach((item) => {
    const card = document.createElement("article");
    card.className = "nv-visa-card";

    card.innerHTML = `
      <div class="nv-visa-img-wrap">
        <img src="${item.imageUrl}" alt="Ilustrasi negara ${item.negara}" loading="lazy" />
        <span class="nv-visa-tag">${item.negara}</span>
      </div>

      <div class="nv-visa-body">
        <h3 class="nv-visa-name">${item.negara}</h3>
        <p class="nv-visa-desc">${item.deskripsi}</p>

        <div class="nv-visa-meta">
          <div>
            <span class="nv-visa-meta-label">Durasi proses</span><br/>
            <span>${item.durasiProses}</span>
          </div>

          <div>
            <span class="nv-visa-meta-label">Jenis visa</span><br/>
            <span>${item.jenisVisa}</span>
          </div>
        </div>
      </div>

      <div class="nv-visa-footer">
        <div class="nv-visa-price">
          <span>Mulai dari</span>
          <span class="nv-price-value">${item.hargaMulai}</span>
        </div>

        <a href="hubungi.html" class="nv-btn-outline nv-btn-consult">
          Detail &amp; Konsultasi
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("visaGrid")) {
    renderVisaCards("visaGrid");
  }
  if (document.getElementById("visaGridDetail")) {
    renderVisaCards("visaGridDetail");
  }
});



// =========================
// PILIHAN NEGARA DI FORM (jika ada select negaraTujuan)
// =========================
const negaraSelect = document.getElementById("negaraTujuan");

function renderNegaraOptions() {
  if (!negaraSelect) return;
  visaCountries.forEach((item) => {
    const opt = document.createElement("option");
    opt.value = item.negara;
    opt.textContent = item.negara;
    negaraSelect.appendChild(opt);
  });
}
renderNegaraOptions();



// =========================
// HERO FORM → SCROLL KE KATALOG
// =========================
const heroForm = document.getElementById("heroForm");

if (heroForm) {
  heroForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const target = document.getElementById("katalog-visa");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
}



// =========================
// MENU MOBILE
// =========================
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.style.display === "flex";
    mobileMenu.style.display = isOpen ? "none" : "flex";
    menuToggle.classList.toggle("active", !isOpen);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.style.display = "none";
      menuToggle.classList.remove("active");
    });
  });
}



// =========================
// FAQ AKORDION
// =========================
const faqItems = document.querySelectorAll(".nv-faq-item");

faqItems.forEach((item) => {
  const btn = item.querySelector(".nv-faq-question");
  btn.addEventListener("click", () => {
    const isActive = item.classList.contains("active");
    faqItems.forEach((i) => i.classList.remove("active"));
    if (!isActive) item.classList.add("active");
  });
});



// =========================
// FOOTER TAHUN OTOMATIS
// =========================
const footerYear = document.getElementById("footerYear");
if (footerYear) {
  const year = new Date().getFullYear();
  footerYear.textContent = `© ${year} NoaTravel. Seluruh hak cipta dilindungi.`;
}



// =========================
// SMOOTH SCROLL fallback
// =========================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});



// =================================================================
// ========================= CONTACT FORM ===========================
// =================================================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil data form (pakai id dari hubungi.html)
    const nama   = document.getElementById("namaLengkap")?.value || "";
    const waUser = document.getElementById("waNumber")?.value || "";
    const email  = document.getElementById("emailInput")?.value || "";
    const negara = document.getElementById("negaraTujuanInput")?.value || "";
    const jenis  = document.getElementById("jenisVisaSelect")?.value || "";
    const pesan  = document.getElementById("pesanInput")?.value || "";

    // Validasi simple
    if (!nama || !waUser) {
      alert("Nama lengkap dan nomor WhatsApp wajib diisi.");
      return;
    }

    // Optional: disable tombol selama proses
    const submitBtn = contactForm.querySelector(".nv-contact-submit");
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "Mengirim...";

    // =========================
    // KIRIM EMAIL DENGAN EMAILJS
    // =========================
    // GANTI "SERVICE_ID" dan "TEMPLATE_ID" sesuai di EmailJS
    emailjs
      .send("SERVICE_ID", "TEMPLATE_ID", {
        nama: nama,
        whatsapp: waUser,
        email: email,
        negara: negara,
        jenisVisa: jenis,
        pesan: pesan,
      })
      .then(() => {
        alert(
          "Pesan berhasil dikirim! Tim NoaTravel akan membalas melalui email atau WhatsApp."
        );
        contactForm.reset();
      })
      .catch((err) => {
        console.error(err);
        alert("Gagal mengirim pesan. Silakan coba lagi beberapa saat lagi.");
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      });
  });
}

