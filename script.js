let a1 = 0,
  a2 = 1,
  nextTerm,
  num,
  hasil = 1,
  str = [];

function Bilangan(num) {
  num = document.getElementById("angka").value;

  if (num <= 0 || num >= 21) {
    document.getElementById("demo").innerHTML = "Error";
  } else if (num % 2 == 1) {
    for (let i = 1; a2 <= num * 10; i++) {
      str.push(a2);
      nextTerm = a1 + a2;
      a1 = a2;
      a2 = nextTerm;
    }
    document.getElementById("demo").innerHTML = str.join(" ");
    str = [];
    a1 = 0;
    a2 = 1;
  } else if (num % 2 == 0) {
    for (let j = 1; j <= num / 2; j++) {
      hasil = j * hasil;
      str.push(j);
      if (j == num / 2) {
        str.push("=" + hasil);
      } else if (j != num / 2) {
        str.push("x");
      }
    }
    document.getElementById("demo").innerHTML = str.join("");
    str = [];
    hasil = 1;
  } else {
    document.getElementById("demo").innerHTML = "error";
  }
}
