Components.utils["import"]("resource://gre/modules/FileUtils.jsm",this);        

    function addQuote() 
    {
        var data = document.getElementById("quote").value; 
        var file = FileUtils.getFile('../', ['quotes.txt']);
        writeFile(logFile, data, function (status) {
            if (!Components.isSuccessCode(status)) {
                Services.wm.getMostRecentWindow(null).alert('writeFile failed');
            } else {
                Services.wm.getMostRecentWindow(null).alert('writeFile SUCCESFUL');
            }
        });        
    }            
        