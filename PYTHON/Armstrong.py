def Armstrong(num):
    sum = 0
    while num > 0:
        digit = num % 10
        sum += digit ** 3
        num //= 10
    return sum

num=int(input("Enter a number: "))
sum=Armstrong(num)
temp=num
if temp == sum:
    print(f"{temp} is an Armstrong number")
else:
    print(f"{temp} is not an Armstrong number")