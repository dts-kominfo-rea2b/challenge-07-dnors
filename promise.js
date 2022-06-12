const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput =(emosi) => {
  return new Promise((resolve, reject) => {
    let jumlahEmosi = 0;
    promiseTheaterIXX()
      .then((hasilSetelahMenonton) => {
        hasilSetelahMenonton.forEach((item) => {
          if (item.hasil === emosi) {
            jumlahEmosi += 1;
          }
        });
      })
      .then(
        promiseTheaterVGC().then((hasilSetelahMenonton) => {
          hasilSetelahMenonton.forEach((item) => {
            if (item.hasil === emosi) {
              jumlahEmosi += 1;
            }
          });
          resolve(jumlahEmosi);
        })
      )
      .catch((err) => {
        reject(err);
      });
    
  })
}

module.exports = {
  promiseOutput,
};
