// Basic
function common_welcome(name){
    console.log(`Ola ${name}`);
};

// Default
function custom_welcome(name='customer'){
    if (name == 'customer'){
        console.log('BEM VINDO A SHEIN')
    }else{
        console.log(`Quanto tempo ${name} em que podemos ajudar?`)
    }
}

common_welcome('rafael')
custom_welcome()