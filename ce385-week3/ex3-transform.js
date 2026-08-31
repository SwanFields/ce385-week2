function getNames(students){
    return students.map(student => student.name);
}

function getPassedStudents(students){
    return students.filter(student => student.score >= 50);
}

function getTotalScore(students){
    return students.reduce((sum, student) => sum + student.score, 0);
}

function getAverageScore(students){
    if (students.length === 0) return 0;
    const sum = students.reduce((sumScore, student) => sumScore + student.score, 0);
    return + (sum / student.length).toFixed(2);
}

function countByGrade(students){
    return students.reduce((sumScore, student) => {
        let grade = "F";
        if (student.score >= 80) grade = "A";
        else if (student.score >= 75) grade = "B+"
        else if (student.score >= 70) grade = "B"
        else if (student.score >= 65) grade = "C+"
        else if (student.score >= 60) grade = "C"
        else if (student.score >= 55) grade = "D+"
        else if (student.score >= 50) grade = "D"      
        sumScore[grade] = (sumScore[grade] || 0) + 1;
        return sumScore
    }, {});
}

function getTopStudent(students){
    return students.reduce((top, student) =>{
        if (!top || student.score > top.score){
            return student;
        }
        return top;
    }, null);
}

function getCEPassesAverage(students){
    const cePassedScores = students
    .filter(student => student.major === "CE" && student.score >= 50)
    .map(student => student.score);

    if (cePassedScores.length === 0) return 0;

    return cePassedScores.reduce((sum, score) => sum + score, 0) / cePassedScores.length;
}

const emptyStudents = [];

console.log("1. getNames :", getNames(emptyStudents));
console.log("2. getPassedStudents :", getPassedStudents(emptyStudents));
console.log("3. getTotalScore :", getTotalScore(emptyStudents));
console.log("4. getAverageScore :", getAverageScore(emptyStudents));
console.log("5. countByGrade :", countByGrade(emptyStudents));
console.log("6. getTopStudent :", getTopStudent(emptyStudents));
console.log("7. getCEPassedAverage :", getCEPassesAverage(emptyStudents));