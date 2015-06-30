python的四种数据结构
list,tuple,dict,set
list=[1,2,3,4,'a','b'] 列表
tuple=(1,2,3,'a','b') 元组(不可以赋值)
dict={'name':'cyan'} 字典
set={'a','b','c'} 集合

迭代器iterator耗费内存
生成器Generators

python socket

thead
from threading import Thread  
from multiprocessing import Process  
thread1 = Thread(target=countdown,args=(COUNT,)) 
thread1.start()
thread1.join()

CGI

TestSuite
from widget import Widget
import unittest
# 构建测试类
class WidgetTestCase(unittest.Testcase):
	def setUp(self):
		self.widget=Widget()
	def tearDown(self):
		self.widget.dispose()
		self.widget = None
	def testSize(self):
		self.assertEqual(self.widget.getSize(), (40, 40))
	def testResize(self):
		self.widget.resize(100, 100)
		self.assertEqual(self.widget.getSize(), (100, 100))

if __name__ == "__main__":
	# 构建测试集
	suite=unittest.TestSuite()
	suite.addTest(WidgetTestCase("testSize"))
	suite.addTest(WidgetTestCase("testResize"))

runner=unittest.TextTestRunner()
runner.run(suite)		

wxPython
import sys,os
from wxPython.wx import *
class main_window(wxFrame):
	def __init__(self,parent,id,title):
		wxFrame.__init__(self,parent,-1,title,size=(200,100)),style=wxDEFAULT_FRAME_STYLE[wxNO_FULL_REPAINT_ON_RESIZE]
		self.control=wxTextCtrl(self,-1,style=wxTE_MULTLINE)
		self.Show(true)
class App(wxApp):
	def OnInit(self):
		frame=main_window(None,-1,"wxPython:(A Demostration)")
		self.SetTopWindow(frame)
		return true
app=App(0)
app.MainLoop()

C++拓展python

lamda 匿名函数
lamda [argument]:[statement]

内置函数
map(分), reduce(合), filter
map()的两个参数一个是函数名，另一个是列表或元组。
reduce()函数可以按照给定的方法把输入参数中上序列缩减为单个的值
filter()函数包括两个参数，分别是function和list。
该函数根据function参数返回的结果是否为真来过滤list参数中的项，最后返回一个新列表

GIL全局解释技术(锁住资源)
每一个interpreter进程,只能同时仅有一个线程来执行, 获得相关的锁, 存取相关的资源.
reduce(add,map(lamda: x if x== true else false list))

编码
python 默认使用cp936(windows)
# -*- coding: GBK -*- 

运行控制台
subprocess
cmd="cmd.exe"
begin=101
end=200
while begin < end:
	p=subprocess.Popen(cmd,shell=True,stdout=subprocess.PIPE,
				stdin=subprocess.PIPE,
				stderr=subprocess.PIPE)
	p.stdin.write("ping 192.168.1."+str(begin)+"\n")

	p.stdin.close()
	p.wait()

	print "execution result: %s" % p.stdout.read()


range() 生成列表list
xrange() 每次调用返回其中的一个值

def __init__(self): # 构造函数, 创建完对象后调用

def __new__(self): # 创建对象时调用

def __setattr__(self,key,value):
	self[key]=value # 重写可以用.调用变量

def __getattr__(self,key): # 
	try:
		return self[key]
	except keyError,k:
		return None

def __call__(self):
	# 实例自身的调用
	# 相当于object()

if  __name__ == "__main__":
	# main 函数

# 编程规范
#!Python
    __version__ = "$Revision： 1.4 $"
    # $Source： E：/cvsroot/Python_doc/pep8.txt，v $ 

字符和ASCII的赚换
ord('a') == 97
chr(97) == 'a'

# 反转字符串
print s[::-1]
l = list(s)
l.reverse()
print ''.join(l)

# 定义规则
aTob = string.maketrans('e','a')
s = 'hello python'
print s.translate(aTob, 'o')

splitlines 处理段落

struck.unpack 按照一定格式提取子串
format中2s就是取2个字符, 5x就是跳过5个字符

generator机制(协程)
yield
send(msg)
next()
Promise是JavaScript社区的研发产物，而yield则是ECMA-262从别处参考而來的「类协程」实现。
yield可以做到非串行，而Promise很难。Promise兼容性强，yield只能继续等待。

Promise最大的特点有以下几个：

1. 原本嵌套式的callback模型变成"看上去线性"的模型，以此提供代码逻辑的顺畅性
2. 异常传递，即当任何一个Promise失败时，异常会透过那些没有reject处理的节点一直到最后去，这是NodeJS的callback模型没有做到的。异常传递更接近正常代码中的try/catch，你可以有N行代码，任何一行代码都可能出错，但总能被后面的catch捕获，而NodeJS的callback模型要在每个callback中处理err参数，这是我一直反对NodeJS的异步模型的很重要的原因之一而以上几点，其实通过Generator都能做，但这并不代表Generator和Promise是一类东西。Generator可以做更多的事，比如：
1. 生成一个无限列表，每次获取都递增1
2. 完成类似C sharp的Linq的工作，即多个对数组元素的操作（Iterator）只需要遍历一次数组，比如这样：asGenerator(array).each(o -> o.x++).where(o -> o.x > 10).map(o -> o.x)，只有一次遍历
3. 产生一个每次获取一个元素都有重要、高消耗的资源访问的列表，完成延迟加载模型来将高消耗的元素获取延迟到真正访问时，而不需要一开始就获取N次形成静态的数组
Generator的用法非常非常多，上面说的也只是经典场景而已，绝对不要只把它当成一个coroutine的玩法，会被自己关在笼子里玩不开的

快排
def quick_sort(ls):
return [] if ls == [] else quick_sort([y for y in ls[1:] if y < ls[0]]) + [ls[0]] + quick_sort([y for y in ls[1:] if y >= ls[0]])

if __name__ == '__main__':
l1 = [3,56,8,1,34,56,89,234,56,231,45,90,33,66,88,11,22]
l2 = quick_sort(l1)
print l1
print l2

pylint代码检查工具
python自带的简单的web服务器
SimpleHTTPServer
使用win32包写windows脚本
Splinter模拟浏览器行为进行测试
memory_profiler/psutil/Guppy一起使用检测内存

http代理(应用层)
proxy_handler = urllib2.ProxyHandler({'http' : 'http://地址:端口'})
opener = urllib2.build_opener(proxy_handler, urllib2.HTTPHandler)
urllib2.install_opener(opener)
socket代理(会话层)
import socks, socket
socks.setdefaultproxy(socks.PROXY_TYPE_SOCKS5, "地址", 端口)
socket.socket = socks.socksocket

遍历文件
os.walk()会返回一个generater，所以调用的时候一定要放到for循环中
import os
def walk_dir(dirname):
	for root,dirs,files in os.walk(dirname):
		for f in files:
			yield os.path.join(root, f)
import os
def walk_dir2(dirname):
	for d in os.listdir(dirname):
		path = os.path.join(dirname, d)
		if os.path.isdir(path):
			for f in walk_dir2(path):
				yield f
		else:
			yield path