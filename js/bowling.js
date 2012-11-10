var bowling = {
    getScore: function(scoreString){
        if (scoreString.length < 11) return -1;
        if (scoreString.length > 21) return -1;
        if (!scoreString.match(/^([1-9]|X|\/|-)*$/)) return -1;
        var score = 0;
        var scorePlus = 0;
        var frame = 1;
        var multi = 1;
        for (i = 0; i<scoreString.length; i++){
            if (frame > 10) return -1;
            var f1 = scoreString[i];
            var frameScore = 0;
            if (f1 == 'X'){
                frameScore = 10;
                if (scorePlus > 0){
                    frameScore = frameScore+(10*multi);
                    multi = 1;
                    scorePlus = scorePlus-1;
                }
                if (scorePlus > 0){
                    multi = 2;
                }
                scorePlus = 2;
                score = score + frameScore;
                if (frame==10){
                    var p1 = scoreString[i+1];
                    i++;
                    if (p1 == 'X'){
                        p1score = 10;
                    } else if (p1.match(/^[1-9]$/)||(p1 == '-')){
                        p1score = parseInt(p1)||0;
                    }
                    score = score + p1score;
                    if (scorePlus > 0){
                        score = score+p1score;
                        multi = 1;
                        scorePlus = scorePlus-1;
                    }

                    var p2 = scoreString[i+1];
                    i++;
                    if (p1 =='X' && p2 == 'X'){
                        p2score = 10;
                    } else if (p1 !='X' && p2 == '/'){
                        p2score = 10-p1score;
                    } else if (p2.match(/^[1-9]$/)){
                        p2score = parseInt(p2);
                    } else if (p2 == '-'){
                    } else {
                        return -1;
                    }
                    score = score + p2score;
                    if (scoreString.length > (i+1)) return -1;
                }
                frame = frame + 1;
            } else if (f1.match(/^[1-9]$/) || (f1 == '-')){
                frameScore = parseInt(f1)||0;
                if (scorePlus){
                    score = score + (frameScore*multi);
                    multi = 1;
                    scorePlus = scorePlus-1;
                }
                var f2 = scoreString[i+1];
                i++;
                if (f2.match(/^[1-9]$/) || (f2=='-')|| (f2=='/')){
                    f2Score = parseInt(f2)||0;
                    if (f2 == '/'){
                        f2Score = 10 - frameScore;
                        if (scorePlus){
                            score = score + (f2Score*multi);
                            multi = 1;
                            scorePlus = scorePlus-1;
                        }
                        scorePlus = 1;
                    } else if (f2 == '-'){
                        if (scorePlus){
                            scorePlus = scorePlus-1;
                        }
                    } else if (f2.match(/^[1-9]$/)){
                        f2Score = parseInt(f2);
                        if ((f2Score + frameScore)>9){
                            return -1;
                        }
                        if (scorePlus){
                            score = score + (f2Score*multi);
                            multi = 1;
                            scorePlus = scorePlus-1;
                        }
                    }
                } else {
                    return -1;
                }
                score = score + frameScore + f2Score;
                if (frame==10){
                    if (scorePlus){
                        var p1 = scoreString[i+1];
                        i++;
                        if (p1 == 'X'){
                            score = score + 10;
                        } else if (p1.match(/^[1-9]$/)||(p1 == '-')){
                            score = score + parseInt(p1)||0;
                        } else {
                            return -1;
                        }
                    } else {
                        if (scoreString.length > (i+1)) return -1;
                    }
                }
                frame = frame + 1;
            } else {
                return -1;
            }
        }
        if (frame != 11) return -1;
        return score;
    }
}