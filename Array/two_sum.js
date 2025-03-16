function twoSum(nums, target){
    let l = 0;
    let r = 0;

    while (r <= nums.length-1){
        r++;
        if(nums[l] + nums[r] == target){
            return [l,r];
        }
        if(r == nums.length-1){
            l++;
            r = l;
        }
    }

    return false
}

console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,2,3], 6));