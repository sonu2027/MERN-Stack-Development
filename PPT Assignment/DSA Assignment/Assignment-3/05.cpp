/*<aside>
💡 **Question 5**
You are given a large integer represented as an integer array digits, where each
digits[i] is the ith digit of the integer. The digits are ordered from most significant
to least significant in left-to-right order. The large integer does not contain any
leading 0's.

Increment the large integer by one and return the resulting array of digits.

**Example 1:**
Input: digits = [1,2,3]
Output: [1,2,4]

**Explanation:** The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

</aside>*/
#include<iostream>
#include<vector>
using namespace std;
vector<int> plusOne(vector<int>& digits) {
        int num=digits[0];
        for(int i=0; i<digits.size()-1; i++){
            if( (num >= INT_MAX/10) || (num <= INT_MIN/10) ){
                break;
            }
            num=digits[i]*10+digits[i+1];
            digits[i+1]=num;
        }
        num=num+1;
        int r;
        vector<int>v;
        while(num>0){
            r=num%10;
            v.push_back(r);
            num=num/10;
        }
        int size=v.size()-1;
        for(int i=0; i<v.size()/2; i++){
            swap(v[i], v[size--]);
        }
        return v;
    }
int main(){
    vector<int>v;
    int size, num;
    cout<<"Enter the size of array: ";
    cin>>size;
    cout<<"Enter you elements: ";
    for (int i = 0; i < size; i++)
    {
        cin>>num;
        v.push_back(num);
    }
    vector<int>v2=plusOne(v);
    cout<<"Output: ";
    for (int i = 0; i < size; i++)
    {
        cout<<v2[i]<<" ";
    }
    return 0;
}