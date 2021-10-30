/*
	Problem 4: applyStatusColor
	
	Description:
		Create a function which creates an array of objects
		where each object includes its matching status code.
		The association between colors and status codes are
		supplied as the first argument where the keys
		identify the colors, and the values are arrays of
		status codes matching the color. You can assume
		that a status code can only belong to one color.
	
	Constraints
		* Since there are so many status codes - we want a
		scalable solution, so you are not allowed to use if
		or switch statements to find the appropriate color.
		
		* If making tradeoffs between space and time here,
		optimise for time.
	
	Notes:
		* Items in 'httpArray' must be valid objects.
		The 'status' property must be a valid, positive
		integer.
		
		* Invalid 'httpArray' items will be ignored
		without error.
		
		* If a status code is tied to multiple colours,
		one of them will take precedence.
		
		* If the status codes does not have a colour,
		it will not be added to the result.
		
		* Colour names are case-sensitive.
*/


// Input format
const exampleColourDefinitions = {red: [404, 400], green: [200, 201]};
const exampleHttpArray = [{status: 404}, {status: 200}, {status: 404}, {status: 201}, {status: 400}, {status: 408}];



// Main function
function answerApplyStatusColour(colourDefinitions, httpArray)
{
	var httpIndex = 0;
	var currentHttpObject = {};
	var currentObjectValid = false;
	var currentStatusValid = false;
	var currentColour = "";
	var currentPreparedObject = {};
	
	var answerResult = [];
	
	
	// Loops through HTTP result objects
	for (httpIndex = 0; httpIndex < httpArray.length; httpIndex = httpIndex + 1)
	{
		currentHttpObject = httpArray[httpIndex];
		currentObjectValid = checkObjectValid(currentHttpObject);
		
		currentStatusValid = false;
		currentColour = "";
		currentPreparedObject = {};
		
		if (currentObjectValid === true)
		{
			currentStatusValid = checkStatusValid(currentHttpObject);
		}
		
		if (currentStatusValid === true)
		{
			// Finds matching colour from result code.
			currentColour = findColourFromHttpCode(colourDefinitions, currentHttpObject.status);
		}
		
		if (currentColour.length > 0)
		{
			// Creates new object and adds to result.
			currentPreparedObject = {"status": currentHttpObject.status, "color": currentColour};
			answerResult.push(currentPreparedObject);
		}
		
		
		
	}
	
	return answerResult;
}




// Finds colour from HTTP status code.
function findColourFromHttpCode(colDefs, targetCode)
{
	// Reads list of known colours from definition object.
	var propList = Object.keys(colDefs);
	
	// Loop variables
	var colourIndex = 0;
	var currentName = "";
	var currentAssignedCodes = [];
	var currentMatch = false;
	
	var colourRes = "";
	
	
	// Loops through known colours until match is found.
	while (colourIndex >= 0 && colourIndex < propList.length && colourRes === "")
	{
		currentName = propList[colourIndex];
		currentAssignedCodes = colDefs[currentName];
		currentMatch = currentAssignedCodes.includes(targetCode);
		
		if (currentMatch === true)
		{
			colourRes = currentName;
		}
		
		colourIndex = colourIndex + 1;
	}
	
	return colourRes;
}



// Checks whether given value is an object.
function checkObjectValid(subjectValue)
{
	var typeStr = typeof subjectValue;
	var checkRes = false;
	
	if (subjectValue !== undefined && subjectValue !== null && typeStr === "object")
	{
		checkRes = true;
	}
	
	return checkRes;
}


// Checks if given value is a positive integer.
function checkStatusValid(parentObj)
{
	var correctType = Number.isInteger(parentObj.status);
	var checkRes = false;
	
	if (correctType === true && parentObj.status > 0)
	{
		checkRes = true;
	}
	
	return checkRes;
}




module.exports =
{
	getAnswer: answerApplyStatusColour
};