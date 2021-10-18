
def merge(a, b):
    c = []

    while len(a) > 0 and len(b) > 0:
        if a[0] > b[0]:
            c.append(b[0])
            b.pop(0)
        else:
            c.append(a[0])
            a.pop(0)
    
    while len(a) > 0:
        c.append(a[0])
        a.pop(0)

    while len(b) > 0:
        c.append(b[0])
        b.pop(0)

    return c

def mergeSort(array):
    if len(array) == 1:
        return array
    
    arrayOne, arrayTwo = [], []
    for i in range(0, round(len(array)/2)):
        arrayOne.append(array[i])
    for i in range(round(len(array)/2), len(array)):
        arrayTwo.append(array[i])
    
    return merge(arrayOne, arrayTwo)


print(mergeSort([2, 1, 3, 5]))