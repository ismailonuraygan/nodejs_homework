/*Hepimizin Matematik derslerinden bildiği üzere
 Dairenin Alanı = π x r2 şeklinde hesaplanır.
 Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan
 parametre olarak girerek alanı bulmaya çalışacağız.
 Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.

 */
 const arguments = process.argv.slice(2);

 let circle_area = (r) => {
     return Math.PI * (r * r);
 }


console.log(`Yaricapi ${arguments[0]} olan cemberin alani: ${circle_area(arguments[0]*1)}`);