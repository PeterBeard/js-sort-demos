// Sort an array using the bogosort algorithm
function bogosort(values, tickperiod)
{
	var n_values = values.length;
	// Shuffle the array until it's sorted
	I = setInterval(function() {
	if(!isSorted(values) && !halt_flag)
	{
		iterations++;
		// Fisher-Yates Shuffle
		for(var i = n_values-1; i > 0; i--)
		{
			var j = Math.floor(Math.random() * (i+1));
			// Swap i and j
			var temp = values[j];
			values[j] = values[i];
			values[i] = temp;
		}
		// Draw the values and wait until the next tick
		drawValues(values);
	} else {
		halt();
	}
	}, tickperiod);
}

// Add the algorithm to the list
sorting_algs["Bogosort"] = bogosort;

