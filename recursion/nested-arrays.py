index = 0
total = 0

def nestedAdd(array):
    global total
    for i in range(0, len(array)):
        if type(array[i]) != type(list()):
            total += array[i]
        else:
            return nestedAdd(array[i])
    return total

print(nestedAdd([[[[5]]]]))
