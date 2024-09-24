


let a =prompt("enter your name...");
let b =a.length;

console.log(`@${a}${b}`);
// document.writel(`@${a}${b}`);


const browserType = "mozilla";

if (browserType.startsWith("m")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

const tagline = "MDN - Resources for developers, by developers, too the otel devolopers";
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);
const thirdOccurrence = tagline.indexOf("developers", firstOccurrence + 2);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35
console.log(thirdOccurrence); // 37