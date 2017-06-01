import { ParthTestPage } from './app.po';

describe('parth-test App', () => {
  let page: ParthTestPage;

  beforeEach(() => {
    page = new ParthTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
