import React from "react";

function Login({users, currentUser, setCurrentUser, loggedInUser, setLoggedInUser}) {
    
    function handleLogoutClick(e) {
        e.preventDefault();
        setCurrentUser("");
    }

    function handleLoginClick(e) {
        e.preventDefault();
        const username = e.target.username.value;
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === username) {
                setCurrentUser(users[i].fname);

                const newLoggedInUser = users[i];
                setLoggedInUser(newLoggedInUser)

                break;
            }
        }
    }   

    return (
    <div className="justify-center container mx-auto bg-gray-200 rounded-xl border p-8 m-10">
        <h1 className="text-2xl py-4 font-bold">Login:</h1>
        { currentUser ? (
            <div className="px-2 py-1">
                <span className="flex justify-center px-1 py-2">Logged-In as: </span>
                <span className="flex justify-center px-2 py-1">{loggedInUser.fname} {loggedInUser.lname}</span>
                <div className="flex justify-center px-2 py-3">
                    <button onClick={handleLogoutClick}>Logout</button>
                </div>
            </div>) : 
            (
            <form onSubmit={handleLoginClick}>
                <div className="flex justify-center px-2 py-1">
                    <input type="text" name="username" placeholder="Enter username..." id="username" className="px-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl
                      border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"></input>
                </div>
                <div className="flex justify-center px-2 py-3">
                    <button type="submit">Login</button>
                </div>
            </form>)
        }
        <div>
            <div>{currentUser}</div>
        </div>
        <div>
            <p className="text-sm text-gray-500">Don't have an account?</p>
            <p className="text-sm text-gray-500">Sign Up</p>
        </div>
    </div>
  );
}

export default Login;