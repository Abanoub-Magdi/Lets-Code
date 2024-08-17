

console.log("Promises");


var ThePromise = new Promise((resolve,reject)=>{

    const sucess = true;
    // const sucess = false;


    setTimeout(()=>{
if(sucess)
{
    resolve( LoopForDelay());

}else

reject("promise Failed and has been passed to 'catch parameter'");

    },3000 );

});

 

// #region **************** function used if sucess value is true ********************** 
function LoopForDelay(){

    for (let x =0 ; x < 3000 ; x++)
    {
        console.log("Featch User Data First After 3 sec")
    } 
}
// #endregion **************** end ********************** 


ThePromise
.then(
    ()=>{
        // console.log("first promise sucess From Calling Then");
    
        console.log("\n \n first promise sucess From 'Then'\n \n");
       
        function loopingPrintHello(){

            for (let x =0 ; x < 7000 ; x++)
            {
                console.log("then. => Success ")
            }
        }
        loopingPrintHello();
    
    }
)
.catch(
    (TheError)=>{
        console.log("\n \n \n first promise Faild  From Calling catch The Error: => " + TheError);
    }
)


// #region ************ async and await ***************
async function GetUserData()
{
    try
    {
        // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        
        const data =await ThePromise;
        console.log("\n \n \n User data fetched successfully:", data)
    }

    catch (error)
    {
        console.log("Error ** ** **: => " + error);
    }
}
GetUserData();

// #endregion
