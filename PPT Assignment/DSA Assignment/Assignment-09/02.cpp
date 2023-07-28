/*Given an array of integer nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If the target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
*/


#include <iostream>
#include <vector>
using namespace std;

vector<int> returnIndex(vector<int>v, int size, int target)
{
    vector<int>result;
    for (int i = 0; i < size-1; i++)
    {
        if(v[i]==target && v[i+1]==target){
            result.push_back(i);
            result.push_back(i+1);
            return result;
        }
    }
    result.push_back(-1);
    result.push_back(-1);
    return result;
}

int main()
{
    vector<int>v;
    int target, size, num;
    cout << "Enter the size of array: ";
    cin >> size;
    cout << "Enter the " << size << " elements of array" << endl;
    for (int i = 0; i < size; i++)
    {
        cin>>num;
        v.push_back(num);
    }
    cout << "Enter your target" << endl;
    cin >> target;
    vector<int>ans=returnIndex(v, size, target);
    cout<<ans[0]<<" "<<ans[1];
    
    return 0;
}