    matriz = new Array;

    document.write("<table border = '0'>" + "<tr>");
        matriz = 
        [
            ["<td class= 'letra'>J</td>","<td>O</td>","<td>A</td>","<td>N</td>","<td>L</td>","<td>I</td>","<td>I</td>","<td>T</td>","<td>E</td>","<td>N</td>","<td>R</td>","<td class= 'letra'>C</td>"],
            ["<td class= 'letra1'>E</td>","<td class = 'letra'>A</td>","<td>T</td>","<td>E</td>","<td>N</td>","<td>A</td>","<td>S</td>","<td>I</td>","<td>D</td>","<td>I</td>","<td>R</td>","<td class ='letra'>A</td>"],
            ["<td class= 'letra'>M</td>","<td class= 'letra1'>L</td>","<td class= 'letra'>C</td>","<td class= 'letra1'>R</td>","<td class= 'letra1'>E</td>","<td class= 'letra1'>G</td>","<td class= 'letra1'>I</td>","<td class= 'letra1'>S</td>","<td class= 'letra1'>T</td>","<td class= 'letra1'>R</td>","<td class= 'letra1'>O</td>","<td class= 'letra'>N</td>"],
            ["<td>L</td>","<td class= 'letra'>I</td>","<td class= 'letra1'>D</td>","<td class= 'letra'>U</td>","<td>E</td>","<td class= 'letra1'>C</td>","<td class= 'letra1'>A</td>","<td class= 'letra1'>J</td>","<td class= 'letra1'>A</td>","<td class= 'letra1'>T</td>","<td class= 'letra1'>I</td>","<td class= 'letra'>A</td>"],
            ["<td>T</td>","<td>E</td>","<td class= 'letra'>R</td>","<td class= 'letra1'>O</td>","<td class= 'letra'>P</td>","<td>F</td>","<td>D</td>","<td>E</td>","<td>A</td>","<td>I</td>","<td>T</td>","<td class= 'letra'>N</td>"],
            ["<td>B</td>","<td class= 'letra'>I</td>","<td class= 'letra'>T</td>","<td class= 'letra'>A</td>","<td class= 'letra1'>R</td>","<td class= 'letra'>I</td>","<td class= 'letra'>R</td>","<td class= 'letra'>I</td>","<td>T</td>","<td>Y</td>","<td>O</td>","<td class= 'letra'>E</td>"],
            ["<td>R</td>","<td>E</td>","<td>G</td>","<td>O</td>","<td class= 'letra'>C</td>","<td class= 'letra1'>A</td>","<td class= 'letra'>R</td>","<td>H</td>","<td>T</td>","<td>F</td>","<td>Y</td>","<td class= 'letra'>I</td>"],
            ["<td class= 'letra'>J</td>","<td class= 'letra'>U</td>","<td class= 'letra'>Q</td>","<td class= 'letra'>U</td>","<td class= 'letra'>I</td>","<td class= 'letra'>A</td>","<td class= 'letra1'>D</td>","<td class= 'letra'>A</td>","<td>A</td>","<td>A</td>","<td>T</td>","<td class= 'letra'>A</td>"],
            ["<td>N</td>","<td>E</td>","<td>N</td>","<td>N</td>","<td>O</td>","<td>G</td>","<td class= 'letra'>T</td>","<td class= 'letra1'>O</td>","<td class= 'letra'>N</td>","<td>E</td>","<td>T</td>","<td>E</td>",],
            ["<td>A</td>","<td>L</td>","<td>Y</td>","<td>A</td>","<td>N</td>","<td>R</td>","<td>N</td>","<td class= 'letra'>U</td>","<td>H</td>","<td class= 'letra'>G</td>","<td>A</td>","<td>S</td>"],
            ["<td>K</td>","<td>N</td>","<td class= 'letra'>P</td>","<td class= 'letra'>A</td>","<td class= 'letra'>R</td>","<td class= 'letra'>I</td>","<td class= 'letra'>Q</td>","<td class= 'letra'>U</td>","<td class= 'letra'>E</td>","<td class= 'letra'>R</td>","<td class= 'letra'>A</td>","<td>B</td>"],
            ["<td>N</td>","<td>I</td>","<td>N</td>","<td class= 'letra'>I</td>","<td class= 'letra'>G</td>","<td class= 'letra'>U</td>","<td class= 'letra'>A</td>","<td class= 'letra'>P</td>","<td class= 'letra'>E</td>","<td>E</td>","<td>R</td>","<td>H</td>"]
        ]

        for(linha=0; linha<12; linha++){
          for(coluna=0; coluna<12; coluna++){
            document.write(matriz[linha][coluna])
          }
          document.write("</tr>");
          }
