def nestedAdd(array):
    sum = 0
    for i in range(0, len(array)):
      current = array[i]
      if type(array[i]) == type([]):
        sum += nestedAdd(current)
      else:
        sum += current
    return sum


print(nestedAdd([12, 3]))
