function SuperElement(type, content){
    this.el = document.createElement(type);
    this.el.innerText = content;
    document.body.append(this.el);
    this.el.addEventListener('click', ()=>{
        console.log(this.el)
    })
}

// const h1 = new SuperElement('h1', 'Namaste');


const array = ['a', 'b', 'c']

const myElements = array.map(items=>{
    return new SuperElement('p', item)
})

// This will return <p>a</p> <p>b</p> <p>c</p>

