const calculatetemp=()=>{
    const numbertemp=document.getElementById('temp').value;

    const tempSelected=document.getElementById('temp_diff');
    const valuetemp=temp_diff.options[tempSelected.selectedIndex].value;


    const celTofah=(cel)=>{
        let farenheit=Math.round((cel*9/5)+32);
        return farenheit;
    }
    const fahTocel=(fah)=>{
        let celsius=Math.round((fah-32)*5/9);
        return celsius; 
    }

    let result;
    if(valuetemp=='cel'){
        result=celTofah(numbertemp);
        document.getElementById('resultContainer').innerHTML=`=${result}Farenheit`;
    }
    else{
        result=fahTocel(numbertemp);
        document.getElementById('resultContainer').innerHTML=`=${result}Celsius`;
    }
}