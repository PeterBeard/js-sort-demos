// Base sorting algorithm code
//
// Provides functions to generate data

"use strict";

// This array contains pointers to functions that implement various sorting algorithms
// The keys are the names of the algorithms and the values are function pointers
var sorting_algs = new Array();

// This flag will stop any running algoritm if true
var halt_flag = false;

// This variable contains the interval that runs the sorting algorithm iterations
var I = null;

// This is the number of iterations required to sort the array
var iterations = 0;

// This is the initial state of the array to be sorted
var initial_values = new Array();

// Generate a list of all available algorithms
function listAlgs()
{
	var select_el = document.getElementById("algorithm");
	select_el.innerHTML = "";
	for(var key in sorting_algs)
	{
		select_el.innerHTML += '<option value="' + key + '">' + key + '</option>';
	}
}

// Generate some random data using the values from the HTML form
function generateData()
{
	// Reset sorting loop
	halt();
	halt_flag = false;
	messageBusy("Sorting array...");
	// Value parameters
	var n_values = document.getElementById("pointcount").value;
	var min_value = 1;
	var max_value = n_values;
	// Generate data
	var values = new Array();
	for(var i = 0; i < n_values; i++)
	{
		values.push(i+1);
	}
	// Shuffle the values
	for(var i = n_values - 1; i > 1; i--)
	{
		var j = Math.floor(Math.random() * (i+1));
		var temp = values[i];
		values[i] = values[j];
		values[j] = temp;
	}
	// Save the values
	initial_values = values.slice(0);
	// Draw the values
	drawValues(values);
	// Sort
	startSort(values);
}

// Re-sort the initial values
function resort()
{
	// Reset sorting loop
	halt();
	halt_flag = false;
	messageBusy("Sorting array...");
	// Get the initial values
	var values = initial_values.slice(0);
	// Draw the values
	drawValues(values);
	// Sort
	startSort(values);
}

// Sort the array using the algorithm chosen by the user
function startSort(values)
{
	// Get the step period
	var period = document.getElementById("tickperiod").value;
	// Start the sorting algorithm selected by the user
	var alg = document.getElementById("algorithm").value;
	// Sort the array
	iterations = 0;
	sorting_algs[alg](values, period);
}

// Determine whether an array is sorted (ascending order)
function isSorted(values)
{
	var n_values = values.length;
	for(var i = 1; i < n_values; i++)
	{
		if(values[i] < values[i-1])
			return false;
	}
	return true;
}

// Stop sorting
function halt()
{
	halt_flag = true;
	clearInterval(I);
	messageSuccess("Done in " + iterations + " iterations.");
}

// Draw an array of values on the page as bars
function drawValues(values, index_a, index_b)
{
	if(typeof(index_a) === undefined)
	{
		index_a = -1;
	}
	if(typeof(index_b) === undefined)
	{
		index_b = -1;
	}
	var n_values = values.length;
	// Find the maximum value in the array
	var max_value = 0;
	for(var i = 0; i < n_values; i++)
	{
		if(values[i] > max_value)
			max_value = values[i];
	}
	// Display parameters
	var data_div = document.getElementById("data");
	var data_div_styles = window.getComputedStyle(data_div);
	var bar_margin = 2;
	var bar_width = Math.floor(data_div_styles.width.substring(0,3) / n_values) - bar_margin;
	var bar_height = data_div_styles.height.substring(0,3);
	// Clear out old data
	data_div.innerHTML = "";
	// Insert new data
	for(var i = 0; i < n_values; i++)
	{
		var height = Math.floor(bar_height*(values[i]/max_value));
		var margin = bar_height - height;
		if(i == index_a)
		{
			data_div.innerHTML += '<div class="selected_a bar" style="width:' + bar_width + 'px;height:' + height + 'px;margin-top:' + margin + 'px">' + values[i] + '</div>';
		} else if(i == index_b) {
			data_div.innerHTML += '<div class="selected_b bar" style="width:' + bar_width + 'px;height:' + height + 'px;margin-top:' + margin + 'px">' + values[i] + '</div>';
		} else { 
			data_div.innerHTML += '<div class="bar" style="width:' + bar_width + 'px;height:' + height + 'px;margin-top:' + margin + 'px">' + values[i] + '</div>';
		}
	}
}

// Display a success message
function messageSuccess(txt)
{
	document.getElementById("message").innerHTML = "";
	document.getElementById("message").innerHTML = '<p class="success">' + txt + '</p>';
}

// Display a busy message
function messageBusy(txt)
{
	document.getElementById("message").innerHTML = "";
	document.getElementById("message").innerHTML = '<p class="busy">' + txt + '</p>';
}
