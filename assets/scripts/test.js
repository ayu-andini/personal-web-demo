// ===============================
// DEMO TIPE DATA DI JAVASCRIPT
// ===============================

// // 1. String
// let name = "Ayu Andini";
// console.log("Value:", name);
// console.log("Type:", typeof name);
// console.log("-------------------");

// // 2. Number
// let age = 25;
// console.log("Value:", age);
// console.log("Type:", typeof age);
// console.log("-------------------");

// // 3. Boolean
// let isStudent = true;
// console.log("Value:", isStudent);
// console.log("Type:", typeof isStudent);
// console.log("-------------------");

// // 4. Null
// let emptyValue = null;
// console.log("Value:", emptyValue);
// console.log("Type:", typeof emptyValue); 
// // NOTE: typeof null adalah object (ini bug lama di JavaScript)
// console.log("-------------------");

// // 5. Undefined
// let notAssigned;
// console.log("Value:", notAssigned);
// console.log("Type:", typeof notAssigned);
// console.log("-------------------");

// // 6. Object
// let user = {
//     name: "Ayu",
//     role: "Backend Developer",
//     email: "ayu@gmail.com"
// };
// console.log(user.email);

// console.log("Value:", user);
// console.log("Type:", typeof user);
// console.log("-------------------");

// // 7. Array
let fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits[3]);
console.log("Value:", fruits);
// console.log("Type:", typeof fruits); 
// array di JS sebenarnya object

fruits.push("Mango");
console.log("Value Updated:", fruits);

fruits.shift();
console.log("Value 2 Updated:", fruits);


// console.log("-------------------");




// // 8. Function
// function greet() {
//   return "Hello World!";
// }
// console.log("Value:", greet);
// console.log("Type:", typeof greet);
// console.log("-------------------");

// // 9. Symbol (ES6)
// let id = Symbol("id");
// console.log("Value:", id);
// console.log("Type:", typeof id);
// console.log("-------------------");

// // 10. BigInt
// let bigNumber = 123456789012345678901234567890n;
// console.log("Value:", bigNumber);
// console.log("Type:", typeof bigNumber);
// console.log("-------------------");



// console.log("=== DEMO VAR, LET, CONST ===");

// =======================
// VAR
// =======================
// console.log("\n1. VAR");

// var name = "Ayu";
// console.log("Name:", name);

// // var bisa diubah nilainya
// name = "Andini";
// console.log("Updated name:", name);

// // var bisa dideklarasi ulang
// var name = "Developer";
// console.log("Redeclared name:", name);


// =======================
// LET
// =======================
// console.log("\n2. LET");

// let age = 22;
// console.log("Age:", age);

// // let bisa diubah
// age = 23;
// console.log("Updated age:", age);

// let tidak bisa dideklarasi ulang
// let age = 25  // ❌ akan error


// =======================
// CONST
// =======================
// console.log("\n3. CONST");

// const country = "Indonesia";
// console.log("Country:", country);

// const tidak bisa diubah
// country = "Japan"; // ❌ error

// const juga tidak bisa dideklarasi ulang
// const country = "Korea"; // ❌ error



// =======================
// BLOCK SCOPE (let & const)
// =======================
// console.log("\n4. BLOCK SCOPE");

// {
//     let city = "Jakarta";
//     const zip = 12345;

//     console.log("Inside block:", city);
//     console.log("Inside block:", zip);
// }

// console.log(city); ❌ error karena di luar block


// =======================
// VAR tidak memiliki block scope
// =======================
// console.log("\n5. VAR BLOCK TEST");

// {
//     var job = "Backend Developer";
// }

// console.log("Var outside block:", job);


// console.log("\n=== DEMO SELESAI ===");


// console.log("=== DEMO FUNCTION JAVASCRIPT ===");

// =======================
// 1. FUNCTION TANPA PARAMETER
// =======================

// function sayHello() {
//     console.log("Hello, selamat datang di JavaScript!");
// }

// console.log("\n1. Function tanpa parameter:");
// sayHello(); // memanggil function



// =======================
// 2. FUNCTION DENGAN PARAMETER
// =======================

// function greetUser(name) {
//     console.log("Halo " + name + ", selamat belajar JavaScript!");
// }

// console.log("\n2. Function dengan parameter:");
// greetUser("Ayu");
// greetUser("Budi");



// =======================
// 3. FUNCTION DENGAN RETURN VALUE
// =======================

// function tambah(a, b) {
//     return a + b;
// }

// console.log("\n3. Function dengan return value:");

// const hasil = tambah(13, 5);
// console.log("Hasil penjumlahan:", hasil);


// =======================
// 4. RETURN LANGSUNG
// =======================

// console.log("\n4. Return langsung:");

// console.log("10 + 7 =", tambah(10, 7));

// console.log("\n=== DEMO SELESAI ===");


// Function tradisional
// function sum(a, b) {
//     return a + b;
// }
// const hasil = sum()

// Arrow function — lebih singkat!
// const sum = (a, b) => a + b;
// const hasil = sum(2,3)
// console.log(hasil);


// Kalau hanya 1 parameter, kurung bisa dihilangkan
// const greeting = name => 'Halo, ' + name;


// console.log("DOM Demo Started");
// // =============================
// // 1. Mengakses elemen HTML
// // =============================

// const title = document.getElementById("title");
// console.log("Isi title:", title.innerText);


// // =============================
// // 2. Mengubah isi HTML
// // =============================

// function ubahText() {
//     const description = document.getElementById("description");

//     description.innerText = "Teks ini sudah diubah oleh JavaScript!";
// console.log("Isi Description:", description.innerText);

// }
// console.log("Isi Description:", description.innerText);


// ====== LOOPING =======
// let fruits = ['Apple', 'Banana', 'Orange'];

// Cara 1: FOR loop klasik
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// // Cara 2: FOR...OF — lebih modern dan simpel
// for (let fruit of fruits) {
//   console.log(fruit);
// }

// console.log("penambahan angka");
// for (let i = 1; i <= 4; i++){
//     console.log(i); 
// }

// console.log("pengurangan angka");
// for (let a = 5; a >= 1; a--){
//     console.log(a);
// }