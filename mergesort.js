// Sort an array using the merge sort algorithm
function mergesort(values, tickperiod)
{
	var n_values = values.length;
	var i = 0;
	// Shuffle the array until it's sorted
	I = setInterval(function() {
	if(!isSorted(values) && !halt_flag)
	{
		iterations++;
		// Keep dividing the lists
		values = split(values);
		drawValues(values);
	} else {
		halt();
	}
	}, tickperiod);
}

function split(values)
{
	// If we're down to one value, return it
	if(values.length == 1)
		return values;
	// Divide the list into two roughly equal parts
	var left = new Array();
	var right = new Array();
	var center = Math.floor(values.length / 2);
	// Left side
	for(var i = 0; i < center; i++)
	{
		left.push(values[i]);
	}
	// Right side
	for(var i = center; i < values.length; i++)
	{
		right.push(values[i]);
	}
	left = split(left);
	right = split(right);
	// Merge the two lists
	return merge(left, right);
}

function merge(left, right)
{
	var result = new Array();
	while(left.length > 0 || right.length > 0)
	{
		iterations++;
		// If both arrays are non-empty
		if(left.length > 0 && right.length > 0)
		{
			// Compare the first values in each array
			var lvalue = left[0];
			var rvalue = right[0];
			// Append the smaller of the two values to the sorted list
			if(lvalue <= rvalue)
			{
				result.push(lvalue);
				// Remove the value from the left array
				lvalue = left.shift();
			} else {
				result.push(rvalue);
				// Remove from the right array
				rvalue = right.shift();
			}
		} else if(left.length > 0) { // stick on the left array
			for(var i = 0; i < left.length; i++)
			{
				result.push(left[i]);
			}
			// Clear out the array
			left = new Array();
		} else { // stick on the right array
			for(var i = 0; i < right.length; i++)
			{
				result.push(right[i]);
			}
			// Clear out the array
			right = new Array();
		}
	}
	// Return the sorted array
	return result;
}

// Add the algorithm to the list
sorting_algs["Merge Sort"] = mergesort;

