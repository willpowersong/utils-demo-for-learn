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