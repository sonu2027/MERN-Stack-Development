#include<iostream>
#include<vector>
using namespace std;
int removeVal(int *arr, int val, int size){
    vector<int>v;
    int k=0;
    for (int i = 0; i < size; i++)
    {
        if (arr[i]!=val)
        {
           v.push_back(arr[i]);
           k++;
        }
    }
    for (int i = 0; i < v.size(); i++)
    {
        arr[i]=v[i];
    }
    return k;
}
int main(){
    int arr[100];
    int val;
    int size;
    cout<<"Enter the size of array"<<endl;
    cin>>size;
    cout<<"Enter the numbers of array"<<endl;
    for (int i = 0; i < size; i++)
    {
        cin>>arr[i];
    }
    cout<<"Enter your val"<<endl;
    cin>>val;
    int k=removeVal(arr, val, size);
    cout<<"The no of value in nums which are not equal to val is: "<<k<<endl;
    cout<<"The array after removing val is: ";
    for (int i = 0; i < k; i++)
    {
        cout<<arr[i]<<" ";
    }
    
    return 0;
}