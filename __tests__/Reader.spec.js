import Reader from 'src/Reader.js'

test('read a line', () => {
  const reader = new Reader('Hello world.')
  expect(reader.readLine()).toBe('Hello world')
})
