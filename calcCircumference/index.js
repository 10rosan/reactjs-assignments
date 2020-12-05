function add() {
  const PI=3.14
  let radius = Number(document.getElementById('radius').value);


  document.getElementById('result').innerHTML = radius*PI*2;
  return false;
}

document.getElementById('circumference').addEventListener('click', add);