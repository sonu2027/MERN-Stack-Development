/*Question 7
You are given an inclusive range [lower, upper] and a sorted unique integer array
nums, where all elements are within the inclusive range.

A number x is considered missing if x is in the range [lower, upper] and x is not in
nums.

Return the shortest sorted list of ranges that exactly covers all the missing
numbers. That is, no element of nums is included in any of the ranges, and each
missing number is covered by one of the ranges.

Example 1:
Input: nums = [0,1,3,50,75], lower = 0, upper = 99
Output: [[2,2],[4,49],[51,74],[76,99]]

Explanation: The ranges are:
[2,2]
[4,49]
[51,74]
[76,99]*/
#include<iostream>
#include<vector>
#include<string>
using namespace std;
vector<string> findMissingRanges(vector<int>& nums, int lower, int upper) {
        auto f = [](int a, int b) {
            return a == b ? to_string(a) : to_string(a) + "->" + to_string(b);
        };
        int n = nums.size();
        vector<string> ans;
        if (n == 0) {
            ans.emplace_back(f(lower, upper));
            return ans;
        }
        if (nums[0] > lower) {
            ans.emplace_back(f(lower, nums[0] - 1));
        }
        for (int i = 1; i < n; ++i) {
            int a = nums[i - 1], b = nums[i];
            if (b - a > 1) {
                ans.emplace_back(f(a + 1, b - 1));
            }
        }
        if (nums[n - 1] < upper) {
            ans.emplace_back(f(nums[n - 1] + 1, upper));
        }
        return ans;
    }
int main(){
    vector<int>nums;
    int size, num, lower, upper;
    cout<<"Enter the size of array: ";
    cin>>size;
    cout<<"Enter you elements: ";
    for (int i = 0; i < size; i++)
    {
        cin>>num;
        nums.push_back(num);
    }
    cout<<"Enter lower and upper range: ";
    cin>>lower>>upper;
    vector<string>s=findMissingRanges(nums, lower, upper);
    cout<<"Output: ";
    for (int i = 0; i < size; i++)
    {
        cout<<s[i]<<" ";
    }
    return 0;
}