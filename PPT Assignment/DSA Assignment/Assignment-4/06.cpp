/*<aside>
💡 **Question 6**
Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

**Example 1:**

Input: nums = [-4,-1,0,3,10]

Output: [0,1,9,16,100]

**Explanation:** After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100]

</aside>*/
#include<iostream>
#include<vector>
using namespace std;
vector<int> sortedSquares(vector<int>& nums) {
        for(int i=0; i<nums.size(); i++){
            nums[i]=nums[i]*nums[i];
        }
        for (int i = 0; i < nums.size()-1; i++)
        {
            for (int j = i+1; j < nums.size(); j++)
            {
                if(nums[i]>nums[j]){
                    swap(nums[i], nums[j]);
                }
            }
            
        }
        
        //sort(nums.begin(), nums.end());
        return nums;
    }
int main(){
    vector<int>v;
    int size, n;
    cout<<"Enter the size of array nums: ";
    cin>>size;
    cout<<"Enter the elements of array nums: ";
    for (int i = 0; i < size; i++)
    {
        cin>>n;
        v.push_back(n);
    }
    v=sortedSquares(v);
    cout<<"The final ans after squaring and then sorting is: ";
    for (int i = 0; i < size; i++)
    {
        cout<<v[i]<<" ";
    }
    return 0;
}