/*First Unique Character in a String

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1

Constraints:
a. 1 <= s.length <= 10^5
b. s consists of only lowercase English letters.

Note: Create a GitHub file for the solution and add the file link the the answer section below.
5 points*/
#include<iostream>
using namespace std;
int findUniqueChar(string s){

    int count=0;

    for (int i = 0; i < s.size(); i++)
    {
        count=0;
        
        for (int j = 0; j < s.size(); j++)
        {
            if(s[i]==s[j])
            count++;
        }

        if(count==1)
        return i;

    }

    return -1;

}
int main(){

    string s; // Declaring a string s

    cout<<"Enter your string s: "; // Asking for the string
    cin>>s; // Taking string s as an input

    cout<<"The index of first non-repeating char in a string s is "<<findUniqueChar(s);

    return 0;

}