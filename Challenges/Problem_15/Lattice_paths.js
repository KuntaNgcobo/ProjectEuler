// KuntaNgcobo
// Lattice_paths

const latticePaths = gridSize => {
  let grid = new Array(gridSize + 1);
  grid[0] = new Array(gridSize + 1).fill(1);

  for(var i = 0; i < gridSize; i++){
    grid[i+1] = new Array(gridSize + 1).fill(1, 0, 1);
    for(var j = 0; j < gridSize; j++){
      grid[i+1][j+1] = grid[i][j+1] + grid[i+1][j];
    }
  }

  //console.log(grid);
  return grid[gridSize][gridSize];
}

latticePaths(4);
