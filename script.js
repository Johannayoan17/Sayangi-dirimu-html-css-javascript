const swalst = Swal.mixin({timer: 2777, allowOutsideClick: false, showConfirmButton: false, timerProgressBar: true, imageHeight: 100,}); 
const swals = Swal.mixin({allowOutsideClick: false, cancelButtonColor: '#FF0040', imageWidth: 100, imageHeight: 100,}); ftom=0;jikakuis=0;ftganti=0;flag=1;flagg=1;fungsi=0; 
const body = document.querySelector("body");
function createHeart() {
const heart = document.createElement("div"); heart.className = "fas fa-heart"; heart.style.left = (Math.random() * 90)+"vw"; heart.style.animationDuration = (Math.random()*3)+2+"s"; body.appendChild(heart);} setInterval(function name(params) {
var heartArr = document.querySelectorAll(".fa-heart"); 
if (heartArr.length > 100) {heartArr[0].remove()}},100);

function mulaikonten() {
  fmulaikonten();audio.play();ftganti=0;ftmuncul();
  setTimeout(fmulaiketik1,2300);setTimeout(mulaiketik1,2500);
  setTimeout(fmulaiketik1b,3900);setTimeout(mulaiketik1b,3900);
  setTimeout(fmulaiketik2,5500);setTimeout(mulaiketik2,5500);
}
function ftmuncul(){
if(ftganti==0){fotoakhir.style="display:inline-flex;transition:all .7s ease;opacity:1;transform:scale(1)";}
if(ftganti==1){fotoakhir.src = fotoakhir4.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
if(ftganti==2){fotoakhir.src = fotoakhir3.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
if(ftganti==3){fotoakhir.src = fotoAkhir.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
}
async function jawab(){
var { value: jawaban } = await swals.fire({title: 'Ketik Jawaban &#128073;&#128072;', input: 'text', allowOutsideClick: false, showCancelButton: false,});
if(jawaban && jawaban.length < 19){
  window.jawaban = jawaban;pesanwhatsapp = jawaban;balasan = jawaban;otomatis3();setTimeout(stakhir,1000);
} else {
await swals.fire('Ups!', 'Jawaban tidak boleh kosong atau lebih dari 18 karakter, ya!😅',);
 }
}
