// Sort an array using the radix sort algorithm
function radixsort(values, tickperiod)
{
	var n_values = values.length;
	var n_digits = Math.ceil(Math.log(Math.max(values)) / Math.log(10));
	var i = 0;
	var d = 0;
	var buckets = new Array();
	for(var j = 0; j < 10; j++)
	{
		buckets[j] = new Array();
	}
	// Iterate over the array until all values have been sorted
	I = setInterval(function() {
	if(!isSorted(values) && !halt_flag)
	{
		if(i < n_values)
		{
			iterations++;
			var digit = getDigit(values[i], d); // Get the dth digit of the ith value
			buckets[digit].push(values[i]); // Place the value in the dth bucket
			i++;
			// Draw the buckets with the rest of the array tacked on the end
			drawValues(radixMerge(buckets).concat(values.slice(i,n_values)), i);
		} else {
			values = radixMerge(buckets); // Merge the buckets
			i = 0; // Reset counter
			d++; // Next digit
			// Empty the buckets
			buckets = new Array();
			for(var j = 0; j < 10; j++)
			{
				buckets[j] = new Array();
			}
			// Draw
			drawValues(values);
		}
	} else {
		halt();
	}
	}, tickperiod);
}

// Get the nth least significant digit of a number (starting with 0)
function getDigit(value, n)
{
	// Get the nth digit from the right
	return Math.floor((value / Math.pow(10,n))) % 10;
}

// Stick all of the buckets together
function radixMerge(buckets)
{
	var v = new Array();
	for(var i = 0; i < buckets.length; i++)
	{
		v = v.concat(buckets[i]);
	}
	return v;
}

// Add the algorithm to the list
sorting_algs["Radix Sort"] = radixsort;

