function regexpGOLF(string){
  if (string.match(/(car?t?)/)){
    return true;
  }
  else if (string.match(/prop|pop/)){
    return true;
  }
   else if (string.match(/ferret|ferry|ferrari/)){
    return true;
  }
  else if(string.match(/ious$/)){
    return true;
  }
  else if(string.match(/\s(.|;|,|:)/)){
    return true;
  }
  else if(string.match(/\w{7,}/)){
    return true;
  }
  else if(string.match(/\b[a-df-z]+\b/)){
    return true;
  }
  return false;
  
}
  regexpGOLF("a");