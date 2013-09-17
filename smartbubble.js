// Sort an array using a smarter version of the bubblesort algorithm
function smartbubble(values, tickperiod)
{
	var n_values = values.length;
	var i = 0;
	var imax = n_values-1;
	var last_swap = n_values-1;
	// Shuffle the array until it's sorted
	I = setInterval(function() {
	if(!isSorted(values) && !halt_flag)
	{
		iterations++;
		i++;
		if(i == imax)
		{
			// Everything after the last swap is already sorted so we can skip it from now on
			imax = last_swap;
			i = 0;
		}
		// Swap values in the wrong order
		if(values[i] > values[i+1])
		{
			temp = values[i+1];
			values[i+1] = values[i];
			values[i] = temp;
			last_swap = i+1;
		}
		// Draw the values and wait until the next tick
		drawValues(values, i);
	} else {
		halt();
	}
	}, tickperiod);
}

// Add the algorithm to the list
sorting_algs["Smart Bubble Sort"] = smartbubble;

