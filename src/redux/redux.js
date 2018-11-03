var store={
	error : undefined,
	errorMessage : undefined,

	isLoggedIn : undefined,
	userId : undefined,
	page : undefined
}

function loginActionCreator(username, password){
	return {
		type : "LOGIN"
		username : username,
		password : password
	}
}

function loginReducer(action, store){
	switch(action.type==="LOGIN"){
		//do firebase login call
		return newState;
	}
	//while developing, i can just return true all the time. set store.isLoggedin to be true and assign a user Id
}