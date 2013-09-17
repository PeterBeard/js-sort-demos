// Sort an array using the insertion sort algorithm
function insertionsort(values, tickperiod)
{
	var n_values = values.length;
	var i = 1;
	var j = 1;
	var value = values[1];
	// Shuffle the array until it's sorted
	I = setInterval(function() {
	if(i < n_values && !halt_flag)
	{
		// Look through the array until we find the value that goes in this spot
		if(j > 0 && value < values[j-1])
		{
			iterations++;
			// Shift the values in the array over until we find a home for the value to be inserted
			values[j] = values[j-1];
			values[j-1] = value;
			j--;
		} else {
			// We've found the correct position; insert the value
			values[j] = value;
			i++;
			j = i;
			// Get the value to insert
			value = values[i];
		}
		// Draw the values and wait until the next tick
		drawValues(values, j);
	} else {
		halt();
	}
	}, tickperiod);
}

// Add the algorithm to the list
sorting_algs["Insertion Sort"] = insertionsort;

