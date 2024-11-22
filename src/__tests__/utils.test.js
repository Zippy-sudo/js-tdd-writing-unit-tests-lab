import isPalindrome from "../utils"

describe("isPalindrome", () => {
    it("returns true if a string is a palindrome", () => {
        const aPalindrome = "racecar";

        const answer = isPalindrome(aPalindrome);

        expect(answer).toBe(true)
    })
    it("returns false if a string isn't a palindrome", () => {
        const notAPalindrome = "car";

        const answer = isPalindrome(notAPalindrome);

        expect(answer).toBe(false);
    })
    it("detects palindromes regardless of casing", () => {
        const mixedCasePalindrome = "RaceCar";

        const answer = isPalindrome(mixedCasePalindrome);

        expect(answer).toBe(true);
    })
    it("returns false for an empty string", () => {
        const emptyString = ""

        const answer = isPalindrome(emptyString);

        expect(answer).toBe(false)
    })
    it("throws an error if input has non-alphabetic characters", () => {
        expect(() => {
            isPalindrome("Rac3Car");
        }).toThrow(new Error("Non-alphabetic characters detected"));
    })
    it("throws an error if input isn't a string", () => {
        expect(() => {
            isPalindrome({});
        }).toThrow(new Error("Input isn't a string"));
    })
})
