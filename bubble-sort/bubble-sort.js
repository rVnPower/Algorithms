function bubbleSort(nums) {
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > nums[i+1]) {
                swapped = true;
                [nums[i], nums[i+1]] = [nums[i+1], nums[i]]
            }
        }
    }
    return nums;
}
nums = [100, 123, 123545, 15 , 124, 7]
num = bubbleSort(nums)
console.log(num)
  // unit tests
  // do not modify the below code
//   test("bubble sort", function () {
//     const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
//     const sortedNums = bubbleSort(nums);
//     expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//   });
  