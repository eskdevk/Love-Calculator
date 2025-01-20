
function calculateLove(){
    var name1 = document.getElementById("name1").value.trim();
    const first = name1.slice(0,1).toUpperCase() + name1.slice(1,name1.length);
    var name2 = document.getElementById("name2").value.trim();
    const second = name2.slice(0,1).toUpperCase() + name2.slice(1,name2.length);

    if(name1==="" || name2===""){
        alert("Please enter both names.");
    }else{
        const lovePercentage =Math.floor(Math.random()*101);

        const result = document.getElementById("result");

        result.innerHTML = `${first} and ${second} 's Love Percentage: ${lovePercentage}`;

        if(lovePercentage<30){
            result.innerHTML +="<br /> Not a Great Match. Keep Looking!";
        }else if(lovePercentage>=30 && lovePercentage<70){
            result.innerHTML +="<br /> There is a potential. Give it a try!";
        }
        else{
            result.innerHTML +="<br /> Great Match! Love in the Air!";
        }
    }
}