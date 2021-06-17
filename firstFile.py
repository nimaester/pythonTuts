# sep means separator, default is " "
# end will change how a string ends, default is end="\n"
# type(args) will tell you what kind of object an argument is

# placing a = in between 2 variables assigns both vars to the same object
# multiple assignments works also like in js
# input() is the same as gets in Ruby

# None is same as null

# position arguments, explicitly set values for parameters by using the = sign
def fun(a, b, c):
    return("total is " + str(a + b * c))


print(fun(b=1, a=2, c=3))  # 5
print(fun(1, 2, 3))  # 7
