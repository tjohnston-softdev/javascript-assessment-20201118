/*
	Problem 5: createGreeting
	
	Description: Figure out what to do from the test.
	
	Notes:
		* 'baseFunction' refers to an existing function
		that should write an output string.
		
		* 'greetType' is the greeting string (eg. "Hello")
		
		* For simplicity, there is no validation.
*/



function answerCreateGreeting(baseFunction, greetType)
{
	var answerResult = function(entryName)
	{
		// Calls base function with the given context and name.
		var greetRes = baseFunction(greetType, entryName);
		return greetRes;
	};
	
	return answerResult;
}



module.exports =
{
	getAnswer: answerCreateGreeting
};