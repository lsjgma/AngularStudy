import { AngularStudyPage } from './app.po';

describe('angular-study App', function() {
  let page: AngularStudyPage;

  beforeEach(() => {
    page = new AngularStudyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
