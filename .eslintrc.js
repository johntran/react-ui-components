module.exports = {
  extends: 'airbnb',
  parser: "babel-eslint",
  ecmaFeatures: {
    classes: true,
    jsx: true
  },
  rules: {
    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-closing-bracket-location': [true, {
      nonEmpty: 'after-props',
      selfClosing: 'tag-aligned',
    }]
  },
}
