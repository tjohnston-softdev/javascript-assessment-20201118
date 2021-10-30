/*
	Problem 2: excludeByProperty
	
	Description:
		Given an array of objects, create a new array which
		excludes objects based on a supplied property.
	
	Notes:
		* Returns a new array. The original input is not modified.
		* Only one property can be excluded, unlike Problem 1
		* The property name is case-sensitive

*/



function answerExcludeByProperty(exclProp, givenObjects)
{
	var objectIndex = 0;
	var currentObject = {};
	var answerResult = [];
	
	// Loops through given objects.
	for (objectIndex = 0; objectIndex < givenObjects.length; objectIndex = objectIndex + 1)
	{
		currentObject = givenObjects[objectIndex];
		
		if (!currentObject[exclProp])
		{
			// Object does not have excluded property. Add to result.
			answerResult.push(currentObject);
		}
		
	}
	
	return answerResult;
}



module.exports =
{
	getAnswer: answerExcludeByProperty
};