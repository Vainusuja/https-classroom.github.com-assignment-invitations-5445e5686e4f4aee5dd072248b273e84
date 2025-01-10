const fs = require('fs');

// Helper to read and parse JSON
const getStudents = () => {
    const data = fs.readFileSync('./Student.json', 'utf8');
    return JSON.parse(data);
};

// Helper to save data to JSON
const saveStudents = (students) => {
    fs.writeFileSync('./Student.json', JSON.stringify(students, null, 2), 'utf8');
    console.log('Operation successful!');
};

// Create
const createStudent = (student) => {
    const students = getStudents();
    students.push(student);
    saveStudents(students);
};

// Read
const readStudents = () => {
    const students = getStudents();
    console.log('Students:', students);
};

// Update
const updateStudent = (id, updatedData) => {
    const students = getStudents();
    const student = students.find(s => s.id === id);
    if (student) {
        Object.assign(student, updatedData);
        saveStudents(students);
    } else {
        console.log('Student not found!');
    }
};

// Delete
const deleteStudent = (id) => {
    const students = getStudents();
    const filteredStudents = students.filter(s => s.id !== id);
    if (filteredStudents.length !== students.length) {
        saveStudents(filteredStudents);
    } else {
        console.log('Student not found!');
    }
};

// Example Usage
createStudent({ id: 5, name: 'John', age: 20, "roll no": 35 });
readStudents();
updateStudent(3, { name: 'Subhiksha', age: 20 });
deleteStudent(4);
