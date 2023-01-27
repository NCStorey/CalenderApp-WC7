let timeBlockCont = $('#timeBlockCont')
let currentTime = moment().format("dddd, Do MMMM YYYY");
let currentTimeP = $('#currentDay')


console.log(currentTime)
currentTimeP.text(currentTime)

for (let i = 8; i <= 17; i++){

    let hourBar = $('<span>');
    hourBar.attr('data-marker', [i]);
    hourBar.addClass('row');
    timeBlockCont.append(hourBar);

    let hourTab = $('<span>');
    hourTab.text([i] + ':00');
    hourTab.addClass('col-1 hour');
    hourBar.append(hourTab);

    let hourBlock = $('<span>');
    hourBlock.text('hourbar' + [i]);
    hourBlock.addClass('col-10 time-block');
    hourBar.append(hourBlock)

    let saveBlock = $('<span>');
    saveBlock.addClass('col-1 saveBtn');
    saveBlock.text('save')
    hourBar.append(saveBlock);

}

