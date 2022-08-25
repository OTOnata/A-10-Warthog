var timeblockDiv = document.getElementById('timeblock');


function createTimeBlocks() {
    for (let index = 9; index < 17; index++) {
        var timeDiv = document.createElement('div');
        var timeEl = document.createElement('h1');
        var noteArea = document.createElement('textarea');
        var saveBin = document.createElement ('button');

        timeDiv.className = "time-block";
        saveEl.className = "hour";
        saveBtn.className = "saveBtn";

        timeEl.className = "hour";

        timeEl.textContent = index + "AM/PM";

        saveBtn.textContent = "save";

        timeDiv.append(timeEl,  noteArea, saveBtn);
        
    }
};

createTimeBlocks();

//