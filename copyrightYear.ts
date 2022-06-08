export default function copyrightYear(yearThen: string) {
  let date = new Date();
  let yearToday = date.getFullYear();

  if(yearToday === yearThen){
    return String('© ' + yearToday)
  }else{
    return String('© ' yearThen + ' - ' + yearToday)
  }
}
