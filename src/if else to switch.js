function chaintoswitch(val) {
    var answer = "";



switch (val){

    case "Bob":
        answer = "Marley";
        break;
        case 42:
            answer = "the answer";
            break;
            case 1:
                answer = "there is no #1"
                break;
                case 99:
                    answer = "missed me by this much!";
                    case 7:
                        answer = "ate nine"

                        default: answer = "nuh uh"
                        break;
}
return answer;
}
console.log(chaintoswitch(43));






/*
if (val ==="Bob") {
    answer = "Marley";
}
else if (val === 42) {
    answer = "the answer";
} 
else if (val === 1) {
    answer = "there is no #1";
}
else if (val === 99) {
    answer = "missed me by this much!";
}
else if (val === 7 ) {
    answer = "ate nine";
}
return answer;
*/