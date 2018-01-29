import { browser, by, element } from 'protractor';

export class AppPage {
  static navigateTo() {
    return browser.get('/');
  }

  searchInput() {
    return element(by.css('#searchQuery'));
  }

  searchSpinner() {
    return element(by.css('#statusWrapper > msl-spinner'));
  }

  statusBar() {
    return element(by.css('#status'));
  }

  toggleDisqus() {
    return element(by.css('.toggle-disqus'));
  }

  disqusContainer() {
    return element(by.css('#disqus_thread'));
  }
}
