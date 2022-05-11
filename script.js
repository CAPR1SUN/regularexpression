let regExp = /[y]/;
let testString = 'yone'

function checker() {
  if (regExp.test(testString)) {
    console.log(`${testString} has the letter y.`);
  } else {
    console.log(`${testString} does not have the letter y.`);
  }
}

checker()
