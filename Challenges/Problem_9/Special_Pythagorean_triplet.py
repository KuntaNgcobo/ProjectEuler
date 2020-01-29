# KuntaNgcobo
# Special Pythagorean triplet

a = lambda x, y : y*y - x*x
b = lambda x, y : 2*x*y
c = lambda x, y : y*y + x*x

def specialPythagoreanTriplet(n):
	for i in range(1, n+1):
	 	for j in range(1, i):
	 		diff = n - a(j,i) - b(j,i) - c(j,i)
	 		if(diff == 0):
	 			return a(j,i) * b(j,i) * c(j,i)
	return -1
