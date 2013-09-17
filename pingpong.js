// Sort an array using the bubblesort algorithm in two directions
function pingpongsort(values, tickperiod)
{
	var n_values = values.length;
	var i = 0;
	var direction = 1;
	var lb_temp = -1;
	var up_temp = n_values;
	var lower_bound = -1;
	var upper_bound = n_values;
	// Shuffle the array until it's sorted
	I = setInterval(function() {
	if(!isSorted(values) && !halt_flag)
	{
		iterations++;
		i += direction;
		// Switch directions at either end of the array
		if(i == upper_bound || i == lower_bound)
		{
			direction *= -1;
			if(direction == -1)
			{
				i = ub_temp-1;
				upper_bound = ub_temp;
			} else {
				i = lb_temp+1;
				lower_bound = lb_temp;
			}
		}
		// Swap the values if they're in the wrong order
		if(values[i] > values[i+1])
		{
			temp = values[i+1];
			values[i+1] = values[i];
			values[i] = temp;
			// All values below the first swap...
			if(direction == -1)
				lb_temp = i;
			// ... and after the last swap...
			if(direction == 1)
				ub_temp = i;
			// ... are already sorted.
		}
		// Draw the values and wait until the next tick
		drawValues(values, i);
	} else {
		halt();
	}
	}, tickperiod);
}

// Add the algorithm to the list
sorting_algs["Ping-Pong Sort"] = pingpongsort;

