function chirp(n){
  if (n === 0){
    return '';
  }
  return 'chirp ' + chirp(--n);
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});
