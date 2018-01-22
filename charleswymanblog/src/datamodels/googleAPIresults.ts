export class googleAPIresults {

    constructor(public results : any[]){

    }

    removeItem(results){

        for(var i = 0; i < this.results.length; i++) {
            if(this.results[i] == results){
                this.results.splice(i, 1);
            }
        }

    }
}