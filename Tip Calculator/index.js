function add() {
  let tip_percent = Number(document.getElementById('tip_percent').value);
  let total_salary = Number(document.getElementById('total_salary').value);
  //Raise Alert if tip is more than 30%
  if (tip_percent>30){
      alert("Tip percent is very high try again")
  }
  else{
      document.getElementById('tip_calculator').innerHTML = total_salary+total_salary*(tip_percent/100) ;
      return false;
  }

}

document.getElementById('tip_calculate_button').addEventListener('click', add);