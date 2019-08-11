var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var ideaInput = "";

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function getIdeaInput(){
    return readline.question(`What's your idea? `, (myIdea) => {
        //ideaInput = myIdea;
        readline.close();
        console.log("Your idea is: " + myIdea);
        return myIdea;
    });
}


MongoClient.connect(url, async function(err, db) {
  if (err) throw err;
  var dbo = db.db("ideas_list_db");
  console.log("await getIdeaInput: " + await getIdeaInput());
  var myobj = { idea: await getIdeaInput()};
  dbo.collection("new_collection").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});