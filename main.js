
let guestName = prompt("İsminizi Giriniz");
console.log(guestName)
let textContainer = document.querySelector("#text-container");
if (guestName==null || guestName==="" ) {
    guestName = "Misafir"
}
function getDate() {
    const date = new Date();
    const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let day = weekday[date.getDay()];
    let dateString = date.toTimeString().slice(0,8) + " " + day;
    return dateString;
}
function yazdir() {
    textContainer.innerHTML = `<p>
    Merhaba, <strong>${guestName}</strong>! Hoş geldin! <br>
    <span class="time">${getDate()}</span> <br>
    tarihinde <strong>Kodluyoruz Frontend Web Development Patikası</strong>'nın Javascript <br>
    bölümü 1. Ödevindesiniz.</p>
    `
    setInterval(yazdir,1000)
}
  

