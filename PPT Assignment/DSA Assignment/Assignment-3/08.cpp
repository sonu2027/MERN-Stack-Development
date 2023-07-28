/*<aside>
💡 **Question 8**
Given an array of meeting time intervals where intervals[i] = [starti, endi],
determine if a person could attend all meetings.

**Example 1:**
Input: intervals = [[0,30],[5,10],[15,20]]
Output: false

</aside>*/
#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
bool canAttendMeetings(vector<Interval>& intervals) {
        sort(intervals.begin(), intervals.end(), [](const Interval& i1, const Interval& i2) -> bool {
            return i1.start < i2.start;
        });
        
        for (size_t i = 1; i < intervals.size(); i++) {
            if (intervals[i - 1].end > intervals[i].start) {
                return false;
            }
        }
        
        return true;
    }
int main(){
    vector<int>nums;
    int size, n;
    cout<<"Enter the size of array: ";
    cin>>size;
    cout<<"Enter you elements: ";
    for (int i = 0; i < size; i++)
    {
        cin>>n;
        nums.push_back(n);
    }
    if(canAttendMeetings(nums)){
        cout<<"true";
    }
    else{
        cout<<"false";
    }
    return 0;
}