// Question 4
// You have a long flowerbed in which some of the plots are planted, and some are not.
// However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
#include<iostream>
using namespace std;
bool ifSpaceEmpty(int arr[], int size, int n){
    int count=0;
    if(arr[0]==0 && arr[1]==0){
        arr[0]=1;
        count++;
    }
    for (int i = 1; i < size-1; i++)
    {
        if(arr[i-1]==0 && arr[i]==0 && arr[i+1]==0){
            arr[i]=1;
            count++;
        }
    }
    if(arr[size-1]==0 && arr[size-2]==0)
    count++;
    if (count>=n)
    return true;
    else
    return false;
}
int main(){
    int flowerBed[100], size, n;
    cout<<"Enter the number of plot are there in flowerbed: ";
    cin>>size;
    cout<<"Enter the number of flower which you want to plot: ";
    cin>>n;
    cout<<"Enter the "<<size<<" elements, enter 0 for empty and 1 for not empty: "<<endl;
    for (int i = 0; i < size; i++)
    {
        cin>>flowerBed[i];
    }
    if(ifSpaceEmpty(flowerBed, size, n))
    cout<<"true";
    else
    cout<<"false";
    return 0;
}