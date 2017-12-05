function theBeatlesPlay(musicians, instruments) {
  const Beatles = [];
  for ( var i = 0; i < musicians.length; i++) {
    Beatles.push(`${musicians[i]} plays ${instruments[i]}.`)
  }
  return Beatles
}
