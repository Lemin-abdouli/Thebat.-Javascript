//Step 2: Defining variables and if else statement for userRole and accessLevel
let userRole="admin";
let accessLevel; 

if(userRole=="admin") 
{
    accessLevel="Full access granted";
} 
else if (userRole=="manager")
{
    accessLevel="Limited access granted";
} 
else {
    accessLevel="No access granted";
}

console.log("Access level: ",accessLevel);

// Step 3: Defining variables and nested if…else statementd for isLoggedIn and userMessage
let isLoggedIn = true;
let userMessage;

if(isLoggedIn)
{
    if(userRole=="admin")
    {
        userMessage="Welcome, Admin!";
    }
    else
    {
        userMessage="Welcome, user!";
    }
}
else
{
    userMessage="Please log in to access the system.";
}

console.log("The usser message is: ", userMessage);

//Step 4: Defining variables and switch statement for userType and userCategory
let userType="Subscriber";
let userCategory;

switch(userType)
{
    case "Admin":
        userCategory="Administrator";
        break;
    case "Manager":
        userCategory="Manager";
        break;
    case "Subscriber":
        userCategory="Administrator";
        break;
    default:
        userCategory="Unknown";
}

console.log("User category is: ", userType);