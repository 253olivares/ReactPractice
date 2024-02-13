import './index.scss'

// this is our animated letter component that is responsible for changing our letters and letting us animated each individual letter so the user
// can hover and trigger an animation

// decontrsuct our properties and fetch our letter class string array and index that we passed
const AnimatedLetters = ({letterClass, strArray, idx}) => {

    return (
        <span>
            {
                // we create a span the wraps all our letters and then map through each letter in our string 
                // we assign that letter / character to car and define our index as i
                strArray.map((char, i) => (
                    // then each loop we create a span that is keyed with our letter / character and the number in the loop starting with 0
                    // then we create a class name and assign our letter class as well as our delay class identifier which in this case is 
                    // our index position added with the starting delay which was 15. This way we can add .1s delay as our loop continues
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {/* display our character */}
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimatedLetters;