function reverseWords(s){
    let left = 0;
    let right = 0;
    let res = ""

    while(right <= s.length){
        if(right < s.length && s[right] != ' '){
            right++;
        }else{
            for(let i = right-1; i>=left; i--){
                res += s[i];
            }
            if(right < s.length){
                res += ' ';
            }
            right++;
            left = right;
        }
    }
    return res;
}

console.log(reverseWords("hello world"));