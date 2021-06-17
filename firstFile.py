# sep means separator, default is " "
# end will change how a string ends, default is end="\n"
# type(args) will tell you what kind of object an argument is

# placing a = in between 2 variables assigns both vars to the same object
# multiple assignments works also like in js
# input() is the same as gets in Ruby


def fun():
    name = input("What's your name? ")
    return("Nice to meet you " + name)


print(fun())
