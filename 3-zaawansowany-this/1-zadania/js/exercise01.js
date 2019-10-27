{
    const ob = {
        time : 1000,
        pets : ["pies", "kot", "świnka"],
        print : function() {
            setTimeout(function() {
                console.log(this.pets);
            }.bind(this), this.time);

            //lub
            // setTimeout(() => {
            //     console.log(this.pets);
            // }, this.time);
        }
    }

    ob.print();
}