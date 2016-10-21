import { IssuesPage } from './app.po';

describe('issues App', function() {
  let page: IssuesPage;

  beforeEach(() => {
    page = new IssuesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
