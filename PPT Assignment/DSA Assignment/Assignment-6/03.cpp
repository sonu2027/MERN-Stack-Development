/*<aside>
💡 **Question 3**

Given an array of integers arr, return *true if and only if it is a valid mountain array*.

Recall that arr is a mountain array if and only if:

- arr.length >= 3
- There exists some i with 0 < i < arr.length - 1 such that:
    - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
    - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
    <aside>
💡 **Question 3**

Given an array of integers arr, return *true if and only if it is a valid mountain array*.

Recall that arr is a mountain array if and only if:

- arr.length >= 3
- There exists some i with 0 < i < arr.length - 1 such that:
    - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
    - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
**Example 1:**

**Input:** arr = [2,1]

**Output:**

false

</aside>
</aside>*/



#include<iostream>
#include<vector>
using namespace std;

bool validMountainArray(vector<int>& arr) {

        if(arr.size()==1){
            return false;
        }

        int count=0;

        if(arr[0]<arr[1]){
            int i;

            for(i=0; i<arr.size()-1; i++){
                if(arr[i]>arr[i+1]){
                    count++;
                    int j=i;
                    break;
                }
                if(arr[i]==arr[i+1])
                return false;
            }

            for(int j=i; j<arr.size()-1; j++){
                if(arr[j]<arr[j+1]){
                    count--;
                    break;
                }
                if(arr[j]==arr[j+1])
                return false;
            }

            if(count==1){
            return true;
            }
            else{
            return false;
            }
        }

        else{
            return false;
        }
        
    }

int main(){
    vector<int>arr;
    int size,n;
    cout<<"Enter the size of arr: ";
    cin>>size;
    cout<<"Enter the elements of arr:"<<endl;
    for (int i = 0; i < size; i++)
    {
        cin>>n;
        arr.push_back(n);
    }
    cout<<"Output: "<<validMountainArray(arr);
    return 0;
}