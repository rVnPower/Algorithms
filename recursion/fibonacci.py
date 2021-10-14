
def fibonacci(value):
    if value == 2 or value == 1:
        return 1
    elif value <= 0:
        return 0
    
    return fibonacci(value-2) + fibonacci(value-1)

print(fibonacci(150))