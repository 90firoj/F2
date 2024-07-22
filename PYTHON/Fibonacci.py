def fibonacci(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)

def print_fibonacci_series(n):
    print("Fibonacci series:")
    for i in range(n):
        print(fibonacci(i), end=" ")

num=int(input("Enter the number of terms:"))
print_fibonacci_series(num)
