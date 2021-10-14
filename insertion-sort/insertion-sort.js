
function insertionSort(nums) {
    for (let num = 1; num < nums.length; num++) {
		console.log(nums[num-1], nums[num], nums[num-1] > nums[num])
        if (nums[num-1] > nums[num]) {
            [nums[num], nums[num-1]] = [nums[num-1], nums[num]];
	        for (let i = num-1; i > 0; i--) {
        	    if (nums[i-1] > nums[i]) {
                    [nums[i], nums[i-1]] = [nums[i-1], nums[i]];
                } else {break;}
        	}
        }
    }
    return nums;
}


function insertionSort2(nums) {
	for (let i = 1; i < nums.length; i++) {
		let numToInsert = nums[i];
		let j;
		for (j = i -1 ; nums[j] > numToInsert && j >= 0; j--) {
			if (nums[j] > nums[j+1]) {
				[nums[j], nums[j+1]] = [nums[j+1], nums[j]];
			} else {
				break;
			}
		}
	}
	return nums;
}

num = [10, 5 ,3, 8, 2, 6, 4, 7, 9, 1];
console.log(insertionSort(num));


num = [10, 5 ,3, 8, 2, 6, 4, 7, 9, 1];
console.log(insertionSort2(num));
