/*Question 6
Given a non-empty array of integers nums, every element appears twice except
for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only
constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1*/
#include<iostream>
using namespace std;
int  distinct(int nums[], int size){
    int count;
    for (int i = 0; i < size; i++)
    {
        count=0;
        for (int j = 0; j < size; j++)
        {
            if(nums[i]==nums[j]){
                count++;
            }
        }
        if(count==1){
            return nums[i];
        }
    }
    
}
int main(){
    int nums[100], size;
    cout<<"Enter the size of array nums: ";
    cin>>size;
    cout<<"Enter the elements of array: ";
    for (int i = 0; i < size; i++)
    {
        cin>>nums[i];
    }
    cout<<"The distinct element is array nums is: "<<distinct(nums, size);
    return 0;
}