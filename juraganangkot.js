let penumpang = ["udin", undefined, "jamal"];

let tambahPenumpang = function (namaPenumpang, penumpang) {
  let found = penumpang.find(function (e) {
    return e == namaPenumpang;
  });
  //   console.log({ found });

  if (found == undefined) {
    let indexOfUndefined = penumpang.findIndex(function (e) {
      return e == undefined;
    });
    // console.log({ indexOfUndefined });

    if (indexOfUndefined != -1) {
      penumpang.splice(indexOfUndefined, 1, namaPenumpang);
    } else {
      penumpang.push(namaPenumpang);
    }
  } else {
    console.log("nama " + namaPenumpang + " sudah naik");
    return false;
  }
};

//test case 1
// tambahPenumpang("asep", penumpang);

//test case 2
// tambahPenumpang("jamal", penumpang);

//test case 3
// tambahPenumpang("usop", penumpang);
// tambahPenumpang("usop", penumpang);

//-------------------------

let hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length != 0) {
    for (let i = 0; i <= penumpang.length; i++) {
      if (namaPenumpang == penumpang[i]) {
        penumpang[i] = undefined;

        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log("tidak ada nama penumpang yang sesuai");

        return penumpang;
      }
    }
  } else {
    console.log("angkot masih kosong");
  }
};

hapusPenumpang("udin", penumpang);

console.log(penumpang);
