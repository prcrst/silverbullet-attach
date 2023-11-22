
# SilverBullet attachment plugin

The plugin lets you attach images to you silverbullet pages via slash commands (and commands).

The slash commands should be preferred, use `/attach` to insert a file or `/camera` to upload a photo taken with a camera.


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
