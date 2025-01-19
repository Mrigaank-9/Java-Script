const name = "Mrigaank";
const repoCount = 50;

console.log(name + repoCount + "value");

// string interpollation
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String("AbC-123");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf("C"));

const newString = gameName.substring(0, 3); // negative not allowed
console.log(newString);

const anotherString = gameName.slice(0, 4); // negative allowedd
console.log(anotherString);

const newStrinONe = "    Mrigaank    ";
console.log(newStrinONe);
console.log(newStrinONe.trim());

const url = "https://hitesh.com/mrigaank%20Jaswal";
console.log(url.replace("%20", "-"));

console.log(url.includes("mrigaank"));

console.log(gameName.split("-"));
