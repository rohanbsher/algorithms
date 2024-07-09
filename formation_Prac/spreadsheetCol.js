function ordinalToColumnR(headerStr) {
	let columnName = '';
	while (headerStr > 0) {
	  headerStr--
	  let remainder = headerStr % 26
	  columnName = String.fromCharCode('A'.charCodeAt(0) + remainder) + columnName;
	  headerStr = Math.floor(headerStr/26)
	}    
	return columnName;
  }
  
  function columnToOrdinalR(headerStr) {
	let columNum = 0;
	for (let i = 0; i < headerStr.length; i++) {
	  columNum = columNum * 26 + (headerStr.charCodeAt(i) - 'A'.charCodeAt(0) +1)
	}
	return columNum;
  }

  console.log(columnToOrdinalR("A") == 1)
  console.log(columnToOrdinalR("J") == 10)
  console.log(columnToOrdinalR("Z") == 26)
  console.log(columnToOrdinalR('AA') == 27)
  console.log(columnToOrdinalR('AB') == 28)
  console.log(columnToOrdinalR('BA') == 53)
  console.log(columnToOrdinalR('ZZ') == 702)
  console.log(columnToOrdinalR('AAA') == 703)
  
  console.log(ordinalToColumnR(53), "BA");
  console.log(ordinalToColumnR(675), 'YY');
  console.log(ordinalToColumnR(676), 'YZ');
  console.log(ordinalToColumnR(677), 'ZA');
  console.log(ordinalToColumnR(701), "ZY");
  console.log(ordinalToColumnR(702), "ZZ");
  console.log(ordinalToColumnR(703), "AAA");