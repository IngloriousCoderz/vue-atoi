const singleQuotes = 'Hello "world", how are you?';
const doubleQuotes = "Hello 'world', how are you?";

const concatenation = singleQuotes + doubleQuotes;
console.log(concatenation);

const templateLiteral = `I can use 'single' and "double" \`quotes\`!
They are multiline too!
We can interpolate JS ${"expressions".toUpperCase()}!`;
console.log(templateLiteral);

const html = `
<p class="paragraph">
  hello world!
</p>`;
console.log(html);

const userId = 1;
const url = "/api/user/" + userId + "/profile";
const betterUrl = `/api/user/${userId}/profile`;
console.log(url, betterUrl);

// CRUD

const firstCharacter = url[0];
const thirdCharacter = url[2];
const lastCharacter = url[url.length - 1];
console.log(firstCharacter, thirdCharacter, lastCharacter);

// strings are immutable
url[2] = "x";
console.log(url);

const changedUrl = url.slice(0, 2) + "x" + url.slice(3);
const betterChangedUrl = `${url.slice(0, 2)}x${url.slice(3)}`;
console.log(url, changedUrl, betterChangedUrl);
