// retrieval of variable from HTML
let timeBlockCont = $('#timeBlockCont')

//use of moment to store current time into a variable
let currentTime = moment().format("dddd, Do MMMM YYYY");
let currentTimeP = $('#currentDay')

//empty arrays for storage of events
let blockNumArr = []
let eventTextArr = []

//display of current time on window
currentTimeP.html(currentTime);

//for loop to create the time blocks - starts from 8 in reference to 8am
for (let i = 8; i <= 17; i++){

    //use of bootstrap classes for the layout - this creates the row to store the content
    let hourBar = $('<div>');
    hourBar.addClass('row');
    timeBlockCont.append(hourBar);

    //creation of hour label one the far left side of the hour block - contained in the row
    let hourTab = $('<div>');
    hourTab.text([i] + ':00');
    hourTab.addClass('col-1 hour');
    hourBar.append(hourTab);

    //creation of the block for the user to type their event information in - text area element used - appended to row
    let hourBlock = $('<textarea>');
    hourBlock.attr('id', [i]);
    hourBlock.addClass('col-10 time-block');
    hourBar.append(hourBlock)

    //creation of save block - far right - to allow user to save the event entered into local storage
    let saveBlock = $('<span>');
    saveBlock.addClass('col-1 saveBtn');
    saveBlock.attr('id', [i])
    saveBlock.text('save')
    hourBar.append(saveBlock);

    //variable to store the current hour - this allows colour coding of hours
    let currentHour = moment().format("H")
    
    //function for the coloring of blocks using the if statements and hour variable
    function colorBlocks(){
    if (currentHour == i){
        hourBlock.addClass('present')
    } 
    if (currentHour < i) {
        hourBlock.addClass('future')
    } else {hourBlock.addClass('past')
        
    }}

    colorBlocks()
    
    //this interval runs every minute to update the colour of the blocks
    setInterval(colorBlocks, 60000)
}


//retrieved stored events and put them into the blocksthat were just made above

//for loop to run on all items in local storage = saved events
for (let i = 0; i<localStorage.length;i++){
    
    //blocknumbers and events are key pairs in the local storage - this will retrieve the first one
    blockNumArr.push(localStorage.key(i))

    //this variable stores the key which translates into the block number
    let storedBlockNum = blockNumArr[i]

    //then I use the key to retrieve the event text from local storage
    let storedText = localStorage.getItem(storedBlockNum)

    //now I need to select the block the the event text will be going back into - this is done using the id assigned at the block creation which is the same as the key in local storage
    let receivingBlock = $('#' + storedBlockNum)
    
    //this now combines the above variable to puts our stored text into the recieving block
    receivingBlock[0].textContent = storedText
}


//event listener on the save div to enter the information into local storage
$('span').click(function(event){

    //stores where the user clicks into a variable
    let target = event.target;

    //retrieves the id of the clicked save div which is the same as the sibling event block 
    let blockNum = target.getAttribute('id')

    //these variable store the text entered into a variable
    let targetBlock = target.previousElementSibling
    let eventText = targetBlock.value

    //stores both the id as the key and the text into local storage
    localStorage.setItem(blockNum, eventText);
})

//added in to allow the user to clear the calender at the start of a new day
$('#clearBtn').click(function(event){

    localStorage.clear();
    location.reload()
    return;
})
