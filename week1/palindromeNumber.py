import math
def is_Palindrome(x: int):
    if x is not None and (x < 0 or (x % 10 == 0)):
        return False
    
    reversed = 0
    temp = x

    while(temp is not 0):
        digit = temp % 10
        reversed = reversed * 10 + digit
        temp = math.floor(temp / 10)
    
    return x == reversed

print(is_Palindrome(121))
print(is_Palindrome(-121))
print(is_Palindrome(10))