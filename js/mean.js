 var numbers = [1, 2, 3, 4, 5];
 var frequencies = [2, 4, 1, 10, 2];

 var tableBody = document.getElementById('dataTableBody');
 var totalSum = 0;
 var totalFrequency = 0;

 for (var i = 0; i < numbers.length; i++) {
     var number = numbers[i];
     var frequency = frequencies[i];
     var product = number * frequency;

     totalSum += product;
     totalFrequency += frequency;

     var row = "<tr><td>" + number + "</td><td>" + frequency + "</td><td>" + product + "</td></tr>";
     tableBody.innerHTML += row;
 }

 var mean = totalSum / totalFrequency;
 document.getElementById('mean').textContent = mean.toFixed(2);

 var sortedNumbers = numbers.slice().sort(function (a, b) { return a - b; });
 var middle = Math.floor(sortedNumbers.length / 2);
 var median = (sortedNumbers.length % 2 === 0) ? ((sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2) : sortedNumbers[middle];
 document.getElementById('median').textContent = median;

 var mode = numbers[frequencies.indexOf(Math.max(...frequencies))];
 document.getElementById('mode').textContent = mode;
