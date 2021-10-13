def bubbleSort(nums):
    swapped = True
    while swapped:
        swapped = False
        for i in range(0, len(nums)-1):
            if (nums[i] > nums[i+1]):
                swapped = True
                nums[i], nums[i+1] = nums[i+1], nums[i]
    return nums

nums = str(input()).split()
print(bubbleSort(nums))
