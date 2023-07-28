#include<iostream>
#include<vector>
using namespace std;
vector<int> indices(int *arr, int target, int size){
    vector<int>v;
    for (int i = 0; i < size; i++)
    {
        for (int j = i+1; j < size; j++)
        {
            if(arr[i]+arr[j]==target){
                v.push_back(i);
                v.push_back(j);
                break;
            }
        }
    }
    return v;
}
int main(){
    int arr[100];
    int target;
    int size;
    cout<<"Enter the size of array"<<endl;
    cin>>size;
    cout<<"Enter the numbers of array"<<endl;
    for (int i = 0; i < size; i++)
    {
        cin>>arr[i];
    }
    cout<<"Enter your target"<<endl;
    cin>>target;
    vector<int>v=indices(arr, target, size);
    for (int i = 0; i < v.size(); i++)
    {
        cout<<v[i]<<" ";
    }
    
    return 0;
}