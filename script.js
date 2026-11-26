const modal = new bootstrap.Modal(document.getElementById("packageModal"));

document.getElementById("packageGrid").addEventListener("click", e => {
  const btn = e.target.closest(".package-btn");
  if (!btn) return;

  const d = btn.dataset;
  document.getElementById("modalImg").src = d.img;
  document.getElementById("modalImg").alt = d.name;
  document.getElementById("modalName").textContent = d.name;
  document.getElementById("modalDest").textContent = d.dest;
  document.getElementById("modalDur").textContent = d.dur;
  document.getElementById("modalHigh").textContent = d.high;
  document.getElementById("modalPrice").textContent = d.price;
  modal.show();
});