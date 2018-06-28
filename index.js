function takeANumber(line){
line.push(line.length + 1);
return `Welcome, You are number ${line.length} in line.`;
}

function nowServing(line){
  if (line.length === 0) {return 'There is nobody waiting to be served!'}
  return `Currently serving ${line.shift()}.`;
 }

function currentLine(line){
  if (line.length === 0) {return 'The line is currently empty.'}
  let namesAndPlaces = [];
  for (let i = 0, l = line.length; i<l; i++)
  { namesAndPlaces.push(`${i+1}. ${line[i]}`)}
  return`The line is currently: ${namesAndPlaces.join(', ')}`;
}