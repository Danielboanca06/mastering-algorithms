roman_numerals = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000
}

def roman_to_int(s: str):
    s = list(s)
    total = 0

    i = 0
    while i < len(s):
       
        if i < len(s) - 1 and s[i] + s[i + 1] in roman_numerals:
            total += roman_numerals[s[i] + s[i + 1]]
            i += 2  
            continue
        
       
        total += roman_numerals[s[i]]
        i += 1
    
    return total
    

print(roman_to_int('LVIII'))
print(roman_to_int("MCMXCIV"))