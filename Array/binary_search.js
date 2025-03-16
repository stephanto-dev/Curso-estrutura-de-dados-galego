function binarySearch(nums, n){
    let left = 0;
    let right = nums.length;

    while(left <= right){
        let mid = Math.floor((left + right)/2);
        if(nums[mid] === n){
            return mid;
        }else if (nums[mid] < n){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 5));