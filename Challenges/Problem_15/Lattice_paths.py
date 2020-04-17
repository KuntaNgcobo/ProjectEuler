# KuntaNgcobo
# Lattice_paths

def latticePaths(gridSize):
  grid = [[1 for i in range(gridSize+1)] for i in range(gridSize+1)]
  for i in range(gridSize):
    for j in range(gridSize):
      grid[i+1][j+1] = grid[i][j+1] + grid[i+1][j]

  #print(grid)
  return grid[gridSize][gridSize]


print(latticePaths(4))
