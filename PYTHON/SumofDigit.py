def sumofdigit(num):
    sum=0
    while num>0:
        sum=sum+num%10
        num=num//10
    return sum

num=int(input("enter a number"))
sum=sumofdigit(num)
print(sum)