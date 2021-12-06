function firstSingleCharacter(string) {
    for (let i = 0; i < string.length; i++) {
        let nonDuplicate = string.charAt(i);
        if (string.indexOf(nonDuplicate) == i && string.indexOf(nonDuplicate, i + 1) == -1) {
            return console.log("input içindeki tekrar etmeyen karakter :", nonDuplicate);
        }
    }
    return console.log("_ , inputtaki tüm karakterler tekrar ediyor.");
}
let input = "aabbccdd"
console.log("input: ", input);
firstSingleCharacter(input);