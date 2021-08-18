// Web API
//DOM buttons call
const button1 = document.getElementById('Button1'),
button2 = document.getElementById('Button2'),
button3 = document.getElementById('Button3'),
button4 = document.getElementById('Button4'),
button5 = document.getElementById('Button5'),
button6 = document.getElementById('Button6'),
button7 = document.getElementById('Button7'),
button8 = document.getElementById('Button8'),
button9 = document.getElementById('Button9'),
button10 = document.getElementById('Button10'),
button11 = document.getElementById('Button11'),
button12 = document.getElementById('Button12'),
button13 = document.getElementById('Button13'),
button14 = document.getElementById('Button14'),
button15 = document.getElementById('Button15'),
button16 = document.getElementById('Button16');

const audioContext = new AudioContext();
/***************butones column one*********************/

//button 1
button1.addEventListener('click', button_1_function);
function button_1_function() {
    const Oscillator = audioContext.createOscillator(); //create Oscillator
    Oscillator.connect(audioContext.destination);
    Oscillator.type="sine";
    Oscillator.frequency.setValueAtTime(230,audioContext.currentTime); // add frequency
    Oscillator.start(audioContext.currentTime);
    Oscillator.stop(audioContext.currentTime + 0.1);
    
};
window.addEventListener('keydown',(e)=>{
    if (e.key == '1') {
        e.preventDefault();
        button_1_function();  
    }; 
});
//button 5
button5.addEventListener('click',button_5_function);
function button_5_function() {
    const Oscillator = audioContext.createOscillator(); //create Oscillator
    Oscillator.connect(audioContext.destination);
    Oscillator.type="sine";
    Oscillator.frequency.setValueAtTime(200,audioContext.currentTime);  // add frequency
    Oscillator.start(audioContext.currentTime);
    Oscillator.stop(audioContext.currentTime + 0.1);
};
window.addEventListener('keydown',(e)=>{
    if (e.key == 'q') {
        e.preventDefault();
        button_5_function();  
    };
});
// //button 9
button9.addEventListener('click',button_9_function);
function button_9_function() {
    const Oscillator = audioContext.createOscillator(); //create Oscillator
    Oscillator.connect(audioContext.destination);
    Oscillator.type="sine";
    Oscillator.frequency.setValueAtTime(150,audioContext.currentTime); // add frequency
    Oscillator.start(audioContext.currentTime);
    Oscillator.stop(audioContext.currentTime + 0.1);
};
window.addEventListener('keydown',(e)=>{
    if (e.key == 'a') {
        e.preventDefault();
        button_9_function();  
    }; 
});
//button 13 
button13.addEventListener('click',button_13_function);
function button_13_function() {
    const Oscillator = audioContext.createOscillator(); //create Oscillator
    Oscillator.connect(audioContext.destination);
    Oscillator.type="sine";
    Oscillator.frequency.setValueAtTime(100,audioContext.currentTime); // add frequency
    Oscillator.start(audioContext.currentTime);
    Oscillator.stop(audioContext.currentTime + 0.2);
};
window.addEventListener('keydown',(e)=>{
    if (e.key == 'z') {
        e.preventDefault();
        button_13_function();  
    };
});
// /*************** end butones column one*********************/

