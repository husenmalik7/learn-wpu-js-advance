// high order function

function mengerjakanTugas(tugas, selesai) {
  console.log(`mulai mengerjakan tugas ${tugas}`);
  selesai();
}

function selesai() {
  console.log("selesai mengerjakan tugas");
}

mengerjakanTugas("cuci piring", selesai);
