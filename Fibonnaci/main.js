function FibonnaciSequence(){
    let fibonnaciNumbers = [0, 1];
    while (CurrentFibonnaciNumber != 48){
        const newRow = document.createElement("tr");
        const NumCell = document.createElement("td");
        const FibCell = document.createElement("td");
        
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
        newRow.appendChild(NumCell);
        newRow.appendChild(FibCell);
        FibTable.appendChild(newRow);
        CurrentFibonnaciNumber++
    }
}