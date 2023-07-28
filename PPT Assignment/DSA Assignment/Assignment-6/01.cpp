/*<aside>
💡 **Question 1**

A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

- s[i] == 'I' if perm[i] < perm[i + 1], and
- s[i] == 'D' if perm[i] > perm[i + 1].

Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.

**Example 1:**

**Input:** s = "IDID"

**Output:**

[0,4,1,3,2]

</aside>*/




#include <iostream>
#include <vector>
#include <string>
using namespace std;

 vector<int> diStringMatch(string s) {
        int n=s.size();
        vector<int>perm(n+1,0);
        int i=0,j=n,x=0;
        (s[0]=='I')?(perm[0]=i++):(perm[0]=j--);

        for(int k=1; k<n; k++){
            (s[k]=='I')?(perm[k]=i++):(perm[k]=j--);
        }
        (s[n-1]=='I')?(perm[n]=i++):(perm[n]=j--);
        return perm;
    }

int main()
{
    string s;
    cout<<"Enter you string: ";
    cin>>s;
	vector<int>v=diStringMatch(s);
    cout<<"Output:"<<endl;
    for (int i = 0; i < v.size(); i++)
    {
        cout<<v[i]<<" ";
    }
    
	return 0;
}

