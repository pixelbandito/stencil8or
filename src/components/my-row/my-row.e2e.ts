import { newE2EPage } from '@stencil/core/testing';

describe('my-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<row></row>');
    const element = await page.find('row');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<row></row>');
    const component = await page.find('row');
    const element = await page.find('row >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('cols', '2');
    await page.waitForChanges();
    expect(element.shadowRoot).toEqualHtml(`<div class="row" cols="2"></div>`);
  });
});
