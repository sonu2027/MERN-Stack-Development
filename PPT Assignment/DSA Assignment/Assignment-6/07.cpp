/*<aside>
💡 **Question 7**

Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

**Example 1:**
**Input:** n = 3

**Output:** [[1,2,3],[8,9,4],[7,6,5]]
</aside>*/
#include<iostream>
#include<vector>
using namespace std;
vector<vector<int>> generateMatrix(int n) {
        int num=1,left=0,right=n-1,top=0,bottom=n-1;
        vector<vector<int>>matrix(n,vector<int>(n));

        while(left<=right && top<=bottom){
            for(int i=left; i<=right; i++){
                matrix[top][i]=num++;
            }
            top++;

            for(int i=top;i<=bottom;i++){
                matrix[i][right]=num++;
            }
            right--;

            for(int i=right;i>=left;i--){
                matrix[bottom][i]=num++;
            }
            bottom--;

            for(int i=bottom;i>=top;i--){
                matrix[i][left]=num++;
            }
            left++;
        }

        return matrix;
    }

int main(){
    int n;
    cout<<"Enter n: ";
    cin>>n;
    vector<vector<int>>v=generateMatrix(n);
    cout<<"Output:"<<endl;
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