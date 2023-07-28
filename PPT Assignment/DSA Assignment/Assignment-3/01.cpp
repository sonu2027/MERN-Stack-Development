/*Question 1
Given an integer array nums of length n and an integer target, find three integers
in nums such that the sum is closest to the target.
Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2

Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).*/




#include<iostream>
#include<vector>
using namespace std;
int threeSumClosest(vector<int>& nums, int target) {
    for (int i = 0; i < nums.size()-1; i++)
    {
        for (int j = i+1; j < nums.size(); j++)
        {
            if(nums[i]>nums[j]){
                swap(nums[i], nums[j]);
            }
        }
        
    }
    
        int sum;
        if(nums.size()==3 || nums[0]>=target){
            sum=nums[0]+nums[1]+nums[2];
            return sum;
        }

        int size=nums.size();
        if(nums[size-1]<=target){
            sum=nums[size-1]+nums[size-2]+nums[size-3];
            return sum;
        }
         
        int mini=INT_MAX;
        for(int i=0; i<size; i++){
            if(nums[i]==target && i==1){
                sum=nums[0]+nums[1]+nums[2];
                if(sum<0){
                    sum=-sum;
                }
                mini=min(sum, mini);
                sum=nums[3]+nums[1]+nums[2];
                if(sum<0){
                    sum=-sum;
                }
                mini=min(sum, mini);
                return mini;
            }
            else if(nums[i]==target && i==size-2){
                sum=nums[size-1]+nums[size-2]+nums[size-3];
                if(sum<0){
                    sum=-sum;
                }
                mini=min(sum, mini);
                sum=nums[size-3]+nums[size-2]+nums[size-4];
                if(sum<0){
                    sum=-sum;
                }
                mini=min(sum, mini);
                return mini;
            }
            else if(nums[i]==target){
                sum=nums[i]+nums[i+1]+nums[i+2];
                if(sum<0){
                    sum=-sum;
                }
                mini=min(sum, mini);
                sum=nums[i]+nums[i+1]+nums[i-1];
                if(sum<0){
                    sum=-sum;
                }
                mini=min(sum, mini);
                sum=nums[i]+nums[i-1]+nums[i-2];
                if(sum<0){
                    sum=-sum;
                }
                mini=min(sum, mini);
                return mini;
            }
            else if(target>nums[i] && target<nums[i+1]){
                sum=nums[i]+nums[i-1]+nums[i-2];
                if(sum<0){
                    sum=-sum;
                }
                mini=min(sum, mini);
                sum=nums[i-1]+nums[i]+nums[i+1];
                if(sum<0){
                    sum=-sum;
                }
                mini=min(sum, mini);
                sum=nums[i]+nums[i+1]+nums[i+2];
                if(sum<0){
                    sum=-sum;
                }
                mini=min(sum, mini);
                sum=nums[i+3]+nums[i+1]+nums[i+2];
                if(sum<0){
                    sum=-sum;
                }
                mini=min(sum, mini);
                return mini;
            return target;
            }
        }
        return EXIT_SUCCESS;
    }
int main(){
   vector<int>v;
   int size, num;
   cout<<"Enter the size of array nums: ";
   cin>>size;
   cout<<"Enter the elements of an array nums: ";
   for (int i = 0; i < size; i++)
   {
    cin>>num;
    v.push_back(num);
   }
   int target;
   cout<<"Enter your target: ";
   cin>>target;
   cout << threeSumClosest(v, target);
    return 0;
}
    