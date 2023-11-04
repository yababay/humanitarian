all: add commit push

add:
	git add .

commit:
	git commit -am update

push:
	git push origin articles

main:
	git checkout main

