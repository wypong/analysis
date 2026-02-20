PRETEXT := $(HOME)/pt/bin/pretext

.PHONY: check web view print deploy stage clean

check:
	$(PRETEXT) --version

web:
	$(PRETEXT) build web

view:
	$(PRETEXT) view web

print:
	$(PRETEXT) build print

deploy:
	$(PRETEXT) deploy

stage:
	$(PRETEXT) deploy --stage-only

clean:
	rm -rf output .cache generated-assets
