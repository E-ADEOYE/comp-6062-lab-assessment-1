const myFullName = 'Emmanuel Adeoye';
const myStudentNumber = 1215048;
const result = myFullName.concat('-',myStudentNumber);
console.log(result);
let primaryHeadingContent = document.querySelector('h1');
console.log(primaryHeadingContent.innerHTML);

primaryHeadingContent.classList.add('primaryHeading');
primaryHeadingContent.innerHTML = result;