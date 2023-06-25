let meetings = ["0800, 45", "0830, 30"]

function conflictInfo(meetings){
    let parseArray = []
    for (let meeting of meetings){
      let splitMeet = meeting.split(",")
      let parseTimes = [parseInt(splitMeet[0]), parseInt(splitMeet[1])]
      parseArray.push(parseTimes)

    }
    console.log(parseArray)
    if (parseArray[0][0] < parseArray[1][0]){
        if (parseArray[0][0] + parseArray[0][1] > parseArray[1][0]){
            console.log("conflict - meeting 1 is too long")
        }
    }else if (parseArray[0][0] > parseArray[1][0]){
        if (parseArray[1][0] + parseArray[1][1] > parseArray[0][0]){
            console.log("conflict - meeting 2 is too long")
    }
}}

conflictInfo(meetings)