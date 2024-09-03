def isValid(s):
    brackets = {
        "(": ")",
        "[": "]",
        "{": "}",
    }

    stack = []

    for char in len(s):
        print(char)


print(isValid('[]()()'))