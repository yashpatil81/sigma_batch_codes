const student = {
    name: 'shradha',
    age: 23,
    eng:95,
    math:93,
    phy:97,
    getAvg() {
        let avg = (eng+math+phy)/3
        console.log(avg);
        
    }
}

console.log(student.getAvg());
