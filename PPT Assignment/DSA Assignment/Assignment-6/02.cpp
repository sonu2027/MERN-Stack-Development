/*<aside>
💡 **Question 2**

You are given an m x n integer matrix matrix with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true *if* target *is in* matrix *or* false *otherwise*.

You must write a solution in O(log(m * n)) time complexity.

**Example 1:**
**Input:** matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3

**Output:** true
</aside>*/



#include<iostream>
#include<vector>
using namespace std;

bool searchMatrix(vector<vector<int>>& matrix, int target) {
        for(int i=0; i<matrix.size(); i++){
            for(int j=0; j<matrix[i].size(); j++){
                if(matrix[i][j]==target){
                    return true;
                }
            }
        }
        return false;
    }

int main(){
    vector<vector<int>>matrix;
    int m, n, num, target;
    cout<<"Enter the number of row of matrix: ";
    cin>>m;
    cout<<"Enter the number of column of matrix: ";
    cin>>n;
    vector<int>v;
    cout<<"Enter the elements of matrix with row: "<<m<<" and column: "<<n<<endl;
    for (int i = 0; i < m; i++)
    {
        for (int i = 0; i < n; i++)
        {
            cin>>num;
            v.push_back(num);
        }
        matrix.push_back(v);
    }
    cout<<"Enter you target: ";
    cin>>target;
    cout<<"Output: "<<searchMatrix(matrix, target);
    return 0;
}