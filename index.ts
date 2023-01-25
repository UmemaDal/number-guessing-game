import inquirer from "inquirer";
type ansType ={
    userguess: number
}
const systemGeneratedNo = Math.floor (Math.random() * 10);

const answers:ansType=await inquirer.prompt([
    {
        type:"number",
        name:"userguess",
        message:"write your guess b/w 1 to 10:"
    }
])

const{userguess}= answers;
console.log(userguess,"userguess",systemGeneratedNo,'SYs')

if(userguess === systemGeneratedNo){
    console.log("yayyyyy you are correct\n you win!!! ")
} else{
    console.log("oh nooo try again better luck next time!!!!")

}



