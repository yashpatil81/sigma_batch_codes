const student = {
    name: 'shradha',
    age: 23,
    eng:95,
    math:93,
    phy:97,
    getAvg() {
        console.log(this);
        
        let avg = (this.eng+this.math+this.phy)/3
        console.log(`${this.name} got avg marks = ${avg}`);
        
    }
}
// window is the highest object
function getAvg() {
    console.log(this);
  
}

