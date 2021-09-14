export const getColSpan = (index: number, screenSize: 'sm' | 'md' | 'lg') => {
  if(screenSize === 'lg'){
    if(index % 14 === 0 ||  index % 14 === 1 || index % 14 === 7 ||  index % 14 === 8){
      return 'col-span-3'
    } else if(index % 14 === 2 || index % 14 === 3 || index % 14 === 4 || index % 14 === 9 || index % 14 === 10 || index % 14 === 11){
      return 'col-span-2'
    } else if(index % 14 === 5 || index % 14 === 13){
      return 'col-span-2'
    } else if(index % 14 === 6 || index % 14 === 12){
      return 'col-span-4'
    }
  } else if(screenSize === 'md'){
    if(index % 11 === 0){
      return 'col-span-6'
    } else if(index % 11 === 3 || index % 11 === 8){
      return 'col-span-2'
    } else if(index % 11 === 4 || index % 11 === 7){
      return 'col-span-4'
    } else{
      return 'col-span-3'
    }
  } else{
    return 'col-span-6'
  }
}
