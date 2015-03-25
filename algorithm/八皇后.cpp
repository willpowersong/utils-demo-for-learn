// 八皇后问题,在8x8的格子里保证皇后之间相互不攻击

#include<iostream>
using namespace std;
static int gEightQueen[8] = { 0 }, counter = 0;

//输出每一种情况下棋盘中皇后的摆放情况
void print()
{
    for (int outer = 0; outer < 8; outer++)
    {
        for (int inner = 0; inner < gEightQueen[outer]; inner++)
            cout << " ";
        for (int inner = gEightQueen[outer] + 1; inner < 8; inner++)
            cout << "";
        cout <<"#" << endl;
    }
    cout << "==========================\n";
}

//检查是否存在有多个皇后在同一行/列/对角线的情况
int check_pos_valid(int loop, int value)
{
    int index;
    int data;
    for (index = 0; index < loop; index++)
    {
        data = gEightQueen[index];
        if (value == data)
            return 0;
        if ((index + data) == (loop + value))
            return 0;
        if ((index - data) == (loop - value))
            return 0;
    }
    return 1;
}
void eight_queen(int index)
{
    int loop;
    for (loop = 0; loop < 8; loop++)
    {
        if (check_pos_valid(index, loop))
        {
            gEightQueen[index] = loop;
            if (7 == index)
            {
                gCount++, print();
                gEightQueen[index] = 0;
                return;
            }
            eight_queen(index + 1);
            gEightQueen[index] = 0;
        }
    }
}

int main()
{
    eight_queen(0);
    cout << "total=" << gCount << endl;
    return 0;
}