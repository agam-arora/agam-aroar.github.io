const color =['red','blue','green','yellow','orange','black','aqua','silver','gold'];
function generate()
{
    return color[ Math.floor(Math.random() * 10)];
}

function generateRandom()
{
    document.body.style.backgroundColor=generate();
}