const button = {
    addEventOnBtn : (btn, btnEvent, btnText)=>{
        btn.addEventListener(btnEvent, ()=>{
            btn.textContent=btnText;
            console.log("hello",btnEvent);
        })
    }
}

export default button;