
# SilverBullet attachment plugin

The plugin lets you attach images to you silverbullet pages via slash commands and commands.

Slash commands:
- `attach`: Uploads an image, lets the user confirm/change the name before saving
- `camera`: Uploads an image from the camera (on desktop it just opens the file picker), lets the user confirm/change the name before saving
- `attachHere`: Uploads an image into a path corresponding to the current page, no confirmation

Commands:
- `Attach: Daily image`: Uploads an image into the daily image folder with a name pattern, lets the user confirm/change the name before saving
- `Attach: Camera image`: Uploads a camera image, lets the user confirm/change the name before saving

There are three settings to control where certain types of uploads go:
- `attachImagePrefix`: generic attached image location, defaults to: `images`
- `cameraImagePrefix`: location for images uploaded from the camera, defaults to: `images/camera`
- `dailyImagePrefix`: location for the daily images, defaults to: `images/daily`

## Build
To build this plug, make sure you have [SilverBullet installed](https://silverbullet.md/Install). Then, build the plug with:

```shell
deno task build
```

Or to watch for changes and rebuild automatically

```shell
deno task watch
```

Then, copy the resulting `.plug.js` file into your space's `_plug` folder. Or build and copy in one command:

```shell
deno task build && cp *.plug.js /my/space/_plug/
```

SilverBullet will automatically sync and load the new version of the plug (or speed up this process by running the {[Sync: Now]} command).

## Installation
Add

```
- github:prcrst/silverbullet-attach/attach.plug.js
```

to your `PLUGS` file, run `Plugs: Update` command and off you go!
