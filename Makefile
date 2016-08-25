
AWS_PROFILE 	:= crgk

.PHONY: build
build:
	jekyll build

.PHONY: serve
serve:
	jekyll serve

.PHONY: upload
upload:
	aws s3 sync _site/ s3://chadandszuyin.us --profile $(AWS_PROFILE) --acl public-read
