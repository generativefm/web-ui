import convertStringValueToDuration from './convert-string-value-to-duration';

describe('convertStringValueToDuration', () => {
  it('should use the last two digits as seconds', () => {
    expect(convertStringValueToDuration('20')).to.equal(20 * 1000);
    expect(convertStringValueToDuration('99')).to.equal(99 * 1000);
    expect(convertStringValueToDuration('3')).to.equal(3 * 1000);
  });
  it('should use the third- and fourth-to-last digits as minutes', () => {
    expect(convertStringValueToDuration('2000')).to.equal(20 * 60 * 1000);
    expect(convertStringValueToDuration('9900')).to.equal(99 * 60 * 1000);
    expect(convertStringValueToDuration('300')).to.equal(3 * 60 * 1000);
  });
  it('should use the fifth- and sixth-to-last digits as hours', () => {
    expect(convertStringValueToDuration('200000')).to.equal(
      20 * 60 * 60 * 1000
    );
    expect(convertStringValueToDuration('990000')).to.equal(
      99 * 60 * 60 * 1000
    );
    expect(convertStringValueToDuration('30000')).to.equal(3 * 60 * 60 * 1000);
  });
  it('should combine all the values and return the result in milliseconds', () => {
    const hours = '12';
    const minutes = '45';
    const seconds = '33';
    expect(
      convertStringValueToDuration(`${hours}${minutes}${seconds}`)
    ).to.equal(hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000);
  });
  it('should return null for unparsable input', () => {
    expect(convertStringValueToDuration(undefined)).to.equal(null);
    expect(convertStringValueToDuration(null)).to.equal(null);
    expect(convertStringValueToDuration('23loljk')).to.equal(null);
  });
});
