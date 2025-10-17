let currentTime = $state(new Date());

setInterval(() => {
	currentTime = new Date();
}, 1000);

export const time = {
	get current() {
		return currentTime;
	}
};
