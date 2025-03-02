function returnMap(){
    let items =['ali', 'hasan', 'khan', 'noman', 'noman'
    ]
    return function(){
        return items.filter(item => item ==='noman');

    }

    
}
let map = returnMap();
console.log(map());