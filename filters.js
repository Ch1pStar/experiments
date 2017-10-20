(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.mask = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.filters[0]);
        this.addChild(instance1);
    });

    lib.lines = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.filters[1]);
        this.addChild(instance1);
    });

    lib.filters = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 60
        });
        var instance3 = new lib.lines()
            .setTransform(404.25, 305.4);
        this[instance3.name = "lines"] = instance3;
        var instance2 = new Sprite(fromFrame("1"))
            .setTransform(-5, 205);
        var instance1 = new lib.mask()
            .setTransform(554.25, 224.25);
        this[instance1.name = "m"] = instance1;
        this.addChild(instance3, instance2, instance1);
    });

    lib.filters.assets = {
        "1": "images/1.png",
        "filters": "images/filters.shapes.txt"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.filters,
        background: 0xffffff,
        width: 800,
        height: 600,
        framerate: 60,
        totalFrames: 1,
        library: lib
    };
}