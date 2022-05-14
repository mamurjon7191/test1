const axios = require("axios");
const func = async () => {
  const data = await axios.post("https://54.uz/works.json"); // buni json parse qilish kerak emas chunki ozi abyect
  const significantObj = data.data.works.filter((val) => {
    return val.payment.bonus > 1000;
  });
  console.log(significantObj); // bu yerda bonusni hamma 1000dan kattalari chiqdi
};
func();
// node.js da qilingan
