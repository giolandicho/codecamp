//Global Event Listener
window.addEventListener('load', () => {
    //Global Variables
    const tabs = document.querySelectorAll('.tab');
    //Event Listeners
    for(let i=0; i<tabs.length; i++){
        tabs[i].addEventListener('mouseover', function(){
            tabs[i].style.boxShadow = '15px 15px 15px 15px gray';
        });
        tabs[i].addEventListener('mouseout', function(){
            tabs[i].style.boxShadow ='0px 0px 0px 0px';
        });
    }
    tabs.forEach(button => {
        button.addEventListener('click', ()=>{
            const tabContainer = button.parentElement;
            const contentContainer = tabContainer.parentElement;
            const tabId = button.dataset.forTab;
            const activeTab = contentContainer.querySelector(`.tab-content[data-tab="${tabId}"]`);
            contentContainer.querySelectorAll('.tab-content').forEach(tab =>{
                tab.classList.remove('active-tab');
                console.log('done');
            })
            activeTab.classList.add('active-tab');
        })
    })
})