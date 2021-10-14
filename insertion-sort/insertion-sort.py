
def insertionSort(nums):
    for num in range(1, len(nums)):
        if nums[num-1] > nums[num]:
            nums[num], nums[num-1] = nums[num-1], nums[num]
            for i in range(num-1, 0, -1):
                if nums[i-1] > nums[i]:
                    nums[i], nums[i-1] = nums[i-1], nums[i]
                else:
                    break
    return nums


print(insertionSort([4 ,4, 7, 7, 5, 5]))
