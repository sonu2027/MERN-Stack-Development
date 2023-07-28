/*<aside>
💡 **Question 6**

Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears **once** or **twice**, return *an array of all the integers that appears **twice***.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

**Example 1:**

**Input:** nums = [4,3,2,7,8,2,3,1]

**Output:**

[2,3]

</aside>*/
#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

vector<int> findDuplicates(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int count=1;
        vector<int>v;
        for(int i=0; i<nums.size()-1; i++){
            if(nums[i]==nums[i+1]){
                v.push_back(nums[i]);
                i++;
            }
        }
        return v;
    }

int main(){
    vector<int>nums;
    int size, n;
    cout<<"Enter the size of vector nums: ";
    cin>>size;
    cout<<"Enter the elements of vector nums: ";
    for (int i = 0; i < size; i++)
    {
        cin>>n;
        nums.push_back(n);
    }
    nums=findDuplicates(nums);
    if(nums.size()==0){
        cout<<"There is no duplicate elements in an array";
    }
    else{
        cout<<"The duplicate elements in a vector nums is: ";
    }
    for (int i = 0; i < nums.size(); i++)
    {
        cout<<nums[i]<<" ";
    }
    return 0;
}