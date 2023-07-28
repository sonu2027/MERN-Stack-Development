/*<aside>
💡 **Question 8**

An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.

Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.

**Example 1:**

**Input:** changed = [1,3,4,2,6,8]

**Output:** [1,3,4]

**Explanation:** One possible original array could be [1,3,4]:

- Twice the value of 1 is 1 * 2 = 2.
- Twice the value of 3 is 3 * 2 = 6.
- Twice the value of 4 is 4 * 2 = 8.

Other original arrays could be [4,3,1] or [3,1,4].

</aside>*/
#include<iostream>
#include<vector>
#include<unordered_map>
#include<map>
#include<algorithm>
using namespace std;

vector<int> findOriginalArray(vector<int>& changed) {
        unordered_map<int, int> doubled;
        vector<int> res;
        sort(changed.rbegin(), changed.rend());
        for (int c : changed) {
            if (doubled[c * 2] > 0) {
                res.push_back(c);
                doubled[c * 2]--;
            } else {                
                doubled[c] ++;
            }
        }
        int sz = changed.size();
        if (sz % 2 == 1) {
            sz++;
        }
        return res.size() == (sz / 2) ? res : vector<int>();
    }

int main(){
    vector<int>v;
    int size,n;
    cout<<"Enter the size of vector: ";
    cin>>size;
    cout<<"Enter the lements of vector: ";
    for (int i = 0; i < size; i++)
    {
        cin>>n;
        v.push_back(n);
    }
    v=findOriginalArray(v);
    //cout<<"cvhal raha h"<<endl;
    for (int i = 0; i < v.size(); i++)
    {
        cout<<v[i]<<" ";
    }
    
    return 0;
}