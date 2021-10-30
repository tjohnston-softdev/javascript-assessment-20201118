/*
	Problem 3: sumDeep
	
	Description:
		Compute sums based on deep properties.
	
	Notes:
		* The parent property is 'objects' and the
		child property is 'val'
		
		* If an input object does not follow the assumed
		format, it will be ignored without error.
		
		* 'val' must be a valid number. Otherwise, it will be
		ignored.
		
		* Uses fixed depth. Going further may require
		third-party libraries.

*/


// Input format
const exampleInputArray =
[
	{
		objects:
		[
			{val: 2}, {val: 1}, {val: 1}
		]
	},
	{
		objects:
		[
			{ val: 1 }, { val: 0 }, { val: 4 }
		]
	}
];



// Main function - Parent loop.
function answerSumDeep(inputArray)
{
	var parentIndex = 0;
	var currentParentItem = {};
	var currentParentValid = false;
	var currentChildValid = false;
	var currentTotalValue = 0;
	var currentTotalObject = {};
	
	var answerResult = [];
	
	// Loops through each parent object.
	for (parentIndex = 0; parentIndex < inputArray.length; parentIndex = parentIndex + 1)
	{
		currentParentItem = inputArray[parentIndex];
		currentParentValid = checkObjectType(currentParentItem);
		currentChildValid = false;
		currentTotalValue = 0;
		currentTotalObject = {};
		
		if (currentParentValid === true)
		{
			// Checks if 'objects' property is an array.
			currentChildValid = Array.isArray(currentParentItem.objects);
		}
		
		if (currentChildValid === true)
		{
			// Finds total sum of 'val' properties.
			currentTotalValue = sumChildValues(currentParentItem.objects);
			
			// Creates new object with total and adds to result.
			currentTotalObject = {"objects": currentTotalValue};
			answerResult.push(currentTotalObject);
		}
	}
	
	return answerResult;
}



// Child loop function.
function sumChildValues(childArr)
{
	var valueIndex = 0;
	var currentValueObject = {};
	var currentObjectValid = false;
	var currentValueExists = false;
	
	var sumRes = 0;
	
	for (valueIndex = 0; valueIndex < childArr.length; valueIndex = valueIndex + 1)
	{
		currentValueObject = childArr[valueIndex];
		currentObjectValid = checkObjectType(currentValueObject);
		currentValueExists = false;
		
		if (currentObjectValid === true)
		{
			// Checks valid number.
			currentValueExists = Number.isFinite(currentValueObject.val);
		}
		
		if (currentValueExists === true)
		{
			// Adds number to total.
			sumRes = sumRes + currentValueObject.val;
		}
		
		
	}
	
	return sumRes;
}



// Checks if given value is an object.
function checkObjectType(oValue)
{
	var typeStr = typeof oValue;
	var checkRes = false;
	
	if (oValue !== undefined && oValue !== null && typeStr === "object")
	{
		checkRes = true;
	}
	
	return checkRes;
}



module.exports =
{
	getAnswer: answerSumDeep
};