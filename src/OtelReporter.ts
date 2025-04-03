import type {
	FullConfig,
	FullResult,
	Reporter,
	Suite,
	TestCase,
	TestResult,
	TestStep,
} from "@playwright/test/reporter";

class OtelReporter implements Reporter {
	onBegin(config: FullConfig, suite: Suite) {
		console.log(`Starting the run with ${suite.allTests().length} tests`);
	}

	onEnd(result: FullResult) {
		console.log(`Finished the run: ${result.status}`);
	}

	onStepBegin(test: TestCase, result: TestResult, step: TestStep): void {}

	onStepEnd(test: TestCase, result: TestResult, step: TestStep): void {}

	onTestBegin(test: TestCase, result: TestResult) {
		console.log(`Starting test ${test.title}`);
	}

	onTestEnd(test: TestCase, result: TestResult) {
		console.log(`Finished test ${test.title}: ${result.status}`);
	}
}

export default OtelReporter;
