/*There is a ball in a maze with empty spaces and walls. The ball can go through empty spaces by rolling up, down, left or right, but it won't stop rolling until hitting a wall. When the ball stops, it could choose the next direction.

Given the ball's start position, the destination and the maze, find the shortest distance for the ball to stop at the destination. The distance is defined by the number of empty spaces traveled by the ball from the start position (excluded) to the destination (included). If the ball cannot stop at the destination, return -1.

The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space. You may assume that the borders of the maze are all walls. The start and destination coordinates are represented by row and column indexes.
*/

//BFS

public int shortestDistance(int[][] maze, int[] start, int[] destination) {
      Queue<int[]> queue = new LinkedList<>();
      int[][] vectors = {{0,1}, {1,0}, {0,-1}, {-1,0}};
      int m = maze.length;
      int n = maze[0].length;
      int sx = start[0];
      int sy = start[1];
      int x = sx;
      int y = sy;
      int min = Integer.MAX_VALUE;
      boolean can_get_to_destination = false;
      queue.add( new int[] {sx,sy,0}); // watch the syntax of adding an array to queue.
    
      int[][] length=new int[m][n]; // record length
      for (int i=0;i<m*n;i++) length[i/n][i%n]=Integer.MAX_VALUE;
        
      while(!queue.isEmpty()) {
          int[] temp = queue.poll();  
          int count = temp[2];
          x = temp[0]; //
          y = temp[1];
          if (length[x][y]<=count) continue;
          length[x][y] = count;
          
          for (int i=0; i<4; i++) {
              x = temp[0]; //reset x, y, count for every vector
              y = temp[1];
              count = temp[2];

              while(vectors[i][0]!=0 && x+vectors[i][0]<m && x+vectors[i][0]>=0 && maze[x+vectors[i][0]][y]!=1) { 
                //keep going until hits a wall. keep going even if it is visited
                  x += vectors[i][0];
                  count++;
              }
              while(vectors[i][1]!=0 && y+vectors[i][1]<n && y+vectors[i][1]>=0 && maze[x][y+vectors[i][1]]!=1) {
                  y += vectors[i][1];
                  count++;
              }
              if (x==destination[0] && y==destination[1]) { //reach destination
                  can_get_to_destination = true;
                  min = Math.min(min, count);
              }
              
              queue.add(new int[] {x,y,count});
              
          }
      }
      if (can_get_to_destination) {
          return min;
      }
      else {
         return -1;
      }
    }
