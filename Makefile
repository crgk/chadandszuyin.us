
AWS_PROFILE 	:= crgk

.PHONY: build
build:
	jekyll build

.PHONY: serve
serve:
	jekyll serve

.PHONY: sync
sync:
	git pull origin master
	make build purge upload

.PHONY: upload
upload:
	aws s3 sync _site/ s3://chadandszuyin.us --profile $(AWS_PROFILE) --acl public-read

.PHONY: purge
purge:
	aws s3 rm s3://chadandszuyin.us --profile $(AWS_PROFILE) --recursive
