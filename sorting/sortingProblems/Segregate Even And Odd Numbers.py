def segregate_evens_and_odds(numbers):
		k = 0
		for i in range(len(numbers)):
			if numbers[i] % 2 == 0:
				tmp = numbers[i]
				numbers[i] = numbers[k]
				numbers[k] = tmp
				k += 1 
		print(numbers)

num = [1,2,3,4,5,8,9,11,2]
segregate_evens_and_odds(num)