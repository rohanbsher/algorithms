
// '''
// Given an array of words and a max length per line, return an array of strings where each string represents a fully justified line. A fully justified line means that the first letter and last letter in the line should be a letter and not a space, and extra spaces are distributed as evenly as possible.

// For the last line of text, it should be left-justified, and no extra space is inserted between words.
 

// EXAMPLE(S)
// ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], k = 16

// returns
// ["the  quick brown", // (2 spaces, 1 space)
// "fox  jumps  over", // (2 spaces, 2 spaces)
// "the lazy dog    "]  // (left justify, fill the end with 4 spaces)
 

// FUNCTION SIGNATURE
// def fullJustify(words: list[str], maxWidth: int) -> list[str]:


// k = 19

// full justified line
// the  last  line  is
// left justified


// Idea:
// 1. Take as many words as you can in a line
//   --> If adding a word goes above the Width, then it goes to the next line
// 2. distribute the spaces between words (at least 1 space between the words)
//   --> How should we distribute the extra spaces uniformly?
//     additional_spaces:3 , 3 words, 2 spots to fill
//     additional_spaces:4 , 3 words, 2 spots to fill


//   for current_line:List in lines:

//     additional_spaces = k - sum of length of the words 

//     number_of_spots_to_fill = len(current_line)-1
//     buckets = [0] * number_of_spots_to_fill

//     i = 0
//     while additional_spaces >= 0:
//       buckets[i] += 1
//       i+=1
//       additional_spaces -=1 

    
//     # we have the words
//     line_in_str = ""
//     for k in range(len(buckets))
//       line_in_str = current_line[k] + (buckets[k]*" ")

//     line_in_str += current_line[-1]

    
// integer * string --> 
// 2*"abc" ---> abcabc





// [['the', 'quick', 'brown']


// def break_into_lines:
//   lines = []
//   current_line = []
//   cursor = 0

//   loop over the input array 
//   if cursor + current_word+ one_space goes more than K:
//       // we go over the width, so we need to go to the next line
//       lines.append(current_line)
      
//       // add the word to the new line
//       current_line =[current_word]
//       cursor = len(current_word + space)
//   else:
//       // Add the current word to the current line
//       current_line.append(current_word)
//       cursor += len(current_word + space)

//   // add the last line to the output
//   lines.append(current_line)

  


// '''

// def break_into_lines(words,k):
//   lines = []
//   current_line = []
//   cursor = 0
  
//   for current_word in words:
//     if cursor + (len(current_word) + 1) > k:
//       lines.append(current_line)

//       current_line = [current_word]
//       cursor = len(current_word) + 1
    
//     else:
//       current_line.append(current_word)
//       cursor += len(current_word) + 1


//   lines.append(current_line)

//   return lines



// def fullJustify(words, k):
//     lines = break_into_lines(words,k)

//     # The last line needs to be left justifoed
//     # for current_line:List in lines (except the last line):
//     #     # Find out how many spaces needs to be distributed
//     #     additional_spaces = k - sum of length of the words 

//     #.    # find out the number of spots for those spaces
//     #     number_of_spots_to_fill = len(current_line)-1
//     #     buckets = [0] * number_of_spots_to_fill


//     #     # starting from the left bucket, distribute the spaces
//     #     i = 0
//     #     while additional_spaces >= 0:
//     #       buckets[i] += 1
//     #       i+=1
//     #       additional_spaces -=1 

        
//     #     # we have the words, recreate the line in string format
//     #     line_in_str = ""
//     #     for k in range(len(buckets))
//     #       line_in_str = current_line[k] + (buckets[k]*" ")

//     #.    # don't forget to add the last word in the array
//     #     line_in_str += current_line[-1]


//       last_lin" ".join(lines[-1])

// ### If you want to practive more test cases:
// ### https://leetcode.com/problems/text-justification/description/



// words =["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
// k = 16

// ret = break_into_lines(words, k)
// print(ret)

// # words =["the", "quick"]
// # k = 16
// # ret = break_into_lines(words, k)
// # print(ret)

function fullJustify(words: string[], maxWidth: number): string[] {
    const result: string[] = [];
    let currentLine: string[] = [];
    let currentLineLength: number = 0;

    for (const word of words) {
        if (currentLineLength + word.length + currentLine.length > maxWidth) {
            // Distribute spaces evenly
            let spacesNeeded = maxWidth - currentLineLength;
            for (let i = 0; i < spacesNeeded; i++) {
                console.log(currentLine);
                currentLine[i % (currentLine.length - 1 || 1)] += ' ';
            }
            result.push(currentLine.join(''));
            currentLine = [];
            currentLineLength = 0;
        }
        currentLine.push(word);
        currentLineLength += word.length;
    }

    // Handle the last line separately
    result.push(currentLine.join(' ') + ' '.repeat(maxWidth - currentLineLength - (currentLine.length - 1)));

    return result;
}


// Example 1:
const words1 = ["This", "is", "an", "example", "of", "text", "justification."];
const maxWidth1 = 16;
console.log(fullJustify(words1, maxWidth1));
// Output: ["This    is    an", "example  of text", "justification.  "]

// Example 2:
const words2 = ["What","must","be","acknowledgment","shall","be"];
const maxWidth2 = 16;
console.log(fullJustify(words2, maxWidth2));
// Output: ["What   must   be", "acknowledgment  ", "shall be        "]

// Example 3:
const words3 = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"];
const maxWidth3 = 20;
console.log(fullJustify(words3, maxWidth3));
// Output: ["Science  is  what we", "understand      well", "enough to explain to", "a  computer.  Art is", "everything  else  we", "do                  "]
