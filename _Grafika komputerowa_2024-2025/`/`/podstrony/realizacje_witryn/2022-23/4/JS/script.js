function startTime() {
  const today = new Date();
  let y = today.getYear();
  let mo = today.getMonth();
  let d = today.getDate();

  let h = today.getHours();
  let min = today.getMinutes();
  let s = today.getSeconds();

  mo = checkTime(mo);
  d = checkTime(d);

  min = checkTime(min);
  s = checkTime(s);

  document.getElementById('clock').innerHTML =  d+"."+mo+"."+y+"<br />" + h + ":" + min + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}