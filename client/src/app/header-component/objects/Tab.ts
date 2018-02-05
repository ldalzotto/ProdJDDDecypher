export class Tab {
  private _tabName: string;
  private _componentName: string;

  constructor(tabName: string, componentName: string) {
    this._tabName = tabName;
    this._componentName = componentName;
  }

  get componentName(): string {
    return this._componentName;
  }

  set componentName(value: string) {
    this._componentName = value;
  }

  get tabName(): string {
    return this._tabName;
  }

  set tabName(value: string) {
    this._tabName = value;
  }

}
