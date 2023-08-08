interface Reportable {
   
    summary(): string;
};


const oldCivic = {
    name: "civic",
    year: new Date(), 
    broken: true, 
    summary(): string {
        return `Civic year ${this.year} and old ${this.broken?'yes': 'no'}`
    }
};


function printSummary(item: Reportable ): void {    
    console.log(item.summary());
}


printSummary(oldCivic);