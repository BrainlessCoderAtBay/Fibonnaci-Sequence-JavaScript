function FibonnaciSequence(){
			//First two lines of the sequance
    let fibonnaciNumbers = [0, 1];
    while (CurrentFibonnaciNumber != 48){
        const newRow = document.createElement("tr");
        const NumCell = document.createElement("td");
        const FibCell = document.createElement("td");

        //Prints the first 2 numbers then starts running the math

        if (CurrentFibonnaciNumber == 1){
            NumCell.textContent = CurrentFibonnaciNumber
            FibCell.textContent = fibonnaciNumbers[0]

        }else if(CurrentFibonnaciNumber == 2){
            NumCell.textContent = CurrentFibonnaciNumber
            FibCell.textContent = fibonnaciNumbers[1]

        }else{
            let nextNumber = fibonnaciNumbers[0] + fibonnaciNumbers[1];
            NumCell.textContent = CurrentFibonnaciNumber ;
            FibCell.textContent = nextNumber;
            fibonnaciNumbers[0] = fibonnaciNumbers[1];
            fibonnaciNumbers[1] = nextNumber;

        }
        //Appends the number at the end
        newRow.appendChild(NumCell);
        newRow.appendChild(FibCell);
        FibTable.appendChild(newRow);
        CurrentFibonnaciNumber++
    }
}