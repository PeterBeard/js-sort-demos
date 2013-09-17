// Sort an array using the selection sort algorithm
function selectionsort(values, tickperiod)
{
	var n_values = values.length;
	var i = 0;
	var j = 0;
	var imin = 0;
	// Shuffle the array until it's sorted
	I = setInterval(function() {
	if(i < n_values && !halt_flag)
	{
		if(j < n_values)
		{
			iterations++;
			if(values[j] < values[imin])
			{
				imin = j;
			}
			j++;
		} else {
			// Swap the element at this position with the smallest one
			if(imin != i)
			{
				var temp = values[i];
				values[i] = values[imin];
				values[imin] = temp;
			}
			i++;
			imin = i;
			j = i+1;
		}
		// Draw the values and wait until the next tick
		drawValues(values, imin, j);
	} else {
		halt();
	}
	}, tickperiod);
}

// Add the algorithm to the list
sorting_algs["Selection Sort"] = selectionsort;

