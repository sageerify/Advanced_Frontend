function returnMap(){
    let items =['item1', 'item2', 'item3', 'item4', 'item5', 'item5'];
    return function(){
        return items.filter(item => item ==='item5');

    }
}
let map = returnMap();
console.log(map());