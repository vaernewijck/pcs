
const getData = () => {
    const riders = [];
    const nodes = Array.from(document.querySelectorAll('tr'))

    nodes.forEach(node => {
        riders.push({
            name: node.childNodes[3].innerText,
            points: node.childNodes[5].innerText
        })
    });

    console.log(riders);
}

getData();