let timeBlockCont = $('#timeBlockCont')
let currentTime = moment().format("dddd, Do MMMM YYYY");
let currentTimeP = $('#currentDay')


currentTimeP.html(currentTime);


for (let i = 8; i <= 17; i++){

    let hourBar = $('<div>');
    hourBar.addClass('row');
    timeBlockCont.append(hourBar);

    let hourTab = $('<div>');
    hourTab.text([i] + ':00');
    hourTab.addClass('col-1 hour');
    hourBar.append(hourTab);

    let hourBlock = $('<input>');
    hourBlock.attr('data-markerBlock', [i]);
    hourBlock.text('hourbar' + [i]);
    hourBlock.addClass('col-10 time-block');
    hourBar.append(hourBlock)

    let saveBlock = $('<span>');
    saveBlock.addClass('col-1 saveBtn');
    saveBlock.attr('data-markerBtn', [i])
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
        
    }

    console.log("update")}

    colorBlocks()
    
    setInterval(colorBlocks, 60000)
}


$('span').click(function(){
console.log('click')



})