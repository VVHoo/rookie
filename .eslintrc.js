module.exports = {
	parser:  '@typescript-eslint/parser',
	rules: {
    'no-unused-vars': [
      'error',
      { varsIgnorePattern: '.*', args: 'none' }
    ]
  }
}
