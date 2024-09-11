const fs = require('fs');
const {program} = require('commander');

program
  .name('counter')
  .description('CLI to count no. of lines in js')
  .version('0.8.0');
program.command('count')
        .description('count the no. of lines in a file')
        .argument('<string>','take input file path')
        .action((file)=>{
          fs.readFile(file,'utf8',(err,data)=>{
            if(err){
              console.log("error")
              // console.log(err)
            }
            else{
              const line = data.split('\n');
              const lineLength = line.length;
              console.log(`total lines is ${lineLength} of ${file}`)
            }
          })
        })
        program.parse();