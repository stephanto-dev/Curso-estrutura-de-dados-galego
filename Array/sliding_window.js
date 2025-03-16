
function slidingWindow(s){
    let l = 0;
    let r = 0;
    let max = 0;
    let counter = {};

    while(r < s.length){
        // Add current character to counter
        if(counter[s[r]]){
            counter[s[r]]++;
        }else{
            counter[s[r]] = 1;
        }

        // Shrink window while we have a character with frequency 3 or more
        while(counter[s[r]] >= 3){
            counter[s[l]]--;
            l++;
        }
        
        // Calculate max length after each valid window
        max = Math.max(max, r - l + 1);
        
        // Move right pointer
        r++;
    }
    
    return max;
}

console.log(slidingWindow("bcbbbcba"))