
# merge melown 
cat lib/melown-core-v1-min.js \
    src/utility/utility.js \
    src/utility/dom.js \
    src/presenter/presenter.js \
    src/presenter/creator.js \
    src/presenter/render.js \
    src/presenter/handlers.js \
    src/autopilot/autopilot.js \
    src/rois/rois.js \
    src/ui/control/compass.js \
    src/ui/control/credits.js \
    src/ui/control/layers.js \
    src/ui/control/fallback.js \
    src/ui/control/holder.js \
    src/ui/control/logo.js \
    src/ui/control/scale.js \
    src/ui/control/map.js \
    src/ui/control/zoom.js \
    src/ui/control/popup.js \
    src/ui/control/space.js \
    src/ui/control/link.js \
    src/ui/control/navigation.js \
    src/ui/element/element.js \
    src/ui/element/draggable.js \
    src/ui/element/event.js \
    src/ui/element/events.js \
    src/ui/ui.js \
    src/control-mode/control-mode.js \
    src/control-mode/disabled.js \
    src/control-mode/map-observer.js \
    src/control-mode/pano.js \
    src/browser.js \
    src/config.js \
    src/interface.js > build/melown-v1.js

# merge css
cat src/presenter/css/main.css \
    src/presenter/css/panel.css \
    src/presenter/css/subtitles.css \
    src/browser.css > build/melown-v1.css

