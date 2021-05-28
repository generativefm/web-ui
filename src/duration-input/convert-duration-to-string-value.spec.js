import convertDurationToStringValue from './convert-duration-to-string-value';

describe('convertDurationToStringValue', () => {
  it('should return an empty string for non-numeric input', () => {
    expect(convertDurationToStringValue('1234')).to.equal('');
  });
  it('should return an empty string for numeric input less than one second', () => {
    expect(convertDurationToStringValue(12)).to.equal('');
  });
  it('should return the number of seconds represented by the string', () => {
    expect(convertDurationToStringValue(33 * 1000)).to.equal('33');
    expect(convertDurationToStringValue(3 * 1000)).to.equal('3');
  });
  it('should return the number of minutes represented by the string', () => {
    expect(convertDurationToStringValue(33 * 60 * 1000)).to.equal('3300');
    expect(convertDurationToStringValue(3 * 60 * 1000)).to.equal('300');
  });
  it('should return the number of hours represented by the string', () => {
    expect(convertDurationToStringValue(33 * 60 * 60 * 1000)).to.equal(
      '330000'
    );
    expect(convertDurationToStringValue(3 * 60 * 60 * 1000)).to.equal('30000');
  });
  it('should return the full time in milliseconds represented by the string', () => {
    const hours = 12;
    const minutes = 45;
    const seconds = 33;
    expect(
      convertDurationToStringValue(
        hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000
      )
    ).to.equal(`${hours}${minutes}${seconds}`);
  });
  it('should pad the seconds value if hours or minutes are greater than zero', () => {
    expect(convertDurationToStringValue(1 * 60 * 1000 + 3 * 1000)).to.equal(
      `103`
    );
    expect(
      convertDurationToStringValue(1 * 60 * 60 * 1000 + 3 * 1000)
    ).to.equal('10003');
  });
  it('should pad the minutes value if hours are greater than zero', () => {
    expect(
      convertDurationToStringValue(1 * 60 * 60 * 1000 + 3 * 60 * 1000)
    ).to.equal('10300');
  });
});
