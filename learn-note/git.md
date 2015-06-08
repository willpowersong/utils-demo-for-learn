# Git

1. 一些重要自己又不太常用的指令
	
	git tag -a v1.0 -m "version1.0"  # 打版本
	git push -u origin master --tag  # 提交版本
	-------------------------------
	git reset HEAD 			# 暂存区的目录树会被重写，工作区不受影响
	git reset HEAD^  		# 退回上次的提交后的状态，工作区不受影响
	git reset -hard HEAD^	# 工作区受影响
	git reset				# 用HEAD指向的目录重置暂存区，相当于撤销git add
	-------------------------------
	git stash  #保存现场
	  git checkout master
	  git checkout -b issue-101
	  git add xxx
	  git commit -m "xxx"
	  git checkout master
	  git merge --no-ff -m "merged bug fix 101" issue-101
	  git branch -d issue-101
	  git checkout dev
	git stash pop  #恢复现场
	-------------------------------
	git pull 	# 获取最新代码并merge
	git fetch 	# 获取不merge
	-------------------------------
	服务端强行导出工作区[warning:这样做不够合理]
	修改 `hooks/post-update` 添加
	`export GIT_WORK_TREE=/var/www/test`
	`git checkout -f`  # 无视版本强制覆盖
	`echo "success"`