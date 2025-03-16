function twoSum(nums, target){
    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        console.log(map)

        if(map.has(diff)){
            return [map.get(diff), i];
        }

        map.set(nums[i], i);
    }

    return false
}

console.log(twoSum([2,7,11,15], 26));
