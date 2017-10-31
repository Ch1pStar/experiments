let renderer,
	w,
	h,
	stage,
	m,
	sp,
	rt,
	mask,
	blurFilter,
	invertMask;

let cnt;

class FilterArea extends PIXI.Container {

	constructor(x=0, y=0, w=300, h=300) {
		super();

		this.filterAreaRect = new PIXI.Rectangle(x,y,w,h);
	}

	getBounds(skipUpdate, rect) {
		return this.filterAreaRect;
    }
}

const init = () => {
	renderer = PIXI.autoDetectRenderer(1920, 1080, {
        view: document.getElementById('stage'),
        backgroundColor: 0xff0000,
        antialias: true
    });

	s = new PIXI.Container();

	update();

	PIXI.animate.load(lib.filters, loaded);
};

const lel = (e) => {
	const x = e.clientX;
	const y = e.clientY;

	cnt.filterAreaRect.x = x;
	cnt.filterAreaRect.y = y;

}

const loaded = (instance) => {
	stage = instance;
	stage.name = 'stage';
	m = stage.m;

	// hide filter area indicator
	// stage.removeChild(m);
	// m.visible = false;

	iniFilters();

	m.visible = true;
	stage.mask = m.children[0];
	s.addChild(stage);

	renderer.view.addEventListener('mousemove', lel);
};

const iniFilters = () => {
	m.visible = false;
	rt = PIXI.RenderTexture.create(stage.width, stage.height);

	renderer.render(stage, rt);

	sp = new PIXI.Sprite(new PIXI.Texture(rt));

	// create filter
	blurFilter = new PIXI.filters.BlurFilter();
	blurFilter.blur = 15;

	cnt = new FilterArea(m.x, m.y, m.width, m.height);
	cnt.filters = [blurFilter];

	cnt.addChild(sp);

	s.addChild(cnt);
};

const update = () => {
	requestAnimationFrame(update);

	renderer.render(s);
};

document.addEventListener('DOMContentLoaded', init);