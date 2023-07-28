/*<aside>
💡 **Question 1**

Convert 1D Array Into 2D Array

You are given a **0-indexed** 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked with creating a 2-dimensional (2D) array with  m rows and n columns using **all** the elements from original.

The elements from indices 0 to n - 1 (**inclusive**) of original should form the first row of the constructed 2D array, the elements from indices n to 2 * n - 1 (**inclusive**) should form the second row of the constructed 2D array, and so on.

Return *an* m x n *2D array constructed according to the above procedure, or an empty 2D array if it is impossible*.

**Example 1:**
**Input:** original = [1,2,3,4], m = 2, n = 2

**Output:** [[1,2],[3,4]]

**Explanation:** The constructed 2D array should contain 2 rows and 2 columns.

The first group of n=2 elements in original, [1,2], becomes the first row in the constructed 2D array.

The second group of n=2 elements in original, [3,4], becomes the second row in the constructed 2D array.

</aside>*/

#include<iostream>
#include<vector>
using namespace std;

vector<vector<int>> construct2DArray(vector<int>& original, int m, int n) {
        vector<vector<int>>v;
        if(m*n < original.size() || m*n > original.size()){
            return v;
        }
        vector<int>v1;
        int count=0;
        for(int i=0; i<original.size(); i++){
            v1.push_back(original[i]);
            count++;
            if(count==n){
                v.push_back(v1);
                v1.clear();
                count=0;
            }
        }
        return v;
    }
int main(){
    vector<int>original;
    int size, num, m, n;
    cout<<"Enter the sizer of vector: ";
    cin>>size;
    cout<<"Enter the elemnnts of vector orginal: ";
    for (size_t i = 0; i < size; i++)
    {
        cin>>num;
        original.push_back(num);
    }
    cout<<"Enter the row of vector original: ";
    cin>>m;
    cout<<"Enter the column of vector original: ";
    cin>>n;
    vector<vector<int>>v=construct2DArray(original, m, n);
    cout<<"The elements of 1D vector original after converting it to 2D:"<<endl;
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