// 模式匹配

#include <iostream>
#include <cstring>
#include <cstdlib>

using namespace std;

int Index(string S, string T, int SL, int TL);
int main()
{
	string str = "absabesabcase";
	string aim = "abc";
	int strLen = str.length();
	int aimLen = aim.length();
	int pos = Index(str, aim, strLen, aimLen);
	cout << pos << endl;
	system("PAUSE");
	return 0;
}
int Index(string S, string T,int SL, int TL)
{
	int i = 0;
	int j = 0;
	while (i < SL && j < TL)
	{
		if (S[i] == T[j])
		{
			i++;
			j++;
		}
		else
		{
			i = i-j+2;
			j = 1;
		}
	}
	if (j >= TL)
		return i - TL;
	else
		return 0;
}