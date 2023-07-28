/*
Question 5
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

Example 1:
Input: nums = [1,2,3]
Output: 6
*/
#include<iostream>
#include<math.h>
using namespace std;
int maxProd(int nums[], int size){
    int maxi, prod=1;
    for (int i = 0; i <= size; i++)
    {
        maxi=INT_MIN;
        for (int j = 0; j < size; j++)
        {
            maxi=max(nums[j], maxi);
        }
        for (int k = 0; k < size; k++)
        {
            if(maxi==nums[k]){
                swap(nums[k], nums[size-1]);
                size--;
            }
        }
        cout<<maxi<<" and "<<size<<endl;
        prod*=maxi;
    }
    return prod;
}
int main(){
    int nums[100], size;
    cout<<"Enter the size of nums: ";
    cin>>size;
    cout<<"Enter the elemnets of array nums: ";
    for (int i = 0; i < size; i++)
    {
        cin>>nums[i];
    }
    int prod=maxProd(nums, size);
    cout<<"The maximum product of the three number in nums is: "<<prod;
    return 0;
}