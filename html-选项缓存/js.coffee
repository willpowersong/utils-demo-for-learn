name = "select"
res = []
uls = document.getElementsByTagName "ul"
c1 = 0
c2 = 0

# 存储答案
for i in uls
	c1++
	c2=0
	for j in i.childNodes
		c2++
		res.push {"item":c1,"result":c2/2} if j.checked == true

console.log JSON.stringify res

#