function isPalindrome(letters) {

    var characters  = letters.split(''),
        firstLetter = characters.shift(),
        lastLetter  = characters.pop();

    if (firstLetter !== lastLetter) {
        return false;
    }

    if (characters.length < 2) {
        return true;
    }

    return isPalindrome(characters.join(''));

}
console.log(isPalindrome('php'));