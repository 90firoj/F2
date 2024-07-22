def palindrome(num):
    temp=num
    sum=0
    while num>0:
        rem=num%10
        sum=sum*10+rem
        num=num//10
        return sum
    if sum==temp:
        print("palindrome")
    else:
        print("not palindrome") 
num=int(input("Enter a number:"))
palindrome(num)

   
