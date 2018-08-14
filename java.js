function myFunction()
	{
		BDT=document.getElementById("from").selectedIndex;
		switch(BDT){
			case 0:
				secondValue = document.getElementById("To").selectedIndex;
				switch(secondValue){
					case 0: 
						usd = parseFloat(document.getElementById("fromAmount").value *0.01204).toFixed(3);
						document.getElementById("ToAmount").value = usd;
						break;
					case 1: 
						aud = parseFloat(document.getElementById("fromAmount").value * 0.01518).toFixed(3);
						document.getElementById("ToAmount").value = aud;
						break;
					case 2: 
						bdt = parseFloat(document.getElementById("fromAmount").value);
						document.getElementById("ToAmount").value = bdt;
						break;
					case 3: 
						inr = parseFloat(document.getElementById("fromAmount").value * 0.76916).toFixed(3);
						document.getElementById("ToAmount").value = inr;
						break;
					case 4:
						euro = parseFloat(document.getElementById("fromAmount").value * 0.00964).toFixed(3);
						document.getElementById("ToAmount").value = euro;
						break;
					case 5:
						dirham = parseFloat(document.getElementById("fromAmount").value * 0.044).toFixed(3);
						document.getElementById("ToAmount").value = dirham;
						break;

				}
				break;
		}
		AUD=document.getElementById("from").selectedIndex;
		switch(AUD){
			case 1:
				secondValue = document.getElementById("To").selectedIndex;
				switch(secondValue){
					case 0: 
						usd = parseFloat(document.getElementById("fromAmount").value * 0.79).toFixed(3);
						document.getElementById("ToAmount").value = usd;
						break;
					case 1: 
						aud = parseFloat(document.getElementById("fromAmount").value).toFixed(3);
						document.getElementById("ToAmount").value = aud;
						break;
					case 2: 
						bdt = parseFloat(document.getElementById("fromAmount").value * 66.09).toFixed(3);
						document.getElementById("ToAmount").value = bdt;
						break;
					case 3: 
						inr = parseFloat(document.getElementById("fromAmount").value * 50.71).toFixed(3);
						document.getElementById("ToAmount").value = inr;
						break;
					case 4:
						euro = parseFloat(document.getElementById("fromAmount").value * 0.64).toFixed(3);
						document.getElementById("ToAmount").value = euro;
						break;
					case 5:
						dirham = parseFloat(document.getElementById("fromAmount").value * 2.91).toFixed(3);
						document.getElementById("ToAmount").value = dirham;
						break;

				}
				break;
		}

		INR=document.getElementById("from").selectedIndex;
		switch(INR){
			case 2:
				secondValue = document.getElementById("To").selectedIndex;
				switch(secondValue){
					case 0: 
						usd = parseFloat(document.getElementById("fromAmount").value * 0.016).toFixed(3);
						document.getElementById("ToAmount").value = usd;
						break;
					case 1: 
						aud = parseFloat(document.getElementById("fromAmount").value *0.020).toFixed(3);
						document.getElementById("ToAmount").value = aud;
						break;
					case 2: 
						bdt = parseFloat(document.getElementById("fromAmount").value * 1.30).toFixed(3);
						document.getElementById("ToAmount").value = bdt;
						break;
					case 3: 
						inr = parseFloat(document.getElementById("fromAmount").value).toFixed(3);
						document.getElementById("ToAmount").value = inr;
						break;
					case 4:
						euro = parseFloat(document.getElementById("fromAmount").value * 0.013).toFixed(3);
						document.getElementById("ToAmount").value = euro;
						break;
					case 5:
						dirham = parseFloat(document.getElementById("fromAmount").value * 0.057).toFixed(3);
						document.getElementById("ToAmount").value = dirham;
						break;

				}
				break;
		}

		USD=document.getElementById("from").selectedIndex;
		switch(USD){
			case 3:
				secondValue = document.getElementById("To").selectedIndex;
				switch(secondValue){
					case 0: 
						usd = parseFloat(document.getElementById("fromAmount").value).toFixed(3);
						document.getElementById("ToAmount").value = usd;
						break;
					case 1: 
						aud = parseFloat(document.getElementById("fromAmount").value * 1.26).toFixed(3);
						document.getElementById("ToAmount").value = aud;
						break;
					case 2: 
						bdt = parseFloat(document.getElementById("fromAmount").value * 83.32).toFixed(3);
						document.getElementById("ToAmount").value = bdt;
						break;
					case 3: 
						inr = parseFloat(document.getElementById("fromAmount").value * 63.91).toFixed(3);
						document.getElementById("ToAmount").value = inr;
						break;
					case 4:
						euro = parseFloat(document.getElementById("fromAmount").value * 0.80).toFixed(3);
						document.getElementById("ToAmount").value = euro;
						break;
					case 5:
						dirham = parseFloat(document.getElementById("fromAmount").value * 3.67).toFixed(3);
						document.getElementById("ToAmount").value = dirham;
						break;

				}
				break;
		}


		EURO=document.getElementById("from").selectedIndex;
		switch(EURO){
			case 4:
				secondValue = document.getElementById("To").selectedIndex;
				switch(secondValue){
					case 0: 
						usd = parseFloat(document.getElementById("fromAmount").value * 1.25).toFixed(3);
						document.getElementById("ToAmount").value = usd;
						break;
					case 1: 
						aud = parseFloat(document.getElementById("fromAmount").value * 1.58).toFixed(3);
						document.getElementById("ToAmount").value = aud;
						break;
					case 2: 
						bdt = parseFloat(document.getElementById("fromAmount").value * 104.01).toFixed(3);
						document.getElementById("ToAmount").value = bdt;
						break;
					case 3: 
						inr = parseFloat(document.getElementById("fromAmount").value * 79.77).toFixed(3);
						document.getElementById("ToAmount").value = inr;
						break;
					case 4:
						euro = parseFloat(document.getElementById("fromAmount").value).toFixed(3);
						document.getElementById("ToAmount").value = euro;
						break;
					case 5:
						dirham = parseFloat(document.getElementById("fromAmount").value * 4.58).toFixed(3);
						document.getElementById("ToAmount").value = dirham;
						break;

				}
				break;
		}

		Dirham=document.getElementById("from").selectedIndex;
		switch(Dirham){
			case 5:
				secondValue = document.getElementById("To").selectedIndex;
				switch(secondValue){
					case 0: 
						usd = parseFloat(document.getElementById("fromAmount").value * 0.27).toFixed(3);
						document.getElementById("ToAmount").value = usd;
						break;
					case 1: 
						aud = parseFloat(document.getElementById("fromAmount").value * 0.34).toFixed(3);
						document.getElementById("ToAmount").value = aud;
						break;
					case 2: 
						bdt = parseFloat(document.getElementById("fromAmount").value * 22.69).toFixed(3);
						document.getElementById("ToAmount").value = bdt;
						break;
					case 3: 
						inr = parseFloat(document.getElementById("fromAmount").value * 17.40).toFixed(3);
						document.getElementById("ToAmount").value = inr;
						break;
					case 4:
						euro = parseFloat(document.getElementById("fromAmount").value * 0.22).toFixed(3);
						document.getElementById("ToAmount").value = euro;
						break;
					case 5:
						dirham = parseFloat(document.getElementById("fromAmount").value).toFixed(3);
						document.getElementById("ToAmount").value = dirham;
						break;

				}
				break;
		}










		

    }