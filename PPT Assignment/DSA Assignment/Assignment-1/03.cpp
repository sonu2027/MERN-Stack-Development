#include <stdio.h>

int find(int *a, int n, int target)
{
    int l = 0;
    int r = n - 1;

    while (l <= r)
    {
        int mid = l + (r - l) / 2;

        if (a[mid] == target)
        {
            return mid;
        }
        else if (a[mid] < target)
        {
            l = mid + 1;
        }
        else
        {
            r = mid - 1;
        }
    }

    return l;
}

int main()
{
    int a[] = {1, 3, 5, 4};
    int target = 5;
    int n = sizeof(a) / sizeof(a[0]);

    int result = find(a, n, target);

    printf("Output: %d\n", result);

    return 0;
}