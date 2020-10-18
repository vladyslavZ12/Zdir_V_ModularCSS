(()=>{



    fetch('./data/classData.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        handleDataSet(data);
    })
    .catch((err) => {
        console.log(err);
    })


    function handleDataSet(data){

        for (let user in data){
            
        let profPanelText = document.querySelector(".profPanelText"),
            profPanelTextChild = profPanelText.children;
    
        profPanelTextChild[0].textContent = classData.coursename + classData.coursecode;
        profPanelTextChild[1].textContent = classData.profname;
        profPanelTextChild[2].innerHTML = classData.classtime;

        }
    }





})();