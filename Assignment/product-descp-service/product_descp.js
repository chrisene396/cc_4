module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);


    //To DO: add the pattern functions and describe the logic inside the function

    function productURL(id, respond){
        for (const element in mockData){
            if(element.product_id == id){
                respond(null, { result : element.product_url})
            }
        }
    }



    function productName(id, respond){
        for (const element in mockData){
            if(element.product_id == id){
                respond(null, { result : element.product_name})
            }
        }
    }

}