// Show Pageloader
function showPageloader(){
  setTimeout(showPage, 1000);
}

function showPage(){
  document.getElementsByClassName('pageloader')[0].classList.remove('is-active');
  document.getElementById('container').style.display = 'block';
}

// Get the current year
var year = document.getElementById('year');
year.innerText = new Date().getFullYear();


// Send msg to whatsapp
var number   = '86989249062';
var text_one = 'Estou%20interessado!%20Gostaria%20de%20saber%20%sobre%20o%20';
var text_two = 'Estou%20interessado!%20Qual%20a%20diferenca%20entre%20os%20servidores?'

var btn_25 = document.querySelector('.btn_25')
var btn_30 = document.querySelector('.btn_30')
var btn_35 = document.querySelector('.btn_35')
