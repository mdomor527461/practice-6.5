var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom","abubakarsiddique"];
let name = "";
for(let i = 0;i<friends.length;i++){
    let element = friends[i];
    
    if(friends[i].length > name.length){
        name = friends[i];
    }
}
console.log(name)