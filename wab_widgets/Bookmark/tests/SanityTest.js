define([
  'dojo/_base/html',
  'dojo/query',
  'tests/support/WidgetManagerForTest',
  'tests/support/globals',
  'sinon',
], function (html, query, WidgetManagerForTest, globals, sinon) {

  var assert = window.intern.getPlugin('chai').assert;
  var bdd = window.intern.getPlugin('interface.bdd');

  var widgetJson = {
    id: 'bookmark1',
    uri: 'widgets/Bookmark/Widget'
  };

  bdd.describe('web map has no bookmark', function(){
    var wm, map;
    bdd.before(function(){
      wm = WidgetManagerForTest.getInstance();
      return wm.prepare({}, null);
    });

    bdd.after(function(){
    });

    bdd.beforeEach(function(){
      wm.destroyWidget('bookmark1');
    });

    bdd.it('empty config', function(){
      widgetJson.config = {
        "bookmarks2D": [],
        "bookmarks3D": [],
        "flyTime": 3000
      };
      return wm.loadWidget(widgetJson).then(function(widget){
        widget.placeAt(window.jimuConfig.layoutId);
        wm.openWidget(widget);
        assert.deepEqual(widget.bookmarks, []);
        assert.strictEqual(1, query('.header .add', widget.domNode).length);
      });
    });

    bdd.describe('one bookmark, basic operations', function(){
      bdd.it('check display, click, delete', function(){
        widgetJson.config = {
          "bookmarks2D": [{
            name: 'aa',
            displayName: 'aa',
            isInWebmap: false,
            extent: {
              "type": "extent",
              "xmin": -20201384.548170276,
              "ymin": -1439065.6306170467,
              "xmax": 2497355.3713897783,
              "ymax": 14215237.76218299,
              "spatialReference": {
                "wkid": 102100
              }
            }
          }],
          "bookmarks3D": [],
          "flyTime": 3000
        };
        return wm.loadWidget(widgetJson).then(function(widget){
          widget.placeAt(window.jimuConfig.layoutId);
          wm.openWidget(widget);
          // assert.deepEqual(widget.customBookmarks.bookmarks.length, 1);

          // var setExtentSpy = sinon.spy(map, 'setExtent');
          // widget._onBookmarkClick(widgetJson.config.bookmarks2D[0]);
          // assert.strictEqual(setExtentSpy.called, true);

          // widget._onDeleteBtnClicked();
          // assert.deepEqual(widget.bookmarks.length, 0);
          // map.setExtent.restore();
        });
      });
    });
  });
});