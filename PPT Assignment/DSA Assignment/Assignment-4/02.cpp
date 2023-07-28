/*<aside>
💡 **Question 2**

Given two **0-indexed** integer arrays nums1 and nums2, return *a list* answer *of size* 2 *where:*

- answer[0] *is a list of all **distinct** integers in* nums1 *which are **not** present in* nums2*.*
- answer[1] *is a list of all **distinct** integers in* nums2 *which are **not** present in* nums1.

**Note** that the integers in the lists may be returned in **any** order.

**Example 1:**

**Input:** nums1 = [1,2,3], nums2 = [2,4,6]

**Output:** [[1,3],[4,6]]

**Explanation:**

For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].

For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

</aside>*/
#include<iostream>
#include<vector>
using namespace std;
vector<int> removeDuplicate(vector<int> nums){
        for(int i=0; i<nums.size(); i++){
            for(int j=i+1; j<nums.size(); j++){
                if(nums[i]==nums[j]){
                    nums.erase(nums.begin()+j);
                    j--;
                }
            }
        }
        return nums;
    }


vector<vector<int>> findDifference(vector<int>& nums1, vector<int>& nums2) {
        vector<vector<int>>v;
        vector<int>v1;
        int count;
        for(int i=0; i<nums1.size(); i++){
            count=0;
            for(int j=0; j<nums2.size(); j++){
                if(nums1[i]==nums2[j]){
                    break;
                }
                else{
                    count++;
                }
            }
            if(count==nums2.size()){
                v1.push_back(nums1[i]);
            }
        }
        v1=removeDuplicate(v1);
        v.push_back(v1);

        vector<int>v2;
        for(int i=0; i<nums2.size(); i++){
            count=0;
            for(int j=0; j<nums1.size(); j++){
                if(nums2[i]==nums1[j]){
                    break;
                }
                else{
                    count++;
                }
            }
            if(count==nums1.size()){
                v2.push_back(nums2[i]);
            }
        }
        v2=removeDuplicate(v2);
        v.push_back(v2);
        return v;
    }


int main(){
    vector<int>nums1;
    vector<int>nums2;
    int size1, size2, n;
    cout<<"Enter the size of nums1: ";
    cin>>size1;
    cout<<"Enter the elements of nums1: ";
    for (int  i = 0; i < size1; i++)
    {
        cin>>n;
        nums1.push_back(n);
    }
    cout<<"Enter the size of nums2: ";
    cin>>size2;
    cout<<"Enter the elements of nums1: ";
    for (int  i = 0; i < size2; i++)
    {
        cin>>n;
        nums2.push_back(n);
    }
    vector<vector<int>> v=findDifference(nums1, nums2);
    for (int i = 0; i < v.size(); i++)
    {
        for (int j = 0; j < v[i].size(); j++)
        {
            cout<<v[i][j]<<" ";
        }
        cout<<endl;
    }
    
    return 0;
}