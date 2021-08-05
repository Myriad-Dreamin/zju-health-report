
data_dir?=$(PWD)
conf_file?=$(PWD)/dist/conf.js

pull:
	docker pull myriaddreamin/health-report

build:
	npx tsc; docker build -t myriaddreamin/health-report:latest .

run:
	docker run -it --rm -v $(data_dir):/data -v $(conf_file):/app/dist/conf.js --name health-report-container myriaddreamin/health-report
