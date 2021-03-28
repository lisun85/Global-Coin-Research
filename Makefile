.PHONY: all
all: test

.PHONY: install
install:
	npm install

.PHONY: compile
compile:
	npx hardhat compile

.PHONY: test
test:
	npm test

.PHONY: deploy/rinkeby
deploy/rinkeby:
	test -n "$(PRIVATE_KEY)" # $$PRIVATE_KEY required
	npx hardhat run --network rinkeby scripts/deploy.js

.PHONY: deploy/mainnet
deploy/mainnet:
	test -n "$(PRIVATE_KEY)" # $$PRIVATE_KEY required
	npx hardhat run --network mainnet scripts/deploy.js

.PHONY: flatten
flatten:
	@ npx hardhat flatten