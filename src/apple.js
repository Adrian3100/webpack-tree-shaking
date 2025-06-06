export function berry(){
    console.log('berry')
}

export function berryPlusOne() {
    let fruits = ['apples', 'oranges', 'blueberries', 'bananas'];
    let randomIndex = Math.floor(Math.random() * 4);

    console.log(`berry + ${fruits[randomIndex]}`);
}

// Function C
export function myName(name) {
    console.log(`Hello, my name is ${name}`);
}