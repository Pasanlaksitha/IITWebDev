const nodes = document.querySelectorAll('.node');

nodes.forEach(node => {
    node.addEventListener('mouseover', () => {
        node.style.fill = '#2E8B57';
    });

    node.addEventListener('mouseout', () => {
        node.style.fill = '#4CAF50';
    });
});