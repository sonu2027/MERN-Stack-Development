/*Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.

**Example 1:**

**Input:** nums = [0,1]

**Output:** 2

**Explanation:**

[0, 1] is the longest contiguous subarray with an equal number of 0 and 1.*/



#include<iostream>
#include<vector>
#include<unordered_map>
using namespace std;

int findMaxLength(vector<int>& nums) {
        
        int countOne = 0;
        int maxLen = 0;
        unordered_map<int, int> diff{{0,-1}};
        
        for(int i=0; i<nums.size(); i++)
        {
            if(nums[i] == 1)
                countOne++;
            else
                countOne--;
            
            if(diff.find(countOne) != diff.end()) maxLen = max(maxLen, i - diff[countOne]);
            else diff[countOne] = i;
        }
        return maxLen;
    }

int main(){
    vector<int>nums;
    int size, n;
    cout<<"Enter the size of nums: ";
    cin>>size;
    cout<<"Enter the elements of nums:"<<endl;
    for (int i = 0; i < size; i++)
    {
        cin>>n;
        nums.push_back(n);
    }
    cout<<"Output: "<<findMaxLength(nums);
    return 0;
}
