// Write your solution in this file!

const employee ={}

function updateEmployeeWithKeyAndValue(object, key, value) {
    const updatedOBject ={...object, [key]: value};
    return updatedOBject;
}

updateEmployeeWithKeyAndValue(employee, "name", "Sam")
updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway")

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    object[key]=value;
    return object;
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway")

function deleteFromEmployeeByKey(object, key) {
    const newEmployee = {...object};
    delete newEmployee[key];
    return newEmployee;
}

deleteFromEmployeeByKey (employee, "name")

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];
    return object;
}

destructivelyDeleteFromEmployeeByKey(employee, "name")