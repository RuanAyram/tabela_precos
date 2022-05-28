function showPageloader(){
  setTimeout(showPage, 1000);
}

function showPage(){
  document.getElementsByClassName('pageloader')[0].classList.remove("is-active");
  document.getElementById("container").style.display = "block";
}
