const list = [
    { name: 'Edmar', vip: true},
    { name: 'Edmar', vip: false},
    { name: 'Edmar', vip: true},
    { name: 'Edmar', vip: false},
    { name: 'Edmar', vip: true},
]

const newList = list.map ( user => {
    const newUser = {
        name: user.name,
        braceletColor: user.vip ? 'black' : 'green'
    }

    return newUser
})

console.log(newList)

const students = [
    { name: 'Edmar', testGrade: 7},
    { name: 'Edmar', testGrade: 5},
    { name: 'Edmar', testGrade: 8},
    { name: 'Edmar', testGrade: 2},
]

const newStudents = students.map( student => {
    return {
        name: student.name,
        promoted: student.testGrade >= 5 ? 'Promovido' : 'Reprovado'
    }
})

console.log(newStudents)
    
