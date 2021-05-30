import { createBrowserHistory } from "history";

class HistoryService {
	constructor() {
		this.history = createBrowserHistory({});
	}

	isCurrent(path) {
		return this.history.location.pathname === path;
	}

	isIncluded(path) {
		return this.history.location.pathname.includes(path);
	}

	push(path) {
		this.history.push(path);
	}

	get() {
		return this.history;
	}
}

export const historyService = new HistoryService();
