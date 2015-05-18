URI和URL的区别
URI是统一资源标识符,能唯一识别资源即可,可以是绝对的的也可以是相对的,可以缺省scheme
URL是用来定位的,统一资源定位器,不一定指定固定资源,例如http://www.baidu.com
java.net.URL类不提供对标准RFC2396规定的特殊字符的转义
因此需要调用者自己对URL各组成部分进行encode
而java.net.URI则会提供转义功能
因此The recommended way  to manage the encoding and decoding of URLs is to use  java.net.URI. 
可以使用URI.toURL()和URL.toURI()方法来对两个类型的对象互相转换
对于HTML FORM的url encode/decode
可以使用java.net.URLEncoder和java.net.URLDecoder来完成
但是对URL对象不适用。
----------------------------------------------

Java打开文件
java.awt.Desktop.open(File file);

----------------------------------------------

java垃圾回收机制

java异常机制

Scanner和BufferedReader有什么区别

String和BufferString有什么区别

java锁机制

java类加载机制

线程安全问题

-----------------------------------------------
回调
    public class Caller {  
        private MyCallInterface callInterface;  
          
        public Caller() {  
        }  
          
        public void setCallFunc(MyCallInterface callInterface) {  
            this.callInterface = callInterface;  
        }  
          
        public void call() {  
            callInterface.printName();  
        }  
    }  
``````````````````````````````````````````````````
    public interface MyCallInterface {  
	    public void  printName();  
	} 
``````````````````````````````````````````````````
	public class Client implements MyCallInterface {  
      
        @Override  
        public void printName() {  
            System.out.println("This is the client printName method");  
        }  
    }  
```````````````````````````````````````````````````
public class Test {  
    public static void main(String[] args) {  
        Caller caller = new Caller();  
        caller.setCallFunc(new Client());  
        caller.call();  
    }  
} 
```````````````````````````````````````````````````
public class Test {  
    public static void main(String[] args) {  
        Caller caller = new Caller();  
//      caller.setCallFunc(new Client());  
        caller.setCallFunc(new MyCallInterface() {  
            public void printName() {  
                System.out.println("This is the client printName method");  
            }  
        });  
        caller.call();  
    }  
} 

```````````````````````````````````````````````````
第一，谈谈final, finally, finalize的区别。
最常被问到。

第二，Anonymous Inner Class (匿名内部类) 是否可以extends(继承)其它类，是否可以implements(实现)interface(接口)?

第三，Static Nested Class 和 Inner Class的不同，说得越多越好(面试题有的很笼统)。

第四，&和&&的区别。
这个问得很少。

第五，HashMap和Hashtable的区别。
常问。

第六，Collection 和 Collections的区别。
你千万别说一个是单数一个是复数。

第七，什么时候用assert。
API级的技术人员有可能会问这个。

第八，GC是什么? 为什么要有GC?
基础。

第九，String s = new String("xyz");创建了几个String Object?

第十，Math.round(11.5)等於多少? Math.round(-11.5)等於多少?

第十一，short s1 = 1; s1 = s1 + 1;有什么错? short s1 = 1; s1 += 1;有什么错?
面试题都是很变态的，要做好受虐的准备。

第十二，sleep() 和 wait() 有什么区别?
搞线程的最爱。

第十三，Java有没有goto?
很十三的问题，如果哪个面试的问到这个问题，我劝你还是别进这家公司。

第十四，数组有没有length()这个方法? String有没有length()这个方法?

第十五，Overload和Override的区别。Overloaded的方法是否可以改变返回值的类型?
常问。

第十六，Set里的元素是不能重复的，那么用什么方法来区分重复与否呢? 是用==还是equals()? 它们有何区别?

第十七，给我一个你最常见到的runtime exception。
如果你这个答不出来，面试的人会认为你没有实际编程经验。

第十八，error和exception有什么区别?

第十九，List, Set, Map是否继承自Collection接口?

第二十，abstract class和interface有什么区别?
常问。

第二十一，abstract的method是否可同时是static,是否可同时是native，是否可同时是synchronized?

第二十二，接口是否可继承接口? 抽象类是否可实现(implements)接口? 抽象类是否可继承实体类(concrete class)?

第二十三，启动一个线程是用run()还是start()?

第二十四，构造器Constructor是否可被override?

第二十五，是否可以继承String类?

第二十六，当一个线程进入一个对象的一个synchronized方法后，其它线程是否可进入此对象的其它方法?

第二十七，try {}里有一个return语句，那么紧跟在这个try后的finally {}里的code会不会被执行，什么时候被执行，在return前还是后?

第二十八，编程题: 用最有效率的方法算出2乘以8等於几?
有C背景的程序员特别喜欢问这种问题。

第二十九，两个对象值相同(x.equals(y) == true)，但却可有不同的hash code，这句话对不对?

第三十，当一个对象被当作参数传递到一个方法后，此方法可改变这个对象的属性，并可返回变化后的结果，那么这里到底是值传递还是引用传递?

第三十一，swtich是否能作用在byte上，是否能作用在long上，是否能作用在String上?

第三十二，编程题: 写一个Singleton出来。