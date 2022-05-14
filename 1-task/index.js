const colors = ["red", "yellow", "blue", "black"];
let a = 0;
setInterval(() => {
  if (a > colors.length) {
    a = 0;
  }
  document.body.style.backgroundColor = colors[a++];
  console.log(1);
}, 1000);
