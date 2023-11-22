import { editor, space } from "$sb/silverbullet-syscall/mod.ts";
import { readSettings } from "$sb/lib/settings_page.ts";
import { niceDate, niceTime } from "$sb/lib/dates.ts";

export async function attachImage(prefix: string | null = null, capture: string | null = null) {
  const { attachImagePrefix } = await readSettings({
    attachImagePrefix: "images",
  });

  prefix ??= attachImagePrefix;

  const uploadFile = await editor.uploadFile("image/*", capture);
  const uploadName = await editor.prompt("Name:", `${prefix}/${uploadFile.name}`);
  if (uploadName) {
    await space.writeAttachment(uploadName, uploadFile.content);
    await editor.insertAtCursor(`![](${uploadName})`);
  }
}

export async function attachCameraImage() {
  const { cameraImagePrefix } = await readSettings({
    cameraImagePrefix: "images/camera",
  });

  await attachImage(cameraImagePrefix, "environment");
}

export async function attachDailyImage() {
  const { dailyImagePrefix } = await readSettings({
    dailyImagePrefix: "images/daily",
  });

  const uploadFile = await editor.uploadFile("image/*");
  const suffix = uploadFile.name.split('.').pop();
  const uploadName = await editor.prompt("Daily image name:", `${dailyImagePrefix}/${niceDate(new Date())}.${suffix}`);
  if (uploadName) {
    await space.writeAttachment(uploadName, uploadFile.content);
    await editor.insertAtCursor(`![](${uploadName})`);
  }
}

export async function attachImageQuiet(prefix: string | null = null, capture: string | null = null) {
  const { attachImagePrefix } = await readSettings({
    attachImagePrefix: "images",
  });

  prefix ??= attachImagePrefix;

  const uploadFile = await editor.uploadFile("image/*", capture);
  const uploadName = `${prefix}/${uploadFile.name}`;
  await space.writeAttachment(uploadName, uploadFile.content);
  await editor.insertAtCursor(`![](${uploadName})`);
}

export async function insertImage(_ctx: any) {
  attachImage();
}

export async function insertCameraImage(_ctx: any) {
  attachCameraImage();
}