const packages = {
  bali: {
    name: "Bali Escape",
    destination: "Bali",
    duration: "3 Hari 2 Malam",
    price: "Rp2.450.000",
    highlight: "Pantai, budaya, dan sunset",
    description: "Nikmati pantai, budaya, dan sunset di Pulau Dewata, termasuk kunjungan ke pura ikonik di tepi laut.",
    facilities: ["Transportasi lokal", "Hotel 2 malam", "Tiket masuk wisata", "Pemandu wisata"]
  },
  bromo: {
    name: "Bromo Sunrise Trip",
    destination: "Gunung Bromo, Jawa Timur",
    duration: "2 Hari 1 Malam",
    price: "Rp1.350.000",
    highlight: "Sunrise dan lautan pasir",
    description: "Berangkat dini hari untuk menyaksikan sunrise dari puncak penanjakan, lalu menyusuri lautan pasir menuju kawah.",
    facilities: ["Jeep 4WD", "Penginapan 1 malam", "Tiket masuk TNBTS", "Pemandu wisata"]
  },
  rajaampat: {
    name: "Raja Ampat Discovery",
    destination: "Raja Ampat, Papua Barat Daya",
    duration: "4 Hari 3 Malam",
    price: "Rp5.750.000",
    highlight: "Island hopping dan snorkeling",
    description: "Island hopping antar gugusan pulau karst dan snorkeling di perairan dengan keanekaragaman laut terbaik dunia.",
    facilities: ["Speedboat", "Homestay 3 malam", "Peralatan snorkeling", "Tiket masuk kawasan", "Pemandu lokal"]
  },
  labuanbajo: {
    name: "Labuan Bajo Explorer",
    destination: "Labuan Bajo, NTT",
    duration: "3 Hari 2 Malam",
    price: "Rp3.950.000",
    highlight: "Pulau Komodo dan sailing",
    description: "Berlayar menuju Pulau Komodo, melihat komodo dari dekat, dan menikmati sailing di antara pulau-pulau eksotis.",
    facilities: ["Kapal sailing", "Akomodasi 2 malam", "Tiket Taman Nasional Komodo", "Pemandu wisata"]
  },
  pantaiora: {
    name: "Pantai Ora Retreat",
    destination: "Pantai Ora, Seram, Maluku",
    duration: "3 Hari 2 Malam",
    price: "Rp4.750.000",
    highlight: "Bungalow di atas air dan snorkeling",
    description: "Menginap di bungalow di atas air dengan laut sebening kaca, cocok untuk snorkeling dan bersantai.",
    facilities: ["Transfer speedboat", "Bungalow di atas air 2 malam", "Peralatan snorkeling", "Sarapan harian"]
  }
};

const id = new URLSearchParams(window.location.search).get("id");
const p = packages[id];

const content = document.getElementById("detailContent");
const empty = document.getElementById("detailEmpty");

if (!p) {
  empty.classList.remove("d-none");
} else {
  document.title = p.name + " - JelajahNusa";

  const img = document.querySelector('#dImages [data-pkg="' + id + '"]');
  if (img) img.classList.remove("d-none");

  document.getElementById("dName").textContent = p.name;
  document.getElementById("dDest").textContent = p.destination;
  document.getElementById("dDur").textContent = p.duration;
  document.getElementById("dPrice").textContent = p.price;
  document.getElementById("dHighlight").textContent = p.highlight;
  document.getElementById("dDesc").textContent = p.description;

  document.getElementById("dFac").innerHTML = p.facilities
    .map(f => `<li><i class="fa-solid fa-circle-check"></i> ${f}</li>`)
    .join("");

  content.classList.remove("d-none");

  document.getElementById("bookBtn").addEventListener("click", () => {
    const toast = document.getElementById("bookToast");
    toast.classList.remove("d-none");

    const params = new URLSearchParams({
      paket: p.name,
      durasi: p.duration,
      harga: p.price
    });

    setTimeout(() => {
      window.location.href = "contact.html?" + params.toString();
    }, 1500);
  });
}