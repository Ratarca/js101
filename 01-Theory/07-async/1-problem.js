// The problem

function random_time(min, max){
    return Math.floor(Math.random()* (max-min) +min);
};


function emule_collect_data(server, time){
    setTimeout(() => {console.log(`Get data on : ${server}`)}, time); 
}


emule_collect_data('server 1', random_time(1000, 3000));
emule_collect_data('server 2', random_time(1000, 3000));
emule_collect_data('server 3', random_time(1000, 3000));
emule_collect_data('server 4', random_time(1000, 3000));
emule_collect_data('server 5', random_time(1000, 3000));

console.log("Build pipeline")

//



