let name = "Ilya";

`hello ${1}`; // 'hello 1'

`hello ${"name"}`; // 'hello name'

`hello ${name}`; // 'hello Ilya'


typeof 0; // Number
typeof BigInt(10); // bigint
typeof "string"; // string
typeof true; // boolean
typeof null; // object (null)
typeof undefined; // undefined
Symbol("id"); // simboll
typeof Math; // object
