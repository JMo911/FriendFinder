const friends = [
    {
        "name":"Ahmed",
        "photo":"https://static.vecteezy.com/system/resources/thumbnails/000/142/008/small/stylish-man-s-headshot-vector.jpg",
        "responses":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
    },
    {
        "name":"Jim",
        "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOOe11BGGbHXVFHSFctf0DYnVpbsq9zKB06s6esC-H6KKGXu4m",
        "responses":[
            3,
            2,
            3,
            4,
            2,
            1,
            4,
            3,
            4,
            2
          ]
    },
    {
        "name":"Jessica",
        "photo":"https://static.vecteezy.com/system/resources/previews/000/141/732/non_2x/headshot-of-smiling-older-lady-vector.jpg",
        "responses":[
            4,
            2,
            3,
            5,
            4,
            2,
            3,
            4,
            5,
            1
          ]
    }
];

module.exports = friends;

function findMatch(name) {
    let currentUser;
    friends.forEach(function(element){
        if (element.name === name){
            currentUser = element;
        }
    });
    let currentUserScores=[];
    currentUser.responses.forEach(function(element){
        currentUserScores.push(parseInt(element));
    });
    //   console.log(currentUserScores);
    //now compare current user scores to all other friends' scores



    //set least diff at max possible total diff
    let leastDiff=50;
    
     friends.forEach(function(element){
         

        if (element.name !== name) {
            let comparisonArray = element.responses;
            //for each comparison array i need to subtract current user responses to get a total difference
            let totalDiff = 0;
            for (let i = 0; i < currentUserScores.length; i++) {
                //abs val
                totalDiff= totalDiff + (Math.abs(currentUserScores[i]-comparisonArray[i]));
            }
            // console.log(element.name + totalDiff);
            if (totalDiff < leastDiff) {
                leastDiff = totalDiff;
            }


            //find least diff and return that user
        }

     })
     console.log(leastDiff);
     friends.forEach(function(element){
         if (element.name !== name){
             let comparisonArray = element.responses;
             let totalDiff = 0;
             for (let i = 0; i < currentUserScores.length; i++) {
                 totalDiff = totalDiff + (Math.abs(currentUserScores[i]-comparisonArray[i]));
             }
             if (leastDiff === totalDiff) {
                console.log(element.name);
            }
         }

     });
     
    

}

// findMatch("Jim");