// ques 1
let arr = [20,53,54,75,10,29,86,69];
let num = 80;

// elements larger than a num 
function largerElement(arr, num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > num){
            console.log(arr[i]);
        }
    }
}
largerElement(arr, num);

// ques 2
let str = "slfishdoifhasdoifdjasopfos";
// function to get unique elements
function uniqueStr(str){
    let ans = "";
    // loop through each character in the string and check it against all previous characters
    for(let i = 0; i < str.length; i++){
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1){
            ans += currChar;
        }
    }
    return ans;
}

console.log("Unique String: ",uniqueStr(str));

// ques 3
let country = ["Australia", "United Kingdom", "Germany", "United States of America", "India"];
// to find longest name of country
function longestName(country){
    let maxLen = 0;
    for(let i = 0; i < country.length; i++){
        let ansLen = country[maxLen].length;
        let currLen = country[i].length;

        if(currLen > ansLen){
            maxLen = i;
        }
    }
    return country[maxLen];
}

console.log("Longest country name in array is ", longestName(country));

// ques 4
// count vowels
let word = "Classmates"
function countVowel(str){
    let count = 0;
    for(let i = 0; i < word.length; i++){
        if(
            word.charAt(i) == 'a'||
            word.charAt(i) == 'e'||
            word.charAt(i) == 'i'||
            word.charAt(i) == 'o'||
            word.charAt(i) == 'u'
        ){
            count++;
        }
    }
    return count;
}

console.log(`Number of vowels in ${word} are ${countVowel(str)}`);

// ques 5
let start = 100;
let end = 500;

function randonNumberGenerate(start, end){
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}

console.log(`Random number between ${start} and ${end} is ${randonNumberGenerate(150, 500)}`);