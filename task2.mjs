import chalk from 'chalk' 
const text = "Hello, there!";  
const first = chalk.blue.bold(text);  
console.log(first);  
let age=-12;  
if(age>0){ console.log(`Your age is ${chalk.green.bold(String(age))}`)  }  
else{  
let err="Age cannot be Negative";  
let err_msg="Invalid Age!";  
console.log(chalk.green(err)+'\n'+chalk.red.bold(err_msg));  
}
