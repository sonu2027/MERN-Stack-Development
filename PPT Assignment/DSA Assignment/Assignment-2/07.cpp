/*Question 7
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

Example 1:
Input: nums = [1,2,2,3]
Output: true*/
#include <iostream>
using namespace std;

bool decreasingMonotonicOrNot(int nums[], int size)
{

    int count = 1;

    for (int i = 0; i < size - 1; i++)
    {
        if (nums[i] >= nums[i + 1])
            count++;
    }

    if (count == size)
        return true;
    else
        return false;
}

bool increasingMonotonicOrNot(int nums[], int size)
{

    if (nums[0] > nums[1])
    {
        if (decreasingMonotonicOrNot(nums, size))
            return true;
        else
            return false;
    }

    int count = 1;

    for (int i = 0; i < size - 1; i++)
    {
        if (nums[i] <= nums[i + 1])
            count++;
    }

    if (count == size)
        return true;
    else
        return false;
}
int main()
{

    int nums[100], size;

    cout << "Enter the size of array nums: ";
    cin >> size;
    cout << "Enter the elements fo an array nums: ";
    for (int i = 0; i < size; i++)
    {
        cin >> nums[i];
    }

    if (increasingMonotonicOrNot(nums, size))
        cout << "true";
    else
        cout << "false";

    return 0;
}