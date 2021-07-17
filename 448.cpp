#include <vector>
#include <iostream>

using namespace std;

class Solution
{
public:
    vector<int> findDisappearedNumbers(vector<int> &nums)
    {
        vector<int> ans;
        for (int num : nums)
        {
            int pos = num - 1;
            if (nums[pos] > 0)
            {
                nums[pos] = -nums[pos];
            }
        }
        for (int i = 0; i < nums.size(); i++)
        {
            if (nums[i] > 0)
            {
                ans.push_back(i + 1);
            }
        }
        return ans;
    }
};

int main()
{
    Solution s;
    vector<int> nums(1,1);
    nums = s.findDisappearedNumbers(nums);
    for (int i = 0; i < nums.size(); i++)
        cout << nums[i]; 
    return 0;
}