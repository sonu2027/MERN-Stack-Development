/*<aside>
💡 You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

Count and return *the number of maximum integers in the matrix after performing all the operations*

**Example 1:**
**Input:** m = 3, n = 3, ops = [[2,2],[3,3]]

**Output:** 4

**Explanation:** The maximum integer in M is 2, and there are four of it in M. So return 4.
</aside>*/


#include<iostream>
#include <vector>
#include <algorithm>
using namespace std;

int maxCount(int m, int n, vector<vector<int>>& ops) {
    // If ops is empty, the matrix remains all 0's, so the count is m * n
    if (ops.empty()) {
        return m * n;
    }

    // Find the minimum values of ai and bi in ops
    int min_ai = *min_element(ops.begin(), ops.end(), [](const auto& a, const auto& b) {
        return a[0] < b[0];
    })[0];

    int min_bi = *min_element(ops.begin(), ops.end(), [](const auto& a, const auto& b) {
        return a[1] < b[1];
    })[1];

    // The maximum value is the number of elements with indices (0 <= x < min_ai) and (0 <= y < min_bi)
    return min_ai * min_bi;
}

int main(){
    int m, n, num;
    vector<vector<int>>matrix;
    vector<int>v;
    cout<<"Enter row and column: ";
    cin>>m>>n;
    for (int i = 0; i < m; i++)
    {
        for (int i = 0; i < n; i++)
        {
            cin>>num;
            v.push_back(num);
        }
        matrix.push_back(v);
    }
    
    cout<<"Output: "<<maxCount(m, n, matrix);
    return 0;
}