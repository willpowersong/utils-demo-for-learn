/**
 *	name:hash table(哈希表)
 *	type:查找结构
 *	basis:function 解决冲突的策略
 *	apply:对key使用哈希函数可以得到对应的存储地址
 *	feature:key-value存储使用(ELFhash)
*/

// ELFhash
// http://blog.csdn.net/zhccl/article/details/7826137/
    unsigned long elf_hash(const unsigned char *name)  
    {  
    	unsigned long h = 0, g;  

        while (*name) {  
            h = (h << 4) + *name++;  
            if (g = h & 0xf0000000)  
                h ^= g >> 24;  
            h &= ~g;  
        }  
        return h;  
    }

//----------------------------------------------------
// 以value的字符累加和作为key
// hash解决冲突的方法->公共溢出法<通过vector追加到后面>
#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Hashtable
{
private:
    vector<pair<int,string>> hashtable[20];
public:
    friend std::ostream& operator<<(std::ostream& out, const Hashtable& h);
    int hashfunction(string s);
    void add_hash(int key, string s);
    bool delete_hash(string s);
    int search(string s);
    
};

std::ostream& operator<<(std::ostream& out,const Hashtable& h)
{
    int i;
    for(i=0;i<20;i++)
    {
        for(int j=0; j<(int)h.hashtable[i].size();j++)
            out << h.hashtable[i][j].first << " " << h.hashtable[i][j].second;
        	<< "\n";
    }
    return out;
}
int Hashtable::hashfunction(string s)
{
    int i,sum=0;
    for(i=0;i<(int)s.size();i++)
        sum=sum+s[i];
    int result;
    result=(sum-1)%20;
    return result;
}
void Hashtable::add_hash(int key, string s)
{
    std::pair<int,string> tempPair;
    tempPair.first=key;
    tempPair.second=s;
    int index=hashfunction(s);
    hashtable[index].push_back(tempPair);
}

int Hashtable::search(string s)
{
    int index=hashfunction(s);
    int i;
    for(i=0;i<(int)hashtable[index].size();i++)
    {
        if(hashtable[index][i].second==s)
            {
                cout<<hashtable[index][i].first<<endl;    
                return hashtable[index][i].first;
            }

    }
    if(i=hashtable[index].size())
    {    
        cout<<"there is no much!"<<endl;
        return -1;
    }
}


bool Hashtable::delete_hash(string s)
{
    int index=hashfunction(s);
    int i;
    for(i=0;i<(int)hashtable[index].size();i++)
    {
        if(hashtable[index][i].second==s)
            {
                hashtable[index].erase(hashtable[index].begin()+i);
                return true;
            }

    }
    return false;
}