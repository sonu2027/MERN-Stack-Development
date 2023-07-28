/*Question 2
Given an array nums of n integers, return an array of all the unique quadruplets
[nums[a], nums[b], nums[c], nums[d]] such that:
           ● 0 <= a, b, c, d < n
           ● a, b, c, and d are distinct.
           ● nums[a] + nums[b] + nums[c] + nums[d] == target

You may return the answer in any order.

Example 1:
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]*/



#include<iostream>
#include<vector>
#include<map>
#include<set>
#include<string>
using namespace std;

// Stores the pair of indices
class Pair {
public:
int index1, index2;
Pair(int x, int y)
{
	index1 = x;
	index2 = y;
}
};

// Function to find the all the
// unique quadruplets with the
// elements at different indices
void GetQuadruplets(vector<int>& nums, int target)
{

// Stores the sum mapped to
// a List Of Pair<i, j>
map<int, vector<Pair> > map;

// Generate all possible pairs
// for the HashMap
for (int i = 0; i < nums.size() - 1; i++) {
	for (int j = i + 1; j < nums.size(); j++) {

	// Find the sum of pairs
	// of elements
	int sum = nums[i] + nums[j];

	// If the sum doesn't
	// exists then update
	// with the new pairs
	if (map.find(sum) == map.end()) {
		vector<Pair> temp;
		Pair p(i, j);
		temp.push_back(p);

		// Update the hashmap
		map[sum] = temp;
	}

	// Otherwise, push the new
	// pair of indices to the
	// current sum
	else {
		vector<Pair> temp = map[sum];

		Pair p(i, j);
		temp.push_back(p);

		// Update the hashmap
		map[sum] = temp;
	}
	}
}

// Stores all the Quadruplets
set<string> ans;

for (int i = 0; i < nums.size() - 1; i++) {
	for (int j = i + 1; j < nums.size(); j++) {
	int lookUp = target - (nums[i] + nums[j]);

	// If the sum with value (K - sum) exists
	if (map.find(lookUp) != map.end()) {

		// Get the pair of
		// indices of sum
		vector<Pair> temp = map[lookUp];

		for (Pair pair : temp) {

		// Check if i, j, k and l are distinct
		// or not
		if (pair.index1 != i && pair.index1 != j
			&& pair.index2 != i
			&& pair.index2 != j) {
			vector<int> l1
			= { nums[pair.index1],
				nums[pair.index2], nums[i],
				nums[j] };

			// Sort the list to avoid duplicacy
			//sort(l1.begin(), l1.end());
            for (int i = 0; i < l1.size()-1; i++)
            {
                for (int j = i+1; j < l1.size(); j++)
                {
                    if(l1[i]>l1[j]){
                        swap(l1[i], l1[j]);
                    }
                }
                
            }
            

			// Update the hashset
			ans.insert(to_string(l1[0]) + " "
					+ to_string(l1[1]) + " "
					+ to_string(l1[2]) + " "
					+ to_string(l1[3]));
		}
		}
	}
	}
}

// Print all the Quadruplets
for (string arr : ans) {
	cout << arr << endl;
}
}

// Driver Code
int main()
{
vector<int>v;
    int size, num, target;
    cout<<"Enter the size of array: ";
    cin>>size;
    cout<<"Enter you elements: ";
    for (int i = 0; i < size; i++)
    {
        cin>>num;
        v.push_back(num);
    }
    cout<<"Enter the target: ";   
    cin>>target;
    GetQuadruplets(v, target);
}

// This code is contributed by phasing17.
