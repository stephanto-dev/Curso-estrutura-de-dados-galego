function containsDuplicate(nums, k){
    const seen = {};

    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        if (seen.hasOwnProperty(val) && i - seen[val] <= k) {
            console.log(seen);
            return true;
        }
        seen[val] = i;
    }

    return false;
}

return console.log(containsDuplicate([1,2,3,1], 3));