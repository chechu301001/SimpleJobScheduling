const schedule = require('node-schedule');

const someDate = new Date('2022-02-08T18:36:00')
schedule.scheduleJob(someDate, ()=>{
    console.log('Job ran at ', new Date().toString());
})

//CRON EXPRESSIONS
schedule.scheduleJob('m-job','*/4 * * * * *', ()=>{
    console.log('I ran...');
    schedule.cancelJob('m-job');
})