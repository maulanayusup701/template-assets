document.addEventListener("DOMContentLoaded", function () {
  // Inisialisasi Quill editor
  const quill = new Quill("#editor", {
    theme: "snow",
  });

  // Tambahkan event listener pada submit
  document
    .querySelector("#selfAssessmentForm")
    .addEventListener("submit", function (event) {
      // Cek apakah editor tidak kosong sebelum submit
      var content = quill.root.innerHTML;
      if (content === "<p><br></p>") {
        alert("Editor tidak boleh kosong!");
        event.preventDefault(); // Batalkan submit jika kosong
        return;
      }

      // Tampilkan di konsol untuk debugging
      // console.log("content dari Quill:", content);

      // Masukkan nilai dari editor ke input hidden
      // document.getElementById("content").value = content;
    });
});
