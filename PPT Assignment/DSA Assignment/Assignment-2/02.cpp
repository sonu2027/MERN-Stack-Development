// Question 2
// Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor. 

// The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice. 

// Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

// Example 1:
// Input: candyType = [1,1,2,2,3,3]
// Output: 3

// Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.
#include<iostream>
using namespace std;
int diffTypeOfCandy(int arr[], int noOfCandy){
    int count=1;
    for (int i = 0; i < noOfCandy-1; i++)
    {
        if(arr[i]!=arr[i+1])
        count++;
    } 
    // If the different type of candy alice have greater than the noOfCandy/2 
    if(count>(noOfCandy/2))
        return noOfCandy/2;

    // If the different type of candy alice have less than or equal to the noOfCandy/2 
    return count;
}
int main(){
    int arr[100], noOfCandy;
    cout<<"Enter the no of candy Alice have: ";
    cin>>noOfCandy;
    cout<<"Enter the all candy"<<endl;
    for (int i = 0; i < noOfCandy; i++)
    {
        cin>>arr[i];
    }
    cout<<"Alice can eat "<<diffTypeOfCandy(arr, noOfCandy)<<" types of candy";
    return 0;
}