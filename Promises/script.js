console.log("welcom");


var Firstpromise = new Promise((resolve,reject)=>{

    const sucess = true;
    // const sucess = false;


    setTimeout(()=>{
if(sucess)
{
    resolve( ForDelay() + "  pending");

}else

reject("promise Faild incide the function");

    },3000 );

});
 

function ForDelay(){

    for (let x =0 ; x < 3000 ; x++)
    {
        console.log("Featch User Data First After 3 sec")
    }
    console.log("Data featched")
    // alert("Data featched")
}




Firstpromise
.then(
    (DatafeatchedSuccessfully)=>{
        // console.log("first promise sucess From Calling Then");
    
        console.log("first promise sucess From Calling Then =>    "+ DatafeatchedSuccessfully);
       
        function loopingPrintHello(){

            for (let x =0 ; x < 10000 ; x++)
            {
                console.log("then. => Success ")
            }
        }
        loopingPrintHello();
    
    }
)
.catch(
    (TheError)=>{
        console.log("first promise Faild  From Calling catch The Error: =>      " + TheError);
    }
)




