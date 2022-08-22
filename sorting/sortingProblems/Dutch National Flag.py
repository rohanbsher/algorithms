

def dutch_national_flag(balls):
	for i in range(len(balls)):
		if balls[i] == "G":
			pass
	return balls


balls = {"balls": ["G", "B", "G", "G", "R", "B", "R", "G"]}

green = 0
blue = 0 
red = 0
sortList = balls.get("balls")
for i in range(len(sortList)):
	if sortList[i] == "G":
		green = i
	elif sortList[i] == "R":
		red += 1
	elif sortList[i] == "B":
		blue += 1

print(sortList)