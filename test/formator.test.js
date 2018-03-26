const formator = require('../lib/formator');

test('toCalmCase format "How are you" to howAreYou', () => {
    expect(formator.toCalmCase('How are you')).toBe('howAreYou');
});

test('toLodash format "How are you" to how_are_you', () => {
    expect(formator.toLodash('How are you')).toBe('how_are_you');
})