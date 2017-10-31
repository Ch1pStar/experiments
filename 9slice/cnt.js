(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.TopBar = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.cnt[0]);
        this.addChild(instance1);
    });

    lib.LeftBar = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.cnt[2]);
        var instance1 = new Graphics()
            .drawCommands(shapes.cnt[1]);
        this.addChild(instance2, instance1);
    });

    lib.RightBar = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.cnt[3]);
        this.addChild(instance1);
    });

    lib.BottomBar = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.cnt[4]);
        this.addChild(instance1);
    });

    lib.BottomLeft = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.cnt[5]);
        var instance1 = new Sprite(fromFrame("kek"))
            .setTransform(11, 17);
        this.addChild(instance2, instance1);
    });

    lib.BottomRight = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.cnt[6]);
        var instance1 = new Sprite(fromFrame("kek"))
            .setTransform(11, 18);
        this.addChild(instance2, instance1);
    });

    lib.TopRight = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.cnt[7]);
        var instance1 = new Sprite(fromFrame("kek"))
            .setTransform(10, 24);
        this.addChild(instance2, instance1);
    });

    lib.TopLeft = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.cnt[8]);
        var instance1 = new Sprite(fromFrame("kek"))
            .setTransform(8, 26);
        this.addChild(instance2, instance1);
    });

    lib.cnt_1 = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.cnt[9]);
        var instance1 = new Sprite(fromFrame("kek"))
            .setTransform(53, 67);
        this.addChild(instance2, instance1);
    });

    lib.container = Container.extend(function () {
        Container.call(this);
        var instance9 = new lib.cnt_1()
            .setTransform(-90, -90);
        this[instance9.name = "cnt"] = instance9;
        var instance8 = new lib.TopLeft()
            .setTransform(-180, -180);
        this[instance8.name = "topLeft"] = instance8;
        var instance7 = new lib.TopRight()
            .setTransform(90, -180);
        this[instance7.name = "topRight"] = instance7;
        var instance6 = new lib.BottomRight()
            .setTransform(90, 90);
        this[instance6.name = "bottomRight"] = instance6;
        var instance5 = new lib.BottomLeft()
            .setTransform(-180, 90);
        this[instance5.name = "bottomLeft"] = instance5;
        var instance4 = new lib.BottomBar()
            .setTransform(-90, 90);
        this[instance4.name = "bottomBar"] = instance4;
        var instance3 = new lib.RightBar()
            .setTransform(90, -90);
        this[instance3.name = "rightBar"] = instance3;
        var instance2 = new lib.LeftBar()
            .setTransform(-180, -90);
        this[instance2.name = "leftBar"] = instance2;
        var instance1 = new lib.TopBar()
            .setTransform(-90, -180);
        this[instance1.name = "topBar"] = instance1;
        this.addChild(instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.cnt = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 60,
            loop: false
        });
        var instance1 = new lib.container()
            .setTransform(590.9, 276.7);
        this[instance1.name = "cnt"] = instance1;
        this.addChild(instance1);
    });

    lib.cnt.assets = {
        "kek": "images/kek.png",
        "cnt": "images/cnt.shapes.txt"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.cnt,
        background: 0x999999,
        width: 1280,
        height: 720,
        framerate: 60,
        totalFrames: 1,
        library: lib
    };
}