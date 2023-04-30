/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array) {
    let createEmployeeRecord = {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
    }
    return createEmployeeRecord;
  }
  
  function createEmployeeRecords(array) {
    return array.map(createEmployeeRecord);
  }
  
  function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split (' ');
    const timeInEvent = {
        type: 'TimeIn',
        hour: parseInt(hour),
        date: date,
    };
    this.timeInEvents.push(timeInEvent);
    return this;
  }
  
  function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    const timeOutEvent = {
      type: 'TimeOut',
      hour: parseInt(hour),
      date: date,
    };
    this.timeOutEvents.push(timeOutEvent);
    return this;
  }
  
  function hoursWorkedOnDate(date) {
   const timeInEvent = this.timeInEvents.find(obj => obj.date ===date);
   const timeOutEvent = this.timeOutEvents.find(obj => obj.date === date);
   const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
   return hoursWorked; 
  }
  
  function wagesEarnedOnDate(date) {
    const payPerHour = this.payPerHour
    return hoursWorkedOnDate.call(this, date) * payPerHour;
  }
  
  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
  }
  
  function calculatePayroll(array) {
    let payrollSum = 0
    array.forEach((employee) => {
        payrollSum += allWagesFor.call(employee);
    })
    return payrollSum;
  }
  
