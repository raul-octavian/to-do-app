function setCookie(cookieName, cookieValue, lifespan) {
  const d = new Date()
  d.setTime(d.getTime() + (lifespan * 24 * 60 * 60 * 1000))
  const expires = 'expires=' + d.toUTCString()
  document.cookie = cookieName + '=' + cookieValue + ';' + expires + ';path=/'
}

function deleteCookie(cookieName) {
  // document.cookie = cookieName + '=' + '; ' + 'expires=01 Jan 1970 00:00:00 UTC' + ' ;path=/'
  document.cookie = `${cookieName}=;expires=01 Jan 1970 00:00:00 UTC ;path=/`
}

function getCookie(cookieName) {
  const name = cookieName + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

function checkCookie() {
  let user = getCookie('user')
  if (user !== '') {
    alert('Welcome again ' + user)
  } else {
    user = prompt('Please enter your name:', '')
    if (user !== '' && user !== null) {
      setCookie('user', user, 365)
    }
  }
}

export { setCookie, getCookie, checkCookie, deleteCookie }
