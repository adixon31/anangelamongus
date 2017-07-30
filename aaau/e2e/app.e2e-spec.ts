import { AaauPage } from './app.po';

describe('aaau App', () => {
  let page: AaauPage;

  beforeEach(() => {
    page = new AaauPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
