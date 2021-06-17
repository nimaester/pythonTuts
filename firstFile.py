code = "hello world"
print(code.capitalize())
print(code.split())
print("abc", "def", "ghi")
# sep means separator, default is " "'
# end will change how a string ends, default is end="\n"
print("abc", "def", "ghi", sep="")
print(len(code))
print(True == True)
print(True != False)
print("Music" == "music")
print(7.0 != 7)
# type(args) will tell you what kind of object an argument is
print(type(code), type(3), type([]), type({"yo": 1}), type(555.55))
print(type(str(5)))
print(float(5))
# placing a = in between 2 variables assigns both vars to the same object
a = b = 5
# multiple assignments works also like in js
c, d, e = 6, 7, 8
print(a, b, sep="-")
print(c, d, e)
# input() is the same as gets in Ruby
name = input("Whats your name? \n")
print(f"Your name is {name!r}")
