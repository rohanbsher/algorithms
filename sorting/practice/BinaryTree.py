from dataclasses import dataclass


class Node:
	def __init__(self, data=None):
		self.left = None
		self.right = None
		self.data = data
	def print(self):
		print(self.data)
	
root = Node()
root.print()