function getVowelCount(string) {
    var vowelscount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let char of string) {
        if(vowels.includes(char)){
            vowelscount++;
        }
    }
    return vowelscount;
}

console.log(getVowelCount('my country is Nigeria'));