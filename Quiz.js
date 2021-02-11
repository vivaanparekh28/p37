class Quiz{
constructor(){

}
UpdateState(s){
var dbref=database.ref("/")
dbref.update({
    gameState:s 
    });
}
getState(){
    var dbref=database.ref("gameState")
     dbref.on("value",function (r){
 gameState=r.val()
     })
 
 }
 async start(){
     if (gameState===0){
         contestant=new Contestant()
         var contestantCountRef=await database.ref('contestantCount').once("value")
         if (contestantCountRef.exists()){
            contestantCount=contestantCountRef.val()
            contestant.getPlayerCount()
         }
         question=new Question()
         question.display()
     }
 }
 play(){

    

    Contestant.getPlayersInfo()

    if(allplayers!=undefined){

       

}
} 
}
