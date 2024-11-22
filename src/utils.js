function isPalindrome(param) {

    if (typeof(param) === "string" && param !== "") {

        const reversedWord = param.split("").toReversed().join("");
        
        if (/^[A-Za-z]+$/.test(param) !== true) {
            throw new Error("Non-alphabetic characters detected");
        } else {
            if (/^[A-Za-z]+$/.test(param) !== false && reversedWord.toLowerCase() === param.toLowerCase()) {
                return true;
            } else return false;
        }
    } else if (typeof(param) === "string" && param === "") {
        return false;
    } else throw new Error("Input isn't a string")

}

export default isPalindrome;