#include <stdio.h>
#include <stdlib.h>

int* add(int* a, int n, int* b) {
    int c = 1;
    int i;

   
    for (i = n- 1; i >= 0; i--) {
       
        a[i] += c;

       
        if (a[i] == 10) {
            a[i] = 0;
            c = 1;
        } else {
           
            c = 0;
        }
    }

   
    if (c) {
       
        int* result = (int*)malloc((n + 1) * sizeof(int));
        result[0] = c;

       
        for (i = 0; i < n; i++) {
            result[i + 1] = a[i];
        }

        *b = n + 1;
        return result;
    } else {
        *b = n;
        return a;
    }
}

int main() {
    int a[] = {9,9,9,9};
    int n = sizeof(a) / sizeof(a[0]);
    int b;

    int* result = add(a, n, &b);

    printf("Result: ");
    for (int i = 0; i < b; i++) {
        printf("%d ", result[i]);
    }
    printf("\n");

    free(result);

    return 0;
}
