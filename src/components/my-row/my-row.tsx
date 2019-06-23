import { Element, Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-row',
  styleUrl: 'my-row.css',
  shadow: true
})
export class MyComponent {
  /**
   * columns
   */
  @Prop() cols: string;

  @Element() host: HTMLDivElement;

  private getCols(): string {
    return this.cols;
  }

  render() {
    return <div class="my-row" data-cols={this.getCols()}>
      { Array.from(this.host.children)
          .map(child => <div class="my-row__col" innerHTML={child.outerHTML} />)
      }
    </div>;
  }
}
