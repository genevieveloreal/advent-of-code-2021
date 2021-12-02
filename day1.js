// Day 1 - ADVENT OF CODE (https://adventofcode.com/2021/day/1)

const depths = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

const countDepthIncreases = (depths) => {
	let acc = 0;
	depths.forEach(function (depth, index) {
		const prevIndex = index - 1;
		if (depths[prevIndex] < depths[index]) {
			acc++;
		}
	});
	return acc;
}

console.log(countDepthIncreases(depths));

// EXPECTED RESULT: 7
