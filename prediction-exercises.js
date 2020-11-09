//** 
  Prediction exercises
  Type or copy/paste these problems one at a time, and give students an opportunity to predict the outcome for each one.
*/

//***************************** 1 **********************************/

function tipCalculator(total, tip) {
	const tipAmt = total * tip;
	const totalWithTip = total + tipAmt;

	return totalWithTip;
}

tipCalculator(100, .10)


//***************************** 2 **********************************/

function reverseStr(str) {
	const strArr = str.split('');
	let reversedArr = [];

	for(let i=strArr.length; i>=0; i--) {
		reversedArr.push(strArr[i])
	}
	const reversedStr = reversedArr.join('')
	return reversedStr;
}

reverseStr('Hello, from your text editor!')

//***************************** 3 **********************************/

function oldEnoughToDrive(age) {
	if(age > 16) {
		return "Congrats, you are old enough to have a license. Drive responsibly!"
	}
	else {
		return "Not so fast! You'll be old enough to drive in " + (16-age) + " years."
	}
}

oldEnoughToDrive(18)

//***************************** 4 **********************************/

function countLetter(str, letter) {
	let strArr = str.split('');

	let letterCount = 0;

	for(let i=0; i<strArr.length; i++) {
		if(letter === strArr[i]) {
			letterCount += 1
		}
	}

	return letterCount;
}

countLetter('melanie', 'e')

//***************************** 5 **********************************/

function capitalizeEach(sentence, action) {
  const sentenceArr = sentence.split(' ');
  console.log(sentenceArr)
  const capitalizedSentence = [];

  for (var i = 0; i < sentenceArr.length; i++) {
	const capitalizedWord = capitalizeChar(sentenceArr[i])
	capitalizedSentence.push(capitalizedWord)
  }
  return capitalizedSentence.join(' ');
}

function capitalizeChar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var sentence = 'my name is melanie';

// Write a single line of code that will result in the first letter in each word being capitalized.

capitalizeEach(sentence, capitalizeChar)
