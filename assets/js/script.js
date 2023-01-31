let timeBlockCont = $('#timeBlockCont')
let currentTime = moment().format("dddd, Do MMMM YYYY");
let currentTimeP = $('#currentDay')

let blockNumArr = []
let eventTextArr = []

currentTimeP.html(currentTime);


for (let i = 8; i <= 17; i++){

    let hourBar = $('<div>');
    hourBar.addClass('row');
    timeBlockCont.append(hourBar);

    let hourTab = $('<div>');
    hourTab.text([i] + ':00');
    hourTab.addClass('col-1 hour');
    hourBar.append(hourTab);

    let hourBlock = $('<textarea>');
    hourBlock.attr('id', [i]);
    hourBlock.addClass('col-10 time-block');
    hourBar.append(hourBlock)

    let saveBlock = $('<span>');
    saveBlock.addClass('col-1 saveBtn');
    saveBlock.attr('id', [i])
    saveBlock.text('save')
    hourBar.append(saveBlock);

    let currentHour = moment().format("H")
    
    function colorBlocks(){
    if (currentHour == i){
        hourBlock.addClass('present')
    } 
    if (currentHour < i) {
        hourBlock.addClass('future')
    } else {hourBlock.addClass('past')
        
    }}

    colorBlocks()
    
    setInterval(colorBlocks, 60000)
}

//retrieved stored events and put them into the blocks

for (let i = 0; i<localStorage.length;i++){
    //pushes any stored block numbers to blocknumber array
    blockNumArr.push(localStorage.key(i))
    // console.log(blockNumArr)

    let storedBlockNum = blockNumArr[i]

    //storedBlocknum = key to local storage
    let storedText = localStorage.getItem(storedBlockNum)

    let receivingBlock = $('#' + storedBlockNum)
    
    receivingBlock[0].textContent = storedText

}

$('span').click(function(event){

    let target = event.target;
    let blockNum = target.getAttribute('id')
    let targetBlock = target.previousElementSibling
    let eventText = targetBlock.value
    // let storedBlockNum = localStorage.getItem(blockNum)

    localStorage.setItem(blockNum, eventText);
})

$('#clearBtn').click(function(event){

    localStorage.clear();
    location.reload()
    return;
})
