let priceChart;
function analyzeprice(){
    let prices=[45,80,120,70];
    let cities=["Patna","Delhi","Mumbai","pune"]
    let total=0;
    for(let i=0;i<prices.length;i++){
        total +=prices[i];
    }
    let average=total/prices.length;
    let max=Math.max(...prices);
    let min=Math.min(...prices);

    document.getElementById("result").innerHTML=
    "Average Price: " +average+"Lakhs <br>"+
    "Highest Price: " +max+"Lakhs <br>" +
    "Lowest Price: " +min+"Lakhs ";

    let ctx=
    document.getElementById("priceChart").getContext("2d");
    priceChart= new Chart(ctx,{
        type:"bar",
        data:{
            labels: cities,
            datasets:[{
                label:"property Prices(Lakhs)",
                data:prices,
                backgroundColor:[
                    "red",
                    "blue",
                    "green",
                    "orange"
                ]
            }]
        }
    });
}

function searchCity(){
    let cities=["patna","Delhi","Mumbai","Pune"];
    let prices=[45,80,120,70];
    let bedrooms=[3,4,3,2];

    let inputCity=
    document.getElementById("cityInput").value;

    let result="City not found";

    for(let i=0;i<cities.length;i++){
        if(cities[i].toLowerCase()===
        inputCity.toLowerCase()){
            result=
            "City: "+cities[i]+"<br>"+
            "price:" +prices[i]+"Lakhs<br>"+
            "Bedrooms: "+ bedrooms[i];

            if(priceChart){

            priceChart.data.datasets[0].backgroundColor=
               ["lightgary","lightgray","lightgray","lightgray"];
            priceChart.data.datasets[0].backgroundColor[i]=
            "red";
            priceChart.update();
       }
    }
}
    document.getElementById("searchResult").innerHTML
    =result;
}