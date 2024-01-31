import React from "react";

const Child = ({returnComment}) => {

    // without use callback our useEffect would run multiple times. We would see our console log run everytime 
    //the page rerenders bc returncomment would be being sent again to the child component when toggle is changed in our parent commponent
    // Normally useMemo would be a good fix to prevent our function from running and returning return comment again but we cant do that
    // in this case since we are returning a property to our function
    
    // useMemo would keep our function to remain dynamic. Allowing us to pass samss
    React.useEffect(()=>{
        console.log("Function has been called")
    },[returnComment])
    return(
        <div>{returnComment("Sams")}</div>
    )

}

export default Child;