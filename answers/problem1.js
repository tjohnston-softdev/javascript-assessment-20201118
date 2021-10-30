/*
	Problem 1: stripPrivateProperties
	
	Description:
		Given an array of objects, create a new array where the
		objects inside don’t include the supplied properties.
		(object mutation is fine here.)
	
	Notes:
		* Returns a new array. The original input is not modified.
		* Property names are case-sensitive

*/


function answerStripPrivateProperties(privatePropNames, givenObjects)
{
	var loopIndex = 0;
	var currentOriginalObject = {};
	var currentNewObject = {};
	
	var currentPropertyName = "";
	var currentPropertyValue = null;
	var currentPrivate = false;
	
	var answerResult = [];
	
	
	// Loop iterates through each object and creates a copy without private properties.
	for (loopIndex = 0; loopIndex < givenObjects.length; loopIndex = loopIndex + 1)
	{
		currentOriginalObject = givenObjects[loopIndex];
		currentNewObject = {};
		
		currentPropertyName = "";
		currentPropertyValue = null;
		currentPrivate = false;
		
		// Loop iterates through properties, transferring to the new object as required.
		for (currentPropertyName in currentOriginalObject)
		{
			// Reads property value and checks if private.
			currentPropertyValue = currentOriginalObject[currentPropertyName];
			currentPrivate = privatePropNames.includes(currentPropertyName);
			
			if (currentPrivate !== true)
			{
				// Property is not private. Add to new object.
				currentNewObject[currentPropertyName] = currentPropertyValue;
			}
		}
		
		// Adds new object to result array.
		answerResult.push(currentNewObject);
	}
	
	
	return answerResult;
}




module.exports =
{
	getAnswer: answerStripPrivateProperties
};