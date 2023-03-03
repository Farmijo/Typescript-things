const func = () => {
    try {
        console.log("Things here")
    } catch (error) {
        console.log("error")
    }
    console.log("Things after the retry")
}

func()