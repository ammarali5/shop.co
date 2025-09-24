document.querySelectorAll(".qty-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    let qtySpan = this.parentElement.querySelector(".qty");
    let qty = parseInt(qtySpan.textContent);

    if (this.textContent === "+" && qty < 10) {
      qty++;
    } else if (this.textContent === "-" && qty > 1) {
      qty--;
    }
    qtySpan.textContent = qty;
  });
});
