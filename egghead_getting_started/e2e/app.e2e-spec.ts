import { EggheadGettingStartedPage } from './app.po';

describe('egghead-getting-started App', function() {
  let page: EggheadGettingStartedPage;

  beforeEach(() => {
    page = new EggheadGettingStartedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
