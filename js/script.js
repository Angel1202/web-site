


function isWordTrue() {
    
            
            var arrayTrueWords = [ "пустыня", "песок", "караван", "бархан"]; //array words
			var inputedWord = document.getElementById("input-word").value;
    
            jQuery(document).ready(function () {
                jQuery('.materialboxed').materialbox();
            }) ;
	
            
            console.log(inputedWord);

			for (var iterate = 0; iterate < arrayTrueWords.length; iterate++) {

					if ( arrayTrueWords[i] == inputedWord) {
                            console.log("Слова совпадают");
                        
                        disabledBox.value='Слово '+ '"' +inputedWord + '" ' + 'верно';
                        
                            if (inputedWord == "пустыня" )
                                caseForDesert.value=inputedWord;
                        
                            if (inputedWord =="песок")
                                caseForSand.value = inputedWord;
                            
                            if (inputedWord == "караван")
                                caseForCaravan.value = inputedWord;
                        
                            if(inputedWord=="бархан")
                                caseForDune.value = inputedWord;
                        
						break;
						
						}else{
							console.log("Слова не совпадают");
							disabledBox.value='Слово ' + '"' +inputedWord+'"'+'неверно';
						}

				}
					
	}

