const predictPriority = (title)=>{

    const text = title.toLowerCase()

    if(text.includes("urgent") || text.includes("asap") || text.includes("deadline")){
        return "high"
    }

    if(text.includes("today") || text.includes("important")){
        return "medium"
    }

    return "low"
}

module.exports = predictPriority