// Code EyesOnMe Component Here

function EyesOnMe(){
    function handlefocus(event){
        event.preventDefault()
        console.log("Good!")
    }
    
    function handleBlur(event){
        event.preventDefault()
        console.log("Hey! Eyes on me!")
    }
    return(
        <button onFocus={handlefocus} onBlur={handleBlur}>Eyes on me</button>
    )

}

export default EyesOnMe;