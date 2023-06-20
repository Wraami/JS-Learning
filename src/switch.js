function caseinswitch(val) {
var answer = "";

switch(val){

    case 1:
        answer = "alpha"
        break;
        case 2:
            answer = "beta"
            break;
            case 3:
                answer = "gamma"
                break;
                case 4:
                    answer = "delta"
                    break;
                    default: answer ="sigma"
                    break;
}
return answer;
} 

console.log(caseinswitch(500));

/*
write a switch statement which tests val and sets answer for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"
*/