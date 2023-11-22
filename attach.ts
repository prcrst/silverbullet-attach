import { editor } from "$sb/silverbullet-syscall/mod.ts";
import { niceDate, niceTime } from "$sb/lib/dates.ts";

export async function attachCameraImage() {
  const uploadName = await editor.prompt("The name for the upload:", `images/camera/${niceDate(new Date())}_${niceTime(new Date())}.jpg`);
  if (uploadName) {
    editor.attachFile(uploadName, "image/jpeg", "environment");
  }
}

export async function attachDailyImage() {
  const uploadName = await editor.prompt("The name for the daily image:", `images/daily/${niceDate(new Date())}.jpg`);
  if (uploadName) {
    editor.attachFile(uploadName, "image/jpeg");
  }
}

export async function insertImage(environment: string | null = null) {
  const fileName = await editor.attachFile(null, "image/*", environment);
  console.log(`Attached file: ${fileName}`);
  const cursorPos = await editor.getCursor();
  const page = await editor.getCurrentPage();
  await editor.insertAtCursor(`![](${fileName})`);
}

export async function insertCameraImage() {
  await insertImage("environment");
}