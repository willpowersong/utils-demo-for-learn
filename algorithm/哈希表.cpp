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

