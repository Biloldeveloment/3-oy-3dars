let pay = +prompt("Sayohat qilishingiz uchun sizda bor pulni kiriting(so'mda)"); console.log(pay);
//ticket $350 =>350*11250 = 3 937 500
//living $680 =>680*11250 = 7 650 000
//tour => c| 230=>230*12864= 2 958 720
// min=3 || max=30


let ticket = 350 * 11250;
let living = 350 * 11250;
let tour = 230 * 12864;
console.log('Ticket:' + ticket);
console.log('Living:' + living);
console.log("Tour:" + tour);
let total = 2 * ticket + living + tour; console.log("Total:" + total);
let enough = total - pay; console.log("Yetmayotgan" + enough);
let kun = Math.floor(Math.random() * (30 - 3 + 1) + 3)+ console.log(kun);
if (pay >= total) {
    alert("Mazza qilib kelila ✈️");
} else if (pay === 0) {
    alert("Iltimos pulingiz miqdorini kiriting");
} else if (pay < total) {
    alert(`Pulingiz hozircha yetmaydi.Sizga  yana ${ enough }  pul kerak.Iltimos ${ kun }kundan keyin kelila !`);
} else (alert("Iltimos pulingiz miqdorini kiriting"))

