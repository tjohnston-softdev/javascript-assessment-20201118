/*
	Problem 7: fetchUserByNameAndUsersCompany
	
	Description:
		Create a function that fetches a user by name,
		the user’s company, and a status.
	
	Notes:
		* Validation is performed for referental integrity,
		but not the data itself.
		
		* I am not the best at using promises. I am more
		comfortable using callbacks and the 'async' library.
		
		* 'targetName' refers to the user.
		
		* 'apiServices' refers to 'services' in 'p7.js'
*/




// Main function
function answerFetchUserByNameAndUsersCompany(targetName, apiServices)
{
	// Result object
	var queryData = {"company": null, "status": null, "user": null};
	
	
	// Promise chain
	var answerResult = new Promise(function (overallResolve, overallReject)
	{
		apiServices.fetchUsers()																		// Retrieve all users
		.then(userData => getUserByName(userData, targetName, queryData))								// Retrieve individual user
		.then(userExists => getCompanyByID(queryData.user.companyId, apiServices, queryData))			// Retrieve company
		.then(companyExists => getStatus(apiServices, queryData))										// Retrieve status
		.then(statusRetrieved => {overallResolve(queryData);})											// Return result object.
		.catch(chainError => {overallReject(chainError);})												// Handle error.
	});
	
	
	// Returns promise instead of query data.
	return answerResult;
}


// Retrieves individual user by name.
function getUserByName(userObjects, tgtName, resObj)
{
	var userPromise = new Promise(function (userResolve, userReject)
	{
		var userIndex = 0;
		var currentEntry = {};
		var resultEntry = null;
		var flaggedMessage = "";
		
		// Loops through user entries until target name is found.
		while (userIndex >= 0 && userIndex < userObjects.length && resultEntry === null)
		{
			currentEntry = userObjects[userIndex];
			
			if (currentEntry.name === tgtName)
			{
				// User found. Loop complete.
				resultEntry = currentEntry;
			}
			
			userIndex = userIndex + 1;
		}
		
		
		if (resultEntry !== null)
		{
			// User found.
			resObj.user = resultEntry;
			userResolve(true);
		}
		else
		{
			// User not found.
			flaggedMessage = writeMissingUser(tgtName);
			userReject(new Error(flaggedMessage));
		}
	});
	
	
	return userPromise;
}


// Retrieves company by ID found in user entry.
function getCompanyByID(tgtID, apiObj, resObj)
{
	var flaggedMessage = "";
	
	var companyPromise = new Promise(function (companyResolve, companyReject)
	{
		apiObj.fetchCompanyById(tgtID)
		.then(function (fetchedCompany)
		{
			// Async fetch complete.
			resObj.company = fetchedCompany;
			
			if (resObj.company !== undefined && resObj.company !== null)
			{
				// Company exists.
				companyResolve(true);
			}
			else
			{
				// Company does not exist.
				flaggedMessage = writeMissingCompany(tgtID);
				companyReject(new Error(flaggedMessage));
			}
			
		})
		.catch(function (fetchErr)
		{
			// Async fetch error.
			companyReject(new Error("Error performing company search."));
		});
	});
	
	return companyPromise;
}


// Retrieves status object.
function getStatus(apiObj, resObj)
{
	var statusPromise = new Promise(function (statusResolve, statusReject)
	{
		apiObj.fetchStatus()
		.then(function (fetchedStatus)
		{
			// Successful
			resObj.status = fetchedStatus;
			statusResolve(true);
		})
		.catch(function (fetchErr)
		{
			// Error
			statusReject(new Error("Error retrieving status."));
		});
	});
	
	return statusPromise;
}



// Writes 'user missing' error text.
function writeMissingUser(vUser)
{
	var writeRes = "";
	
	writeRes += "The user '";
	writeRes += vUser;
	writeRes += "' does not exist.";
	
	return writeRes;
}


// Writes 'company missing' error text.
function writeMissingCompany(vComp)
{
	var writeRes = "The company ID " + vComp + " does not exist.";
	return writeRes;
}





module.exports =
{
	getAnswer: answerFetchUserByNameAndUsersCompany
};