/*Question 4
Given a sorted array of distinct integers and a target value, return the index if the
target is found. If not, return the index where it would be if it were inserted in
order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2*/

#include<iostream>
#include<vector>
using namespace std;
int search(int nums[], int size, int target){
   if(target<nums[0]){
            return 0;
        }
        if(target>nums[size-1]){
            return size;
        }
         int s=0, e=size-1, m=s+(e-s)/2;
    while(s<=e){
        if(nums[m]==target){
            return m;
        }
        else if(nums[m]>target){
            e=m-1;
            m=s+(e-s)/2;
        }
        else{
            s=m+1;
            m=s+(e-s)/2;
        }
    }
    for(int i=0; i<size; i++){
        if(nums[i]>target){
            return i;
        }
    }
    return EXIT_SUCCESS;
}
int main(){
    int nums[100], size, target;
    cout<<"Enetr the size of array nums: ";
    cin>>size;
    cout<<"Enetr the elements of array nums: ";
    for (int i = 0; i < size; i++)
    {
        cin>>nums[i];
    }
    cout<<"Enetr you target to search: ";
    cin>>target;
    cout<<"The index of target "<<target<<" is: "<<search(nums, size, target);
    return 0;
}