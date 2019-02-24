var button = document.querySelector('.js-button')
var output = document.querySelector('.js-output')
var code = document.querySelector('.js-code')
var borderRadiusLabel = document.querySelector('.js-border-radius-label')

var base = {
  backgroundColor: '#000',
  borderColor: '#000',
  borderSize: '0',
  fontSize: '16px',
  paddingX: '16px',
  paddingY: '8px',
  textColor: '#fff',
  textContent: 'Button'
}

document.addEventListener('input', function (event) {
  var value = event.target.value.trim()

  // Close preview
  output.classList.add('dn')

  if (event.target.matches('#textContent')) {
    if (value) {
      button.innerHTML = value
    } else {
      button.innerHTML = base.textContent
    }
  }

  if (event.target.matches('#textColor')) {
    if (value) {
      button.style.color = '#' + value
    } else {
      button.style.color = base.textColor
    }
  }

  if (event.target.matches('#backgroundColor')) {
    if (value) {
      button.style.backgroundColor = '#' + value
    } else {
      button.style.backgroundColor = base.backgroundColor
    }
  }

  if (event.target.matches('#fontFamily')) {
    button.style.fontFamily = value
  }

  if (event.target.matches('#fontSize')) {
    if (value) {
      button.style.fontSize = value + 'px'
    } else {
      button.style.fontSize = base.fontSize
    }
  }

  if (event.target.matches('#borderColor')) {
    if (value) {
      button.style.borderColor = '#' + value
    } else {
      button.style.borderColor = base.borderColor
    }
  }

  if (event.target.matches('#borderWidth')) {
    if (value) {
      button.style.borderWidth = value + 'px'
    } else {
      button.style.borderWidth = base.borderWidth
    }
  }

  if (event.target.matches('#borderRadius')) {
    button.style.borderRadius = value + 'px'
    borderRadiusLabel.innerHTML = `Border radius (${value + 'px'})`
  }

  if (event.target.matches('#paddingY')) {
    if (value) {
      button.style.paddingTop = value + 'px'
      button.style.paddingBottom = value + 'px'
    } else {
      button.style.paddingTop = base.paddingY
      button.style.paddingBottom = base.paddingY
    }
  }

  if (event.target.matches('#paddingX')) {
    if (value) {
      button.style.paddingLeft = value + 'px'
      button.style.paddingRight = value + 'px'
    } else {
      button.style.paddingLeft = base.paddingX
      button.style.paddingRight = base.paddingX
    }
  }
}, false)

document.addEventListener('click', function (event) {
  if (event.target.matches('.js-submit-button')) {
    event.preventDefault()
    output.classList.remove('dn')

    var style = window.getComputedStyle(button)

    code.innerHTML =
`{
  background-color: ${style.backgroundColor};
  border-color: ${style.borderColor};
  ${style.borderRadius === '0px' ? '' : `border-radius: ${style.borderRadius};`}
  border-width: ${style.borderWidth};
  color: ${style.color};
  font-family: ${style.fontFamily};
  font-size: ${style.fontSize};
  line-height: ${style.lineHeight};
  padding: ${style.paddingTop} ${style.paddingRight};
}`.replace(/^\s*\n/gm, '')
  }

  if (event.target.matches('.js-back-link')) {
    event.preventDefault()
    output.classList.add('dn')
  }
}, false)
