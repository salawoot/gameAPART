import { Gamekung2Page } from './app.po';

describe('gamekung2 App', function() {
  let page: Gamekung2Page;

  beforeEach(() => {
    page = new Gamekung2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
