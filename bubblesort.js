// Sort an array using the bubblesort algorithm
function bubblesort(values, tickperiod)
{
	var n_values = values.length;
	var i = 0;
	var j = 0;
	// Shuffle the array until it's sorted
	I = setInterval(function() {
	if(i < n_values && !halt_flag)
	{
		if(j < n_values)
		{
			// Swap the values if they're in the wrong order
			if(values[j] > values[j+1])
			{
				temp = values[j+1];
				values[j+1] = values[j];
				values[j] = temp;
			}
			iterations++;
			j++;
		} else {
			j = 0;
			i++;
		}
		// Draw the values and wait until the next tick
		drawValues(values, j);
	} else {
		halt();
	}
	}, tickperiod);
}

// Add the algorithm to the list
sorting_algs["Bubble Sort"] = bubblesort;

