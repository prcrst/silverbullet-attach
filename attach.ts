import { editor } from "$sb/silverbullet-syscall/mod.ts";

// Stolen from silverbullet dates.ts
function niceDate(d: Date): string {
  function pad(n: number) {
    let s = String(n);
    if (s.length === 1) {
      s = "0" + s;
    }
    return s;
  }

  return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
}

export async function attachImage() {
  const uploadName = await editor.prompt("The name for the upload:");
  if (uploadName) {
    editor.attachFile(uploadName, "image/*");
  }
}

export async function attachDailyImage() {
  const uploadName = await editor.prompt("The name for the daily image:", `images/daily/${niceDate(new Date())}.jpg`);
  if (uploadName) {
    editor.attachFile(uploadName!, "image/jpeg");
  }
}