// /*************** butones column two*********************/
// //button 2
button2.addEventListener('click', button_2_function);
function button_2_function() {
    const Oscillator = audioContext.createOscillator(); 
    const filter = audioContext.createBiquadFilter();
    filter.type="lowpass";
    Oscillator.type="square";
    Oscillator.connect(filter);
    filter.connect(audioContext.destination)
    Oscillator.frequency.setValueAtTime(300.4,audioContext.currentTime); 
    Oscillator.start(audioContext.currentTime);
    Oscillator.stop(audioContext.currentTime + 0.2);
};
window.addEventListener('keydown',(e)=>{
    if (e.key == '2') {
        e.preventDefault();
        button_2_function();  
    }; 
});
// //button 6
button6.addEventListener('click', button_6_function);
function button_6_function() {
    const Oscillator = audioContext.createOscillator(); 
    const filter = audioContext.createBiquadFilter();
    filter.type="lowpass";
    Oscillator.type="square";
    Oscillator.connect(filter);
    filter.connect(audioContext.destination)
    Oscillator.frequency.setValueAtTime(220.4,audioContext.currentTime); 
    Oscillator.start(audioContext.currentTime);
    Oscillator.stop(audioContext.currentTime + 0.2);
};
window.addEventListener('keydown',(e)=>{
    if (e.key == 'w') {
        e.preventDefault();
        button_6_function();  
    }; 
});
// //button 10
button10.addEventListener('click', button_10_function);
function button_10_function() {
    const Oscillator = audioContext.createOscillator();  
    const filter = audioContext.createBiquadFilter();
    filter.type="lowpass";
    Oscillator.type="square";
    Oscillator.connect(filter);
    filter.connect(audioContext.destination)
    Oscillator.frequency.setValueAtTime(160.4,audioContext.currentTime); 
    Oscillator.start(audioContext.currentTime);
    Oscillator.stop(audioContext.currentTime + 0.2);
};
window.addEventListener('keydown',(e)=>{
    if (e.key == 's') {
        e.preventDefault();
        button_10_function();  
    }; 
}); 
// //button 14 
button14.addEventListener('click', button_14_function);
function button_14_function() {
    const Oscillator = audioContext.createOscillator(); 
    const filter = audioContext.createBiquadFilter();
    filter.type="lowpass";
    Oscillator.type="square";
    Oscillator.connect(filter);
    filter.connect(audioContext.destination)
    Oscillator.frequency.setValueAtTime(80.4,audioContext.currentTime); 
    Oscillator.start(audioContext.currentTime);
    Oscillator.stop(audioContext.currentTime + 0.2);
};
window.addEventListener('keydown',(e)=>{
    if (e.key == 'x') {
        e.preventDefault();
        button_14_function();  
    }; 
});
// /*************** and butones column two*********************/
// /*************** butones column three*********************/
// //button 3
button3.addEventListener('click', button_3_function);
function button_3_function() {
    const Oscillator = audioContext.createOscillator(); 
        Oscillator.connect(audioContext.destination);
        Oscillator.type="sawtooth";
        Oscillator.frequency.setValueAtTime(500,audioContext.currentTime);
        Oscillator.start(audioContext.currentTime);
        Oscillator.stop(audioContext.currentTime + 0.1);
}
window.addEventListener('keydown',(e)=>{
    if (e.key == '3') {
        e.preventDefault();
        button_3_function();  
    };
});
// //button 7
button7.addEventListener('click', button_7_function);
function button_7_function() {
    const Oscillator = audioContext.createOscillator(); 
        Oscillator.connect(audioContext.destination);
        Oscillator.type="sawtooth";
        Oscillator.frequency.setValueAtTime(450,audioContext.currentTime);
        Oscillator.start(audioContext.currentTime);
        Oscillator.stop(audioContext.currentTime + 0.1);
};
window.addEventListener('keydown',(e)=>{
    if (e.key == 'e') {
        e.preventDefault();
        button_7_function();  
    };
});
// //button 11
button11.addEventListener('click', button_11_function);
function button_11_function() {
    const Oscillator = audioContext.createOscillator(); 
        Oscillator.connect(audioContext.destination);
        Oscillator.type="sawtooth";
        Oscillator.frequency.setValueAtTime(350,audioContext.currentTime);
        Oscillator.start(audioContext.currentTime);
        Oscillator.stop(audioContext.currentTime + 0.1);
};
window.addEventListener('keydown',(e)=>{
    if (e.key == 'd') {
        e.preventDefault();
        button_11_function();  
    }; 
});
// //button 15 
button15.addEventListener('click', button_15_function);
function button_15_function() {
    const Oscillator = audioContext.createOscillator(); 
        Oscillator.connect(audioContext.destination);
        Oscillator.type="sawtooth";
        Oscillator.frequency.setValueAtTime(250,audioContext.currentTime);
        Oscillator.start(audioContext.currentTime);
        Oscillator.stop(audioContext.currentTime + 0.1);
};
window.addEventListener('keydown',(e)=>{
    if (e.key == 'c') {
        e.preventDefault();
        button_15_function();  
    };
});
// /*************** end butones column three*********************/

// /*************** end butones column four*********************/
button4.addEventListener('click', button_4_function);
function button_4_function() {
    const Oscillator = audioContext.createOscillator(); 
        Oscillator.connect(audioContext.destination);
        Oscillator.type="triangle";
        Oscillator.frequency.setValueAtTime(900,audioContext.currentTime); 
        Oscillator.start(audioContext.currentTime);
        Oscillator.stop(audioContext.currentTime + 0.1);
};
window.addEventListener('keydown',(e)=>{
    if (e.key == '4') {
        e.preventDefault();
        button_4_function();  
    }; 
});
// //button 8
button8.addEventListener('click', button_8_function);
function button_8_function() {
    const Oscillator = audioContext.createOscillator(); 
        Oscillator.connect(audioContext.destination);
        Oscillator.type="triangle";
        Oscillator.frequency.setValueAtTime(700,audioContext.currentTime); 
        Oscillator.start(audioContext.currentTime);
        Oscillator.stop(audioContext.currentTime + 0.1);
};
window.addEventListener('keydown',(e)=>{
    if (e.key == 'r') {
        e.preventDefault();
        button_8_function();  
    }; 
});
// //button 12
button12.addEventListener('click', button_12_function);
function button_12_function() {
    const Oscillator = audioContext.createOscillator(); 
        Oscillator.connect(audioContext.destination);
        Oscillator.type="triangle";
        Oscillator.frequency.setValueAtTime(500,audioContext.currentTime); 
        Oscillator.start(audioContext.currentTime);
        Oscillator.stop(audioContext.currentTime + 0.1);
}
window.addEventListener('keydown',(e)=>{
    if (e.key == 'f') {
        e.preventDefault();
        button_12_function();  
    }; 
});
// //button 16 
button16.addEventListener('click', button_16_function);
function button_16_function() {
    const Oscillator = audioContext.createOscillator(); 
    Oscillator.connect(audioContext.destination);
    Oscillator.type="triangle";
    Oscillator.frequency.setValueAtTime(300,audioContext.currentTime); 
    Oscillator.start(audioContext.currentTime);
    Oscillator.stop(audioContext.currentTime + 0.1);
};
window.addEventListener('keydown',(e)=>{
    if (e.key == 'v') {
        e.preventDefault();
        button_16_function();  
    }; 
});
// /*************** end butones column four*********************/