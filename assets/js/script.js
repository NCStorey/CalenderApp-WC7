let timeBlockCont = $('#timeBlockCont')
let currentTime = moment().format("dddd, Do MMMM YYYY");
let currentTimeP = $('#currentDay')

console.log(currentTime)
currentTimeP.text(currentTime)

for (let i = 8; i <= 17; i++){
    let Hourbar = $('<span>');
    Hourbar.text('hourbar' + [i])
    Hourbar.attr('data-marker', [i])
    Hourbar.addClass('class', 'time-block')
    timeBlockCont.append(Hourbar)
}