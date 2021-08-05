
pull:
	docker pull myriaddreamin/health-report

build:
	npx tsc; docker build -t myriaddreamin/health-report:latest .

run:
	docker run -it --rm -v $(PWD):/data -v $(PWD)/dist/conf.js:/app/dist/conf.js --name health-report-container myriaddreamin/health-report
