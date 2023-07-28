/*You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

**Example 1:**   **Input:** coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

**Output:** true */


#include <iostream>
#include <vector>
using namespace std;

bool checkStraightLine(vector<vector<int>>& coordinates) {
    int n = coordinates.size();
    if (n <= 2) {
        return true; 
    }

    int x0 = coordinates[0][0];
    int y0 = coordinates[0][1];
    int x1 = coordinates[1][0];
    int y1 = coordinates[1][1];
    int deltaX = x1 - x0;
    int deltaY = y1 - y0;

    for (int i = 2; i < n; i++) {
        int xi = coordinates[i][0];
        int yi = coordinates[i][1];
        if (deltaX * (yi - y1) != deltaY * (xi - x1)) {
            return false; 
        }
    }

    return true;
}

int main() {
    vector<vector<int>> coordinates = {{1,2},{2,3},{3,4},{4,5},{5,6},{6,7}};
    
    if (checkStraightLine(coordinates)) {
        cout << "true" << endl;
    } else {
        cout << "false" << endl;
    }

    return 0;
}
