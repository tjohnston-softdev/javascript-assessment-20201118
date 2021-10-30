/*
	Problem 6: setDefaults
	
	Description:
		Create a function which adds default
		properties to an object if necessary.
	
	Notes:
		* 'answerSetDefaults' returns a function. It does not
		perform the task in itself.
		
		* 'defaultPropertiesDefinition' contains the required
		properties and their default values.
		
		* The derived function returns a new object.
		It does not modify the original.
		
		* For simplicity, there is no validation.
*/



// Main function
function answerSetDefaults(defaultPropertiesDefinition)
{
	// Derived function
	var answerResult = function (givenObject)
	{
		// Creates copy of original object.
		var objectSyntax = JSON.stringify(givenObject);
		var preparedObject = JSON.parse(objectSyntax);
		objectSyntax = null;
		
		// Property loop variables.
		var defaultPropName = "";
		var currentDefault = null;
		
		// Loops through default properties.
		for (defaultPropName in defaultPropertiesDefinition)
		{
			// Reads current value.
			currentDefault = defaultPropertiesDefinition[defaultPropName];
			
			
			// If given object does not have default property, add with default value.
			if (preparedObject[defaultPropName] === undefined)
			{
				preparedObject[defaultPropName] = currentDefault;
			}
		}
		
		return preparedObject;
	};
	
	
	return answerResult;
}




module.exports =
{
	getAnswer: answerSetDefaults
};