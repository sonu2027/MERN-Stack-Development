/*A peak element is an element that is strictly greater than its neighbors.
Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
You must write an algorithm that runs in O(log n) time.
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
*/


#include <iostream>
#include <vector>
using namespace std;

int peakIndex(vector<int>v, int size)
{
    for (int i = 1; i < size-1; i++)
    {
        if(v[i]>v[i-1] && v[i]>v[i+1]){
            return i;
        }
    }
    return -1;
}

int main()
{
    vector<int>v;
    int size, num;
    cout << "Enter the size of array: ";
    cin >> size;
    cout << "Enter the " << size << " elements of array" << endl;
    for (int i = 0; i < size; i++)
    {
        cin>>num;
        v.push_back(num);
    }
    cout<<"Output: "<<peakIndex(v, size);
    return 0;
}