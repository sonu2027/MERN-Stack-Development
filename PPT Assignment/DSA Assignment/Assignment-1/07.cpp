#include <stdio.h>

void zero(int* a, int n) {
    int i, j = 0;

   
    for (i = 0; i < n; i++) {
        if (a[i] != 0) {
            a[j] = a[i];
            j++;
        }
    }

   
    while (j < n) {
        a[j] = 0;
        j++;
    }
}

int main() {
    int a[] = {4,5,0,2,6,3,0,7};
    int n = sizeof(a) / sizeof(a[0]);
   
    zero(a, n);

    printf(" The output is: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", a[i]);
    }
    printf("\n");

    return 0;
}
