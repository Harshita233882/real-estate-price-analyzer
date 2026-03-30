const ctx= document.getElementById('plotChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Golden City','Vrindavan Colony'],
        datasets: [{
            label: 'plots Sold',
            data :[80,40],
            backgroundcolor: ['gold','green']
        }]
    }
});
