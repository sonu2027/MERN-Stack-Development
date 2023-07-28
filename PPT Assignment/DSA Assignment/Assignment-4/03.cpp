/*<aside>
💡 **Question 3**
Given a 2D integer array matrix, return *the **transpose** of* matrix.

The **transpose** of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

**Example 1:**

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]

Output: [[1,4,7],[2,5,8],[3,6,9]]

</aside>*/
#include<iostream>
#include<vector>
using namespace std;

vector<vector<int>> transpose(vector<vector<int>>& matrix) {
        vector<vector<int>>v;
        vector<int>v1;
        for(int i=0; i<matrix.size(); i++){
            for(int j=0; j<matrix[i].size(); j++){
                v1.push_back(matrix[j][i]);
            }
            v.push_back(v1);
            v1.clear();
        }
        return v;
    }

int main(){
    vector<int>v1;
    vector<vector<int>>v;
    int size, n;
    cout<<"Enter the size of v1: ";
    cin>>size;
    cout<<"Enter the elements of v"<<endl;;
    for (int  i = 0; i < size; i++)
    {
        cout<<"Enter row"<<i+1<<":";
        for (int  j = 0; j < size; j++)
    {
        cin>>n;
        v1.push_back(n);
    }
    v.push_back(v1);
    v1.clear();
    }
    v=transpose(v);
    for (int i = 0; i < v.size(); i++)
    {
        for (int j = 0; j < v[i].size(); j++)
        {
            cout<<v[i][j]<<" ";
        }
        cout<<endl;
    }
    
    return 0;
}