class NineSliceContainer extends PIXI.Container {

	constructor(container) {
		super();

		this._topBar = container.topBar;
		this._leftBar = container.leftBar;
		this._rightBar = container.rightBar;
		this._bottomBar = container.bottomBar;

		this._topRight = container.topRight;
		this._topLeft = container.topLeft;
		this._bottomRight = container.bottomRight;
		this._bottomLeft = container.bottomLeft;

		this._container = container.cnt;

		this.addChild(this._topLeft);
		this.addChild(this._topRight);
		this.addChild(this._bottomRight);
		this.addChild(this._bottomLeft);


		this.addChild(this._topBar);
		this.addChild(this._leftBar);
		this.addChild(this._rightBar);
		this.addChild(this._bottomBar);

		this.addChild(this._container);
	}

}
