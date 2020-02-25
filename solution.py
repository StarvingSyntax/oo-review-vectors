import math

class Vec:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def plus(self, vector):
        return Vec(self.x + vector.x, self.y + vector.y)
    
    def minus(self, vector):
        return Vec(self.x - vector.x, self.y - vector.y)
    
    @length.setter
    def length(self):
        return math.sqrt(self.x ** 2 + self.y ** 2)

    @staticmethod
    def x():
        pass