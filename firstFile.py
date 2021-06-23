# sep means separator, default is " "
print("fun", "fun", sep="-")
# end will change how a string ends, default is end="\n"
print("fun", "fun", end="-\n")
# type(args) will tell you what kind of object an argument is
print(type(9), type("S"), type(3.5), type([1, 2]), type({}))
# placing a = in between 2 variables assigns both vars to the same object
# multiple assignments works also like in js
# input() is the same as gets in Ruby
# len() gives the length of a string or array(list)
# None is same as null

# position arguments, explicitly set values for parameters by using the = sign
# function anotations is having a semicolon after an arg and displaying its type


def fun(a: int, b: int, c: int) -> str:
    return("total is " + str(a + b * c))


print(fun(b=1, a=2, c=3))  # 5
print(fun(1, 2, 3))  # 7

name = "nim"
print(f"Hello there {name}")

print("string".startswith('st'))
print("string".endswith('ing'))
