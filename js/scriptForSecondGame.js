function isWordTrue() {
    jQuery(document).ready(function () {
                jQuery('.materialboxed').materialbox();
            }) ;
            
            var arrayTrueWords = [ "игрушки", "детсво", "посудка", "чаепитие"]; //array words
			var inputedWord = document.getElementById("input-word").value;
	
            
            console.log(inputedWord);

			for (var iterate = 0; iterate < arrayTrueWords.length; iterate++) {
					if ( arrayTrueWords[iterate] == inputedWord) {
                            console.log("Слова совпадают");
                        
                        disabledBox.value='Слово '+ '"' +inputedWord + '" ' + 'верно';
                        
                            if (inputedWord == "игрушки" )
                                caseForDesert.value=inputedWord;
                        
                            if (inputedWord =="детсво")
                                caseForSand.value = inputedWord;
                            
                            if (inputedWord =="посудка")
                                caseForCaravan.value = inputedWord;
                        
                            if(inputedWord=="чаепитие")
                                caseForDune.value = inputedWord;
                        
						break;
						
						}else{
							console.log("Слова не совпадают");
							disabledBox.value='Слово ' + '"' +inputedWord+'"'+'неверно';
						}

				}
					
	}

