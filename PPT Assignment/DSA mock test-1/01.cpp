/*Move Zeroes
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Constraints:
a. 1 <= nums.length <= 10^4
b. -2^31 <= nums[i] <= 2^31 - 1

Note: Create a GitHub file for the solution and add the file link the the answer section below.

5 points*/
#include<iostream>
using namespace std;

void moveZeros(int arr[], int n){

    for (int i = 0; i < n-1; i++)
    {
        for (int j = 0; j < n-1; j++)
        {
            if(arr[j]==0)
            swap(arr[j], arr[j+1]);
        }
    }

}

int main(){

    int nums[100]; // Declaring an array nums
    int size; // Declaring the size of array nums

    cout<<"Enter the size of array nums: "; // Aksing to enter the size of array nums
    cin>>size; // Taking size as a input in size variable

    cout<<"Enter the all elements of an array nums: "; // Asking to enter the all elements of an array nums
    for (int i = 0; i < size; i++)
    {
        cin>>nums[i]; // Taking elements of an array as an input
    }
    
    moveZeros(nums, size); // Declaring a function to move zero

    cout<<"The elemets of array nums after moving zero towards right: ";
    for (int i = 0; i < size; i++)
    {
        cout<<nums[i]<<" ";
    }
    
    return 0;

}