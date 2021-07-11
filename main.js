// Destructuring

let obj = {
    name: "Sirchai",
    lastname: "Daengchaona",
    age: 20,
    salary: 10000
}

let obj2 = {
    name: "Museum",
    lastname: "Dindee",
    age: 25,
    salary: 18000
}

const showdata = ({name, lastname, age, salary}) =>`สวัสดีคุณ ${name} ${lastname}
ขณะนี้คุณมีอายุ ${age}
เงินเดือนของคุณ ${salary}`;

console.log(showdata(obj));
console.log(showdata(obj2));

// Spread Operator

const fun = (x, y, z) => x + y + z;

let num = [5, 6, 7];

let res = fun(...num); //...num  fun(5, 6, 7);

console.log(res);