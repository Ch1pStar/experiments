let renderer,
	w,
	h,
	stage;

var topBar, rightBar, bottomBar, leftBar;
var topRight, topLeft, bottomRight, bottomLeft;
var cnt;
var a = 0; var b = 0;
var nS;

const init = () => {
	renderer = PIXI.autoDetectRenderer(1920, 1080, {
        view: document.getElementById('stage'),
        backgroundColor: 0xff0055,
        antialias: true
    });

	s = new PIXI.Container();

	update();

	PIXI.animate.load(lib.cnt, loaded);
};

const loaded = (instance) => {
	stage = instance;
	stage.name = 'stage';
	// s.addChild(stage);

	ns = new NineSliceContainer(stage.cnt);

	ns.x = 300;
	ns.y = 300;

	s.addChild(ns);

	// const resizableCnt = stage.cnt;

	// topBar = resizableCnt.topBar;
	// rightBar = resizableCnt.rightBar;
	// bottomBar = resizableCnt.bottomBar;
	// leftBar = resizableCnt.leftBar;

	// topRight = resizableCnt.topRight;
	// topLeft = resizableCnt.topLeft;
	// bottomRight = resizableCnt.bottomRight;
	// bottomLeft = resizableCnt.bottomLeft;

	// cnt = resizableCnt.cnt;


	// stage.cnt.x = stage.cnt.width/2;
	// stage.cnt.y = stage.cnt.height/2;
};


const resizeCnt = (w = 360, h = 360) => {
	cnt.width = w;
	cnt.height = h;

	// BARs
	topBar.width = cnt.width;
	topBar.y = cnt.y - topBar.height;
	topBar.x = cnt.x // centered

	bottomBar.width = cnt.width;
	bottomBar.y = cnt.y + cnt.height;
	bottomBar.x = cnt.x // centered

	rightBar.x = cnt.x+cnt.width;

	leftBar.height = cnt.height;
	rightBar.height = cnt.height;

	// CORNERs
	topLeft.x = cnt.x - topLeft.width
	topRight.x = cnt.x + cnt.width
	bottomRight.x = cnt.x + cnt.width

	bottomLeft.y = cnt.y + cnt.height;
	bottomRight.y = cnt.y + cnt.height;
};


const update = () => {
	requestAnimationFrame(update);
	// if(stage && (a<600 && b<600)) resizeCnt(a++, b++);

	renderer.render(s);
};

document.addEventListener('DOMContentLoaded', init);