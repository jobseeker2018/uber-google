```
// https://leetcode.com/problems/the-maze/description/
// 490 the maze
// BFS, time: O(mn), space: O(1)?

import java.io.*;
import java.util.*; // for queue and linkedlist

class MyCode {
  public static boolean hasPath(int[][] maze, int[] start, int[] destination) {
      Queue<int[]> queue = new LinkedList<>();
      int[][] vectors = {{0,1}, {1,0}, {0,-1}, {-1,0}};
      int sx = start[0];
      int sy = start[1];
      int x = sx;
      int y = sy;
      queue.add( new int[] {sx,sy}); // watch the syntax of adding an array to queue.
      maze[sx][sy]=Integer.MAX_VALUE; // mark as visited
      while(!queue.isEmpty()) {
          int[] temp = queue.poll();          
          for (int i=0; i<4; i++) {
              x = temp[0]; //reset x, y for every vector
              y = temp[1];
              while(vectors[i][0]!=0 && x+vectors[i][0]<maze.length && x+vectors[i][0]>=0 && maze[x+vectors[i][0]][y]!=1) { 
                //keep going until hits a wall. keep going even if it is visited
                  x += vectors[i][0];
              }
              while(vectors[i][1]!=0 && y+vectors[i][1]<maze[0].length && y+vectors[i][1]>=0 && maze[x][y+vectors[i][1]]!=1) {
                  y += vectors[i][1];
              }
              if (x==destination[0] && y==destination[1]) return true; //reach destination
              if (maze[x][y]==0) {
                  maze[x][y]=Integer.MAX_VALUE; //mark as visited
                  queue.add(new int[] {x,y});
              }
          }
      }

      return false;
  }
  
  public static void main (String[] args) {
    System.out.println("Hello Java");
    int[][] maze1 = {{0,0,1,0,0},{0,0,0,0,0},{0,0,0,1,0},{1,1,0,1,1},{0,0,0,0,0}};
    int[] start1 = {0, 4};
    int[] destination1 = {4, 4};
    boolean result1 = hasPath(maze1, start1, destination1);
    System.out.println("The result is " + result1);
  }
}
```
