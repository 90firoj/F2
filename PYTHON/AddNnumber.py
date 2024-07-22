def sum_of_n(n):
    return n * (n + 1) // 2
n = int(input("Enter the value of n: "))
result = sum_of_n(n)
print(f"The sum of numbers from 1 to {n} is: {result}")
