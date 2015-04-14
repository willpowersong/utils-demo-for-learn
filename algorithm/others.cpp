/*http://acm.zju.edu.cn/onlinejudge/showContestProblem.do?problemId=5229
?(>_o)! is a pseudo-object-oriented programming language. 

_ 	Print the program's source code.
! 	Print "Hello, world!".

Sample Input
4
Hello, world!
source_code
source__code
?(>_o)!
Sample Output
Yes
Yes
No
No
Hint
The output of the four sample programs are 
{"Hello, world!", "source_code", "source__codesource__code", "?(>_o)!Hello, world!"} respectively. 
Therefore the first two programs are quines, and the last two are not.
*/
#include <iostream>
#include <cstdio>
#include <cstring>
#include <algorithm>
using namespace std;
char code[330];
char ans[100010];
int main()
{
    int T;
    scanf("%d",&T);
    getchar();
    while(T--){
        gets(code);
        int len=strlen(code);
        ans[0]='\0';
        for (int i=0;i<len;i++){
            if (code[i]=='_') strcat(ans,code);
            else if (code[i]=='!') strcat(ans,"Hello, world!");
        }
        if (strcmp(ans,code)==0) puts("Yes");
        else puts("No");
    }
    return 0;
}